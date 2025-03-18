from fastapi_azure_auth import SingleTenantAzureAuthorizationCodeBearer

azure_scheme = SingleTenantAzureAuthorizationCodeBearer(
    # BE client ID
    app_client_id='ee4014f9-e9e4-44f9-82b5-5f0846af06ec',
    # BE tenant ID
    tenant_id='80191597-2c2c-4ea6-85d0-e3bf4c2ab998',
    scopes={'api://msal-demo-be-repl/access_as_user':'access_as_user'},
    allow_guest_users=True
)