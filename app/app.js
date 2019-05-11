'use strict';

const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/e7b3jV8eXIcw161',
  target: 'http://sonia:11616c4700d6e54c76757129c1b05e8c27@192.168.1.217:8008/job/musterGIT/build?token=34DEB6763DDEA3CF',
  logger: console
})

const events = smee.start()