const path = require('path');
const fs = require('fs');
const Router = require('koa-router');
const router = new Router();
const { auth } = require('../middlewares/auth');
router.get('/api/user/login', async ctx => {
    ctx.response.type = 'json';
    ctx.response.body = {
        data: '',
        msg: 'success'
    } 
});

router.get('/api/user/list', auth, async ctx => {
    ctx.response.type = 'json';
    ctx.response.body = [1, 2, 3, 4, 5, 6];
});

// router.get('/', async ctx => {
//     ctx.type = 'html';
//     ctx.body = await fs.readFileSync(path.resolve(__dirname, '../views/home.html'));
// });

// router.get('/list', async ctx => {
//     ctx.type = 'html';
//     ctx.body = await fs.readFileSync(path.resolve(__dirname, '../views/list.html'));
// });

module.exports = router;
