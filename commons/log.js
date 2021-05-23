// log

module.exports = log;

async function log(ctx, next) {
    let start = Date.now();
    await next();
    let time = Date.now() - start;
    console.log(`${ctx.method} - ${ctx.url} - ${time + '******'}`);
}