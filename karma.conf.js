// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ],
    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      
      { pattern: './node_modules/hammerjs/hammer.min.js'},
      { pattern: './node_modules/@angular/material/prebuilt-themes/indigo-pink.css', included: true, watched: true },
    ],
    preprocessors: {
      
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    remapIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'), reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false, // do not print error summary
      suppressFailed: false,       // print info about failed tests
      suppressPassed: false,       // print info about passed tests
      suppressSkipped: true,       // do not print info about skipped tests
      showSpecTiming: true,        // print time elapsed for each spec
      failFast: false              // keep running tests after first error found
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebPackSourcePaths: true
    },
    
    reporters: config.angularCli && config.angularCli.codeCoverage
               ? ['spec', 'coverage-istanbul']
               : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
