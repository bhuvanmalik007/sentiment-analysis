var express = require('express');
var router = express.Router();

const geojson1 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "name": "Pipeline 1"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            76.32202148437499,
            27.44004046509707
          ],
          [
            77.47558593749999,
            27.950738722228763
          ],
          [
            77.67883300781249,
            28.23180985121183
          ],
          [
            77.67333984375,
            28.492833128965096
          ],
          [
            77.5030517578125,
            28.676130433078256
          ],
          [
            77.332763671875,
            28.859107573773
          ],
          [
            77.1240234375,
            28.86391842622456
          ]
        ]
      }
    }
  ]
}

const geojson2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "name": "Pipeline 2"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            76.0308837890625,
            28.154346532344004
          ],
          [
            76.48681640625,
            28.724313406473463
          ],
          [
            76.7340087890625,
            29.11377539511439
          ],
          [
            77.3931884765625,
            29.123373210819224
          ],
          [
            77.62939453125,
            29.291189838184863
          ],
          [
            77.7667236328125,
            28.87353946316266
          ],
          [
            78.046875,
            28.810986808864513
          ],
          [
            78.2940673828125,
            28.748396571187406
          ]
        ]
      }
    }
  ]
}

router.get('/:id', function(req, res, next) {
  res.send(`${geojson+id}`);
});


module.exports = router;
