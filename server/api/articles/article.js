import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.post('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.delete('/:article_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {});
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.get('/:article_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {
      "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
      "author_name": "Jessica",
      "title": "test",
      "content": "test",
      "image": "https://test.com/path/x.jpg",
      "thanks_num": 1,
      "collection_num": 1
    });
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.post('/:article_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {});
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;