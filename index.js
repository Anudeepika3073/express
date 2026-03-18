/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';
// ❌ Unused variable (WARNING)
var unusedVar = 100

// ❌ Missing semicolon (ERROR)
var a = 10  

function test() {
    // ❌ Unused variable (WARNING)
    let x = 5   

    // ❌ console usage (WARNING if rule enabled)
    console.log("Inside test")
}

// ❌ eqeqeq issue (ERROR)
if (a == 10) {
  console.log("Hello")
}

// ❌ Undefined variable (ERROR)
console.log(notDefinedVar)

module.exports = require('./lib/express');
