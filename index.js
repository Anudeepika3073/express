/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';
var x = 10   // ❌ unused variable (no-unused-vars)
var y = 20   // ❌ no semicolon + unused

if (x == y) {   // ❌ eqeqeq rule violation
  console.log("Equal")    
}


module.exports = require('./lib/express');
