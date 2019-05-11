'use strict';

const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/e7b3jV8eXIcw161',
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start()