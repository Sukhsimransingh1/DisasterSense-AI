import os
import pickle

import faiss

from sentence_transformers import SentenceTransformer

BASE_DIR = os.path.dirname(
    os.path.dirname(__file__)
)

INDEX_PATH = os.path.join(
    BASE_DIR,
    "faiss_index",
    "knowledge.index",
)

CHUNKS_PATH = os.path.join(
    BASE_DIR,
    "faiss_index",
    "chunks.pkl",
)

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

index = faiss.read_index(
    INDEX_PATH
)

with open(
    CHUNKS_PATH,
    "rb",
) as f:

    chunks = pickle.load(f)


def retrieve_context(
    query: str,
    top_k: int = 3,
):

    embedding = model.encode(
        [query]
    )

    distances, indices = index.search(
        embedding,
        top_k,
    )

    results = []

    for idx in indices[0]:

        if (
            idx >= 0
            and idx < len(chunks)
        ):

            results.append(
                chunks[idx]
            )

    return "\n\n".join(
        results
    )