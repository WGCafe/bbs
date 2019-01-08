import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        "page": 1,
        "page_size": 20,
        "articles": [{
          "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
          "vote_up": 20,
          "vote_down": 30,
          "face_image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          "title": "test",
          "comments_num": 20,
          "create_time": 1234567890111,
          "author_name": "Jessica",
          "is_collection": false
        }, {
          "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ7",
          "vote_up": 10,
          "vote_down": 20,
          "face_image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          "title": "test1",
          "comments_num": 10,
          "create_time": 1234567890111,
          "author_name": "Jessica",
          "is_collection": false
        }, {
          "id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ6",
          "vote_up": 5,
          "vote_down": 10,
          "face_image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          "title": "test1",
          "comments_num": 12,
          "create_time": 1234567890111,
          "author_name": "Jessica",
          "is_collection": false
        }]
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;