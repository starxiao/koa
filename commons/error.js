async function error(ctx, next) {
    ctx.status = 500;
    ctx.response.body = {
        code: -1,
        data: [],
        msg: '非法访问'
    }
}

module.exports = {
    error
}