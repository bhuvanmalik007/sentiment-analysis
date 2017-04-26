const ReducerF = fn => data => data.reduce(fn,0);
const AverageF = arr => data => data/arr.length;
const RateF = score => (score)/2;

module.exports = { ReducerF, AverageF, RateF };
