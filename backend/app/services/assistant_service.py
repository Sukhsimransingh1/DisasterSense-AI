import os
import tempfile

from PIL import Image
from dotenv import load_dotenv

import google.generativeai as genai
from google.api_core.exceptions import ResourceExhausted

from sqlalchemy.orm import Session

from app.models.chat import Chat
from app.rag.rag_service import retrieve_context

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


async def get_emergency_response(
    question: str,
    image=None,
    db: Session | None = None,
):

    if not question or not question.strip():

        question = (
            "Analyze this disaster image carefully. "
            "Identify the disaster, estimate severity, "
            "describe risks and provide emergency guidance."
        )

    history = ""

    if db:

        chats = (
            db.query(Chat)
            .filter(Chat.user_id == 1)
            .order_by(Chat.id.desc())
            .limit(5)
            .all()
        )

        chats.reverse()

        for chat in chats:

            history += f"""

User:
{chat.question}

Assistant:
{chat.answer}

"""

    DISASTER_KEYWORDS = [

        "fire",
        "burn",

        "burning",

        "wildfire",

        "smoke",

        "flames",

        "earthquake",

        "flood",

        "cyclone",

        "tsunami",

        "landslide",

        "heatwave",

        "snake",

        "chemical",

        "first aid",

        "cpr",

        "emergency",

        "disaster",

    ]

    if image is not None:

        rag_context = retrieve_context(
            question,
            top_k=3
        )

    elif any(

        keyword in question.lower()

        for keyword in DISASTER_KEYWORDS

    ):

        rag_context = retrieve_context(
            question,
            top_k=3
        )

    else:

        rag_context = ""

    print("\n========== RAG CONTEXT ==========\n")
    print(rag_context)
    print("\n===============================\n")

    system_prompt = f"""
You are DisasterSense AI.

You are an expert emergency response assistant.

Your primary goal is to save lives.

Never greet the user.

Never introduce yourself.

Never ask the user to describe the emergency again.

Immediately provide practical and actionable advice.

Use the retrieved knowledge below as your PRIMARY source.

==========================
RETRIEVED KNOWLEDGE
==========================

{rag_context}

==========================
CHAT HISTORY
==========================

{history}

==========================
CURRENT USER MESSAGE
==========================

{question}

==========================
RESPONSE FORMAT
==========================

Respond using markdown.

Include:

🚨 Immediate Actions

⚠️ Safety Precautions

❌ Things NOT to Do

🩹 First Aid

☎️ Emergency Services

If clothes are on fire:

- STOP
- DROP
- ROLL

If burns exist:

- Cool under running water for 20 minutes.

- Do NOT use ice.

- Do NOT use toothpaste.

- Do NOT use butter.

Always prioritize life-saving instructions.
"""

    try:

        if image is None:

            response = model.generate_content(
                system_prompt
            )

            answer = response.text

        else:

            suffix = os.path.splitext(
                image.filename
            )[1]

            with tempfile.NamedTemporaryFile(
                delete=False,
                suffix=suffix,
            ) as temp:

                content = await image.read()

                temp.write(content)

                temp_path = temp.name

            try:

                with Image.open(temp_path) as img:

                    response = model.generate_content(

                        [

                            system_prompt,

                            img.copy(),

                        ]

                    )

                    answer = response.text

            finally:

                try:

                    os.remove(temp_path)

                except:

                    pass

        if db:

            chat = Chat(

                user_id=1,

                question=question,

                answer=answer,

                image_path=None,

            )

            db.add(chat)

            db.commit()

        return answer

    except ResourceExhausted:

        return (
            "Gemini API quota exceeded. "
            "Please wait a minute and try again."
        )

    except Exception as e:

        print(e)

        return (
            "An unexpected error occurred while "
            "processing your request."
        )