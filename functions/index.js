'use strict';

const functions = require('firebase-functions');

exports.date = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    res.status(200).end("Hello World")
  });
});
