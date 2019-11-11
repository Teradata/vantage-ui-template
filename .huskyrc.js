const { covalentHooks, generateHuskyConfig } = require('./node_modules/@covalent/coding-standards/husky/husky.js');
const huskyHooks = generateHuskyConfig(covalentHooks());
module.exports = huskyHooks;
