const vantageLoginProxyConfig = require('@td-vantage/ui-platform/auth/config/vantageLoginProxyConfig');

/* * * * * * * * * * * */
/* Edit these variables to point to your */
/* Vantage and local development environments */
/* * * * * * * * * * * */

const serverUrl = undefined; // Replace with Vantage base url. Ex: https://vantage.url.io
const localUrl = 'localhost:4200';
const localProto = 'http'; // http or https

if (!serverUrl) {
  throw Error('Update the serverUrl variable in the proxy.conf.js to point to your vantage env.');
}

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
