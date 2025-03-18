
from logging.config import dictConfig
from fastapi import FastAPI, Security
from fastapi.middleware.cors import CORSMiddleware
from auth import azure_scheme

from students import students

app = FastAPI(
    swagger_ui_oauth2_redirect_url='/oauth2-redirect',
    swagger_ui_init_oauth={
        'usePkceWithAuthorizationCodeGrant': True,
        # FE client ID
        'clientId': 'd30da35c-4041-4e81-9274-71af04a7bba8',
        # BE scope
        'scopes': 'api://msal-demo-be-repl/access_as_user'
    },
)

app.add_middleware(CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"])

app.include_router(students.router, dependencies=[Security(azure_scheme, scopes=["access_as_user"])])