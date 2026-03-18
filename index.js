/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';
var x = 10   // ❌ no semicolon + var usage

console.log(x) // ❌ console usage + missing semicolon

function test(){
    let y = 5
}
module.exports = require('./lib/express');
