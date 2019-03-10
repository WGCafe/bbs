/**
 * 中间件 - API主入口
 */
import Express from 'express';

const router = Express.Router();

/**
 * 模块中间件
 */

/* articles */
router.use('/articles', require('./articles'));
router.use('/articletype', require('./articletype'));
router.use('/article', require('./articles/article'));
router.use('/userfav', require('./collection'));

router.use('/search', require('./search'));
router.use('/comments', require('./comments'));
router.use('/comment', require('./comments/comment'));
router.use('/usermessage', require('./usermessage'));

router.use('/forgetpassword', require('./users/forgetpassword'));
router.use('/resetpassword', require('./users/resetpassword'));
router.use('/users', require('./users/profile'));
router.use('/login', require('./users/login'));
router.use('/myprofile', require('./users/profile'));
router.use('/mypost', require('./users/myposts'));
router.use('/mycomments', require('./users/mycomments'));

module.exports = router;