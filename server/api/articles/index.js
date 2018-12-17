import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        "count": 1,
        "next": null,
        "previous": null,
        "results": [
          {
            "id": 1,
            "author": {
              "nick_name": null,
              "gender": "female",
              "birthday": null,
              "email": "neverteaser@gmail.com",
              "mobile": null,
              "face_image": null,
              "address": null
            },
            "title": "test",
            "content": "test",
            "click_num": 0,
            "thanks_num": 0,
            "fav_num": 0,
            "forwarding_num": 0,
            "comments_num": 0,
            "create_time": "2018-12-10T21:28:08",
            "update_time": null,
            "article_type": 1
          },
          {
            "id": 2,
            "author": {
              "nick_name": null,
              "gender": "female",
              "birthday": null,
              "email": "test@gmail.com",
              "mobile": null,
              "face_image": null,
              "address": null
            },
            "title": "test",
            "content": "test",
            "click_num": 0,
            "thanks_num": 0,
            "fav_num": 0,
            "forwarding_num": 0,
            "comments_num": 0,
            "create_time": "2018-12-10T21:28:08",
            "update_time": null,
            "article_type": 1
          }
        ]
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;