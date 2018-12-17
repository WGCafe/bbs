/**
 * 中间件 - API主入口
 */
import Express from 'express';

const router = Express.Router();

/**
 * 模块中间件
 */

router.use('/articles', require('./articles'));
router.use('/articletype', require('./articletype'));
router.use('/operation', require('./operation'));
router.use('/userfav', require('./userfav'));

module.exports = router;