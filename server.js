const path = require('path');
const koa = require('koa');
const static = require('koa-static');
const app = new koa();
const router = require('./router/index');
const log = require('./commons/log');
app.use(log)
    .use(router.routes())
    .use(static(path.resolve(__dirname), '/static'))

app.listen(3000);



