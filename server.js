const path = require('path');
const koa = require('koa');
const static = require('koa-static');
const app = new koa();
const router = require('./router/router');

app.use(router.routes());

app.use(static(path.resolve(__dirname), '/static'))
console.log('server listen to 3000');
app.listen(3000);



