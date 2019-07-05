const vantageLoginProxyConfig = require('@td-vantage/ui-platform/auth/config/vantageLoginProxyConfig');

/* * * * * * * * * * * */
/* Edit these variables to point to your */
/* Vantage and local development environments */
/* * * * * * * * * * * */

const serverUrl = 'https://vantage.url.io'; // REPLACE WITH VANTAGE BASE URL
const localUrl = "localhost:4200";
const localProto = "http"; // http or https

/* * * * * * * * * * * */
/* This section contains the routes proxied through */
/* your local development environment and the Vantage deployment */
/* * * * * * * * * * * */

const PROXY_CONFIG = {
  ...vantageLoginProxyConfig({ serverUrl, localUrl, localProto }),
  '/api': {
    target: serverUrl,
    secure: false,
    changeOrigin: true,
  },
};

module.exports = PROXY_CONFIG;
