const CLIENT_ID = process.env.OKTA_CLIENT_ID || "";
const DOMAIN = process.env.OKTA_DOMAIN || "";
const REDIRECT_URI = `${window.location.origin}/login/callback`;
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const TOKEN = process.env.OKTA_API_TOKEN || "";

const oktaAuthConfig = {
  issuer: `https://${DOMAIN}/oauth2/default`,
  clientId: `${CLIENT_ID}`,
  redirectUri: `${REDIRECT_URI}`,
  disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  scopes: ["openid", "profile", "email"],
  pkce: true,
};

const oktaApiToken = TOKEN;

export { oktaAuthConfig, oktaApiToken };
