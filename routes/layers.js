var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            73.65234375,
            27.955591004642553
          ],
          [
            80.595703125,
            27.68352808378776
          ]
        ]
      }
    }
  ]
});
});


module.exports = router;
