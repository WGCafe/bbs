import Express from 'express';
import {responseClient} from '../util';

const router = Express.Router();

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {
      name: 'Lisa',
      location: 'Shanghai',
      avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546687975222&di=4301421c6f6f43eb14ca4f35ed1cf338&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F21%2F20170521090448_5NtYa.jpeg',
      registerTime: '2019-01-29'
    });
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.get('/', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJ1c2VybmFtZSI6IjIzMjEzMTIzMTIzIiwiZXhwIjoxNTQ1NjY1MTYwLCJlbWFpbCI6bnVsbH0.5Dxy4eO0yQNy_dpqYRn2ew5opSvbBg1I8MmId4BKt1o",
        "user_id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
        "new_message_num": 0
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.get('/:user_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000,
      {
        "username": "Jessica",
        "location": "Shanghai",
        "face_image": "https://test.com/path/x.jpg",
        "create_time": 1234567890111
      }
    );
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

router.put('/:user_id', function (req, res) {
  if (req) {
    responseClient(res, 200, 1000, {});
  } else {
    responseClient(res, 200, 2000, {error: "system error"});
  }
});

module.exports = router;