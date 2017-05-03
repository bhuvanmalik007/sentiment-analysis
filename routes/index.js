var express = require('express');
var router = express.Router();
var analyze = require('sentiment-v2');
var RequestBuilder = require('./requestbuilder');
var MultipleCommentPromise = require('./promises/multiplecomment');

router.post('/single', function(req, res, next) {
  res.send(RequestBuilder(analyze(req.body.comment)));
});

router.post('/multiple', function(req, res, next) {
  MultipleCommentPromise(req.body.comments, req.body.pf2)
    .then(x => res.send(RequestBuilder(x)))
    .catch(x => res.send(RequestBuilder(x.message)));
});

module.exports = router;
