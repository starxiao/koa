import jwt from 'jsonwebtoken';
import config from './config';

/**
 * 生成token
 * @param {String} uid 
 * @param {String} scope 
 * @return {String}
 */
const generateToekn = (uid, scope) => {
    const { secretKey, expiresIn } = config.userAuth;

    const token = jwt.sign({
        uid,
        scope
    }, secretKey, {
        expiresIn
    });

    return token;
}

module.exports = {
    generateToekn,
}