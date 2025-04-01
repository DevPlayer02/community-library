import jwt from 'jsonwebtoken';

function generateJWT(id) {
    return jwt.sign({ id }, '87e71f18096f5ce5e56fdaa9ba8c2d09866b110ad67fa20c86112f5489595f08', { expiresIn: 86400 })
}

export { generateJWT };