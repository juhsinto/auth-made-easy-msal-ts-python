import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId:
      // FE client id
      "d30da35c-4041-4e81-9274-71af04a7bba8",
    authority:
      // FE endpoints Authority URL
      "https://login.microsoftonline.com/80191597-2c2c-4ea6-85d0-e3bf4c2ab998",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: [],
};
