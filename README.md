### MSAL Auth Example Demo
A simple Demo of using FastAPI (python), on the backend, and React+Vite on the frontend, using Microsoft Authentication Library (https://github.com/AzureAD/microsoft-authentication-library-for-js/)

I followed along to the tutorial by https://github.com/jade-codes/auth-made-easy/

*Requires creation of client app registrations in Azure*

#### Some screenshots:
##### Backend
BE Endpoints
![[be-Fastapi-endpoints.png]](screenshots/be-Fastapi-endpoints.png)

Routes are protected: 
![Routes are protected](screenshots/be-protected-routes.png)

After Authorizing: 
![After Authorizing](screenshots/be-before-authorization.png)

Before Authorizing: 
![Before Authorizing](screenshots/be-after-authorization.png)

Can now access Protected Routes: 
![Can now access Protected Routes](screenshots/be-access-protected-routes.png)

#### Frontend

Front End without logging in 
![Front End without logging in](screenshots/fe-not-logged-in.png)

Trying to access /students, which is a protected route: 
![Trying to access students](screenshots/fe-trying-to-access-protected-route.png)

After logging in: 
![After logging in](screenshots/fe-logged-in.png)

Front-end CRUD of the backend: 
![Front-end CRUD of the backend](screenshots/fe-crud.png)
