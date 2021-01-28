'use strict';

const tcb = require('@cloudbase/node-sdk');

function mongo() {
  const app = tcb.init({});

  return app.database();
}

module.exports = mongo;
