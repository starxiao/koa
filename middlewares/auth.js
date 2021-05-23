const basicAuth = require("basic-auth");
const jwt = require("jsonwebtoken");
const config = require('../commons/config');

async function auth(ctx, next) {
    const userToken = basicAuth(ctx.req);
    if(!userToken) {
        errorHandle(ctx, 500, '非法操作');
        return;
    }

    try {
        //验证前端传过来的token值，解析成一个uid, scope
        const userInfo = jwt.verify(userToken, config.userAuth.secretKey);
    }catch(err) {
        errorHandle(ctx, 500, '非法操作');
        return;
    }

    await next();
}

function errorHandle(ctx, code, msg) {
    ctx.status = code;
    ctx.response.body = {
        code: -1,
        data: [],
        msg: msg
    }
}

module.exports = {
    auth: auth
}
// exports.auth = auth;