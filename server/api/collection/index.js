import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.post('/:article_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {});
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

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        page: 1,
        page_size: 20,
        articles: [{
          id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
          vote_up: 20,
          vote_down: 30,
          face_image: "https://test.com/path/x.jpg",
          title: "test",
          comments_num: 20,
          create_time: 1234567890111,
          author_name: "Jessica",
          is_collection: true
        }, {
          id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ8",
          vote_up: 11,
          vote_down: 20,
          face_image: "https://test.com/path/x.jpg",
          title: "test",
          comments_num: 20,
          create_time: 1234567890111,
          author_name: "Jessica",
          is_collection: true
        }, {
          id: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ7",
          vote_up: 11,
          vote_down: 10,
          face_image: "https://test.com/path/x.jpg",
          title: "test",
          comments_num: 15,
          create_time: 1234567890111,
          author_name: "Jessica",
          is_collection: true
        }]
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;