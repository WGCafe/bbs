import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, [{
      'id': '123',
      'replyTo': 'John White',
      'replyContent': 'Hi, please tell me your questions',
      'vote_up': 20,
      'reply_time': 1234567890111
    }, {
      'id': '12312',
      'replyTo': 'John White Black',
      'replyContent': 'Hi, please tell me your questions',
      'vote_up': 20,
      'reply_time': 1234567890111
    }],
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;

