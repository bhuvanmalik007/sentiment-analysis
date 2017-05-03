const ReducerF = fn => data => data.reduce(fn,0);
const AverageF = arr => data => data/arr.length;
const RateF = score => (score)/2;
const FinalRatingF = pr => cr => {
  return (cr + (cr-pr)/5)>5?5:(cr + (cr-pr)/5);
}

module.exports = { ReducerF, AverageF, RateF, FinalRatingF };
