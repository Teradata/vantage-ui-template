'use strict';

const express = require('express');
const request = require('request');

// Constants
// port that will be running inside the docker
// use this number when deploying app
const PORT = 8080;
const HOST = '0.0.0.0';
// Base Url env variable set by Vantage backend
const redirectServer = process.env.APPCENTER_BASE_URL;

// App
const app = express();

// proxy to the webservice requests
app.all('/api/*', function(req, res) {
  // the url to the service endpoints
  // for self signed certificates used in vantage develop using the rejectUnauthorized: false
  // probably shouldn't do this in production
  var url = redirectServer + req.url;
  req
    .pipe(
      request({
        url,
        agentOptions: {
          rejectUnauthorized: false,
        },
      }),
    )
    .pipe(res);
});

// serve up the Covalent files
app.use(express.static(__dirname + '/'));

app.use('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(function(req, res) {
  res.status(404);
  res.render('404', { layout: false, title: '404: File Not Found' });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
