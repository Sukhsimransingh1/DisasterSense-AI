import os
import pickle

import faiss

from sentence_transformers import SentenceTransformer

KNOWLEDGE_DIR = "app/knowledge"

INDEX_DIR = "app/faiss_index"

os.makedirs(

    INDEX_DIR,

    exist_ok=True

)
def chunk_text(text: str):

    paragraphs = [

        p.strip()

        for p in text.split("\n\n")

        if p.strip()

    ]

    return paragraphs



model = SentenceTransformer(

    "all-MiniLM-L6-v2"

)

documents = []


for filename in os.listdir(

    KNOWLEDGE_DIR

):

    if filename.endswith(".txt"):

        filepath = os.path.join(

            KNOWLEDGE_DIR,

            filename

        )

        with open(

            filepath,

            "r",

            encoding="utf-8"

        ) as f:

            text = f.read()

        paragraphs = chunk_text(text)

        documents.extend(

            paragraphs

        )

print(

    f"Loaded {len(documents)} chunks."

)

embeddings = model.encode(

    documents,

    convert_to_numpy=True

)

dimension = embeddings.shape[1]

index = faiss.IndexFlatL2(

    dimension

)

index.add(

    embeddings

)

faiss.write_index(

    index,

    os.path.join(

        INDEX_DIR,

        "knowledge.index"

    )

)

with open(

    os.path.join(

        INDEX_DIR,

        "chunks.pkl"

    ),

    "wb"

) as f:

    pickle.dump(

        documents,

        f

    )

print(

    "FAISS index created successfully."

)