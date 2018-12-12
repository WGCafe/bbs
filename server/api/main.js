/**
 * 中间件 - API主入口
 */
import Express from 'express';

const router = Express.Router();

/**
 * 模块中间件
 */

router.use('/api/articles', require('./articles'));
router.use('/api/articletype', require('./articletype'));

module.exports = router;