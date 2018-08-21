'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEB_BASE_URL: '"/"',
  API_URL : '"http://localhost:3000"'
})
