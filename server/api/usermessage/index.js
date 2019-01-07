import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.post('/:message_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {});
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, [{
      "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
      "message": "test-0",
      "is_read": false,
      "author_name": "Jessica",
      "article_title": "test",
      "create_time": 1234567890111
    }, {
      "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ8",
      "message": "test-1",
      "is_read": false,
      "author_name": "Jessica",
      "article_title": "test-1",
      "create_time": 1234567890112
    }, {
      "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ7",
      "message": "test-2",
      "is_read": false,
      "author_name": "Jessica",
      "article_title": "test-2",
      "create_time": 1234567890113
    }]
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;