const path = require('path');
const fs = require('fs');
const router = require('koa-router')();

router.get('/', async ctx => {
    ctx.type = 'html';
    ctx.body = await fs.readFileSync(path.resolve(__dirname, '../views/home.html'));
});

router.get('/list', async ctx => {
    ctx.type = 'html';
    ctx.body = await fs.readFileSync(path.resolve(__dirname, '../views/list.html'));
});

module.exports = router;
