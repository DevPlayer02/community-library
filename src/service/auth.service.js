import jwt from 'jsonwebtoken';
import "dotenv/config";

function generateJWT(id) {
    return jwt.sign({ id }, process.env.SECRET_JWT, { expiresIn: 86400 })
}

export { generateJWT };