'use strict';

const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: process.env.SOURCE_URL,
  target: process.env.TARGET_URL,
  logger: console
})

const events = smee.start()