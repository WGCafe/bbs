import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      [{
        "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
        "source_comment": "test-0",
        "author_name": "Jessica",
        "content": "test",
        "create_time": 1234567890111,
        "collection_num": 20,
        "is_collection": false,
        "is_thanks": true
      }, {
        "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ8",
        "source_comment": "test-0",
        "author_name": "Jessica",
        "content": "test",
        "create_time": 1234567890112,
        "collection_num": 20,
        "is_collection": false,
        "is_thanks": true
      }, {
        "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ7",
        "source_comment": "test-0",
        "author_name": "Jessica",
        "content": "test",
        "create_time": 1234567890113,
        "collection_num": 20,
        "is_collection": true,
        "is_thanks": true
      }]
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;