import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.post('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJ1c2VybmFtZSI6IjIzMjEzMTIzMTIzIiwiZXhwIjoxNTQ1NjY1MTYwLCJlbWFpbCI6bnVsbH0.5Dxy4eO0yQNy_dpqYRn2ew5opSvbBg1I8MmId4BKt1o",
        "user_id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
        "new_message_num": 20
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;