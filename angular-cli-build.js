/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'core-js/client/core.js',
      'rxjs/**/*.js',
      'hammerjs/*.min.js',
      '@angular/**/*.js',
      '@angular2-material/**/*.+(js|css)',
      '@covalent/**/*',
      'highlight.js/lib/**',
      'showdown/dist/showdown.js'
    ],
    polyfills: [
      'vendor/es6-shim/es6-shim.js',
      'vendor/reflect-metadata/Reflect.js',
      'vendor/systemjs/dist/system.src.js',
      'vendor/zone.js/dist/zone.js',
      'vendor/@angular/**/*.js',
      'vendor/@angular2-material/**/*.+(js|css)',
      'vendor/@covalent/**/*',
      'vendor/highlight.js/lib/**',
      'vendor/showdown/dist/showdown.js'
    ]
  });
};
