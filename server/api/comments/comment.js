import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.post('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
        "content": "test"
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.delete('/:comment_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {});
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.post('/comment_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {});
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;