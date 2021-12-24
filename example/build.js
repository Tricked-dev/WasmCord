const { readFileSync, writeFileSync } = require('fs');
let path = require('path').join(__dirname, 'plugin', 'plugin.js');
let str = readFileSync(path).toString('utf-8');
str = str.replace(
	'fetch(input)',
	'require("fs").readFileSync(require("path").join(__dirname, "plugin.wasm"))'
);
writeFileSync(path, str);
