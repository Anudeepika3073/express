/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';
// ❌ BUG: possible runtime error
function getUserName(user) {
  return user.name.toUpperCase();   // if user = null → crash
}

// ❌ VULNERABILITY: use of eval (security risk)
function runCode(input) {
  eval(input);   // Sonar will flag this
}

// trigger bug
getUserName(null);

// trigger vulnerability
runCode("console.log('Hello')");



module.exports = require('./lib/express');
