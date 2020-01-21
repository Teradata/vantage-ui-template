// @ts-check

const fs = require('fs');
const path = require('path');
const sass = require('sass');

module.exports = (targetOptions, originalIndexHtml) => {
  const preLoaderHtml = fs.readFileSync(path.join(__dirname, 'pre-loader.html'), { encoding: 'utf8' }).toString();
  const preLoaderCss = sass
    .renderSync({ file: path.join(__dirname, 'pre-loader.scss'), includePaths: ['node_modules'] })
    .css.toString();
  const preLoaderHtmlWithCss = preLoaderHtml.replace('<style></style>', `<style>${preLoaderCss}</style>`);
  const newIndexHtml = originalIndexHtml.replace('<div id="td-pre-loader"></div>', preLoaderHtmlWithCss);
  return newIndexHtml;
};
