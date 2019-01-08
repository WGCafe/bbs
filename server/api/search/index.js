import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        "articles": [{
          "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
          "title": "test",
          "create_time": 1234567890111
        }],
        "comments": [{
          "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ8",
          "source_comment": "test-0",
          "content": "test-0",
          "create_time": 1234567890112
        }],
        "users": [{
          "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ7",
          "face_image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          "username": "Jessica",
          "posted_article_num": 10,
          "posted_comment_num": 120
        }, {
          "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ6",
          "face_image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          "username": "Jessica",
          "posted_article_num": 0,
          "posted_comment_num": 10
        }]
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;