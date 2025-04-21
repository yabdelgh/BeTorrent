from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from fastapi import FastAPI, Header, HTTPException, Response

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (for development only!)
    # allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Simple endpoint
@app.get("/verify")
async def verify(authorization: str = Header(None, alias="Authorization")):
    print("---verify---")

    headers = {
        "Authorization": authorization,
    }

    response = requests.get(
        "http://localhost:3000/verify",
        headers=headers)


    print(response.json())
    print(response.status_code)
    print("---verify---")
    return Response(
                content=response.content,
                status_code=response.status_code,
                headers=dict(response.headers)
            )