# Pre loader

A loader that can be displayed before the angular assets are downloaded and angular is ready.

## Setup

`npm i -D @angular-builders/custom-webpack`

Update the angular.json

```json
"build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            "indexTransform": "@td-vantage/ui-platform/pre-loader",
```

```json
  "serve": {
          "builder": "@angular-builders/custom-webpack:dev-server",
```

Update the index.html

```html
<div id="td-pre-loader"></div>
<td-app></td-app>
```

Note that is alongside, not inside, of the root component. For an explanation see pre-loader.html
