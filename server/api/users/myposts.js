import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, [{
      'id': '123',
      'title': 'Where can I find a good dentist?',
      'comment_num': 10,
      'vote_up': 20,
      'create_time': 1234567890111
    }, {
      'id': '12312',
      'title': 'Where can I find a good artist?',
      'comment_num': 7,
      'vote_up': 10,
      'create_time': 1234567890111
    }],
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;

