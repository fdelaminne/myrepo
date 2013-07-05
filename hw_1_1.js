#!/usr/bin/env node
var fs = require('fs');
var outfile = "hw_1_1.txt";
var outStr = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, outStr);  
console.log("Script: " + __filename + "\nWrote: " + outStr + "To: " + outfile);

