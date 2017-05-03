var analyze = require('sentiment-v2');
var Compose = require('../futils/composer');
var { ReducerF, AverageF, RateF, FinalRatingF } = require('../futils/composables');
var { IP } = require('./helperpromises');
const costRating = require('../futils/costrating');

const AnalyseMultipleComments = (arr,pr) => Compose(
  ReducerF((acc, x) => acc + (((analyze(x).score / analyze(x).words.length) + 5)|| 0)),
  AverageF(arr),
  RateF,
  FinalRatingF(costRating(pr)),
  IP
)(arr);

module.exports = AnalyseMultipleComments;
