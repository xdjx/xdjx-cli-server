'use strict';

const tcb = require('@cloudbase/node-sdk');
let tcbenv = null;
let app = null;
try {
  tcbenv = require('../../tcb.env');
} catch (error) {
  app = tcb.init({});
}

if (tcbenv) {
  const { env, secretId, secretKey } = tcbenv;
  app = tcb.init({
    env,
    secretId,
    secretKey,
  });
}

const db = app.database();

module.exports = { db };
