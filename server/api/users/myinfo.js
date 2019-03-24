import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {
      avatar: 'https://cdn4.buysellads.net/uu/1/41334/1550855391-cc_dark.png',
      username: 'zhouzhou',
      email: '6123188@qq.com',
      locatioin: 'Shanghai'
    },
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;

