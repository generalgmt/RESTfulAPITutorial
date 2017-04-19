'use strict';

var env = process.env.NODE_ENV || 'development';
var config = require(`./${env}`);


module.exports = config;
