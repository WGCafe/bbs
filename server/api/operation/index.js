import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      [
        {
          "id": 1,
          "name": "讨论"
        },
        {
          "id": 2,
          "name": "询问"
        },
        {
          "id": 3,
          "name": "牙医"
        },
        {
          "id": 4,
          "name": "牙套"
        },
        {
          "id": 5,
          "name": "智齿"
        },
        {
          "id": 6,
          "name": "种植"
        }
      ]
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;