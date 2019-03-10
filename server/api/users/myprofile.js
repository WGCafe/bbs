import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.post('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {
      name: 'Lisa',
      location: 'Shanghai',
      avatar: 'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
      registerTime: '2019-01-29'
    });
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;

