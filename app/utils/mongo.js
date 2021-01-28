'use strict';

const Mongo = require('@pick-star/cli-mongodb');

const { mongodbUrl } = require('../../config/db');

function mongo() {
  return new Mongo(mongodbUrl);
}

module.exports = mongo;
