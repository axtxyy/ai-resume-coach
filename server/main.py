from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"message": "AI Resume Coach API is running 🚀"}