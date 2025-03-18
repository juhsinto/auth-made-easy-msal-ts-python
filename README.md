### MSAL Auth Example Demo
A simple Demo of using FastAPI (python), on the backend, and React+Vite on the frontend, using Microsoft Authentication Library (https://github.com/AzureAD/microsoft-authentication-library-for-js/)

I followed along to the tutorial by https://github.com/jade-codes/auth-made-easy/

*Requires creation of client app registrations in Azure*

#### Some screenshots:
##### Backend
BE Endpoints
![[be-Fastapi-endpoints.png]]

Routes are protected:
![[be-protected-routes.png]]

After Authorizing:
![[be-before-authorization.png]]

Before Authorizing:
![[be-after-authorization.png]]

Can now access Protected Routes:
![[be-access-protected-routes.png]]

#### Frontend

Front End without logging in
![[fe-not-logged-in.png]]

Trying to access /students, which is a protected route:
![[fe-trying-to-access-protected-route.png]]

After logging in:
![[fe-logged-in.png]]

Front-end CRUD of the backend:
![[fe-crud.png]]