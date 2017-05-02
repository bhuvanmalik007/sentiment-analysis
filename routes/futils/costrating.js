const _f = require('lodash/fp')

export default(price) => priceRanges.reduce(
  (acc, a, i) => acc || _f.inRange(a,priceRanges[i+1] || a, price),
   _f.inRange(0, 250)(price) && 0
 )
  // _f.inRange(0, 250)(price) && 0 ||
  // _f.inRange(250, 500)(price) && 1 ||
  // _f.inRange(500, 1000)(price) && 2 ||
  // _f.inRange(1000, 1500)(price) && 3 ||
  // _f.inRange(1500, 2500)(price) && 4 ||
  // _f.inRange(2500, 9999)(price) && 5


const priceRanges = [250, 500, 1000, 1500, 2500, 9999]
