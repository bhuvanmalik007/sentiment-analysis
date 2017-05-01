var analyze = require('sentiment-v2');
var Compose = require('../futils/composer');
var { ReducerF, AverageF, RateF } = require('../futils/composables');
var { IP } = require('./helperpromises');

const AnalyseMultipleComments = (arr) => Compose(
  ReducerF((acc, x) => acc + (analyze(x).score / analyze(x).words.length) + 5),
  AverageF(arr),
  RateF,
  parseInt,
  IP
)(arr);

module.exports = AnalyseMultipleComments;
