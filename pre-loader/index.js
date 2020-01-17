// @ts-check

const fs = require('fs');
const path = require('path');

module.exports = (targetOptions, indexHtml) => {
  const preLoaderMarkup = fs.readFileSync(path.join(__dirname, 'pre-loader.html'), { encoding: 'utf8' }).toString();
  return indexHtml.replace('<div id="td-pre-loader"></div>', preLoaderMarkup);
};
