# 🌍 DisasterSense AI

> **AI-Powered Disaster Intelligence & Emergency Response Platform**

DisasterSense AI is a full-stack AI-powered disaster management platform designed to provide intelligent emergency assistance, image-based disaster analysis, and context-aware guidance using **Retrieval-Augmented Generation (RAG)** and **Google Gemini AI**.

The platform combines **Generative AI, Computer Vision, Vector Search, and Modern Web Technologies** to help users make informed decisions during emergencies.

---

## 🚀 Key Features

### 🤖 AI Emergency Assistant

* Context-aware disaster chatbot
* Multi-turn conversations with chat history
* Emergency-focused responses
* AI-powered life-saving guidance
* Intelligent follow-up conversations

---

### 🖼️ Disaster Image Analysis

Upload an image and receive:

* Disaster identification
* Severity assessment
* Risk analysis
* Emergency recommendations
* First-aid guidance
* Safety precautions

Supports various disaster scenarios including:

* 🔥 Wildfires
* 🌊 Floods
* 🌍 Earthquakes
* 🌪️ Cyclones
* 🏔️ Landslides
* ☀️ Heatwaves
* 🧪 Chemical leaks
* 🩹 Burn injuries
* 🐍 Snake bites

---

### 📚 Retrieval-Augmented Generation (RAG)

Instead of relying solely on the language model, DisasterSense AI retrieves relevant emergency knowledge before generating responses.

The RAG pipeline includes:

* FAISS Vector Database
* Sentence Transformer Embeddings
* Custom Disaster Knowledge Base
* Semantic Search
* Context Injection into Gemini AI

This enables domain-specific and more reliable emergency guidance.

---

### 💬 Persistent Chat History

* Stores previous conversations
* Maintains conversational context
* Improves follow-up responses
* Powered by PostgreSQL

---

### 🚨 Incident Reporting

Users can report emergencies with structured details and optional image uploads.

---

### 📊 Analytics Dashboard

Interactive dashboard displaying:

* Active incidents
* AI analyses
* Emergency statistics
* System insights

---

### 🔐 Secure Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing

---

# 🏗️ System Architecture


                    +----------------------+
                    |     React Frontend   |
                    +----------+-----------+
                               |
                               |
                               ▼
                    +----------------------+
                    |   FastAPI Backend    |
                    +----------+-----------+
                               |
          +--------------------+--------------------+
          |                                         |
          ▼                                         ▼
+----------------------+              +---------------------------+
| PostgreSQL Database  |              |     FAISS Vector DB       |
|                      |              |   Disaster Knowledge Base |
+----------------------+              +-------------+-------------+
                                                    |
                                                    ▼
                                         +-------------------------+
                                         | Google Gemini 2.5 Flash |
                                         +-------------------------+
                                                    |
                                                    ▼
                                         AI Emergency Response


---

# 🛠️ Tech Stack

## Frontend

* React
* TypeScript
* Tailwind CSS
* React Router
* Axios

## Backend

* FastAPI
* SQLAlchemy
* Pydantic
* JWT Authentication

## Artificial Intelligence

* Google Gemini 2.5 Flash
* Sentence Transformers
* FAISS
* Retrieval-Augmented Generation (RAG)

## Database

* PostgreSQL (Neon)

## Computer Vision

* Gemini Vision
* Pillow

---

# 📂 Project Structure


backend/
│
├── app/
│   ├── api/
│   ├── core/
│   ├── database/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── rag/
│   ├── knowledge/
│   └── faiss_index/
│
├── requirements.txt
└── runtime.txt

frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   └── assets/




# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/<your-username>/DisasterSense-AI.git

cd DisasterSense-AI
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url

GEMINI_API_KEY=your_gemini_api_key
```

Run the backend:

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 📚 Building the Vector Database

Whenever new knowledge files are added:

```bash
python -m app.rag.build_index
```

This generates:

* `knowledge.index`
* `chunks.pkl`

---

# 🧠 AI Workflow

```text
User Query / Image

        │

        ▼

Semantic Search

        │

        ▼

FAISS Vector Retrieval

        │

        ▼

Relevant Disaster Knowledge

        │

        ▼

Chat History Context

        │

        ▼

Google Gemini 2.5 Flash

        │

        ▼

Structured Emergency Guidance
```

---

# 📖 Disaster Knowledge Base

The system currently contains curated knowledge for:

* Earthquake Safety
* Flood Safety
* Wildfire Response
* Cyclone Preparedness
* Tsunami Safety
* Landslide Safety
* Heatwave Protection
* CPR
* Burn First Aid
* Snake Bite Response
* Chemical Leak Emergencies
* General First Aid

---

# ✨ Highlights

* AI-powered emergency assistant
* Image-based disaster analysis
* Retrieval-Augmented Generation (RAG)
* FAISS vector search
* Context-aware conversations
* Persistent chat history
* Secure JWT authentication
* Incident reporting system
* Analytics dashboard
* Modular full-stack architecture

---

# 🚀 Future Improvements

* Voice-enabled emergency assistant
* OCR-based document understanding
* Multilingual support
* Live weather integration
* Real-time disaster alerts
* SMS and email notifications
* Interactive GIS mapping
* Mobile application

---

# 🤝 Contributing

Contributions are welcome.

Feel free to fork the repository, create a feature branch, and submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support helps improve and grow the project.
