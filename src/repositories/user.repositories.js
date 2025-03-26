import db from '../config/database.js'

db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEX NOT NULL,
            avatar TEXT
        )
    `)

function createUserRepository(newUser) {
    return new Promise((resolve, reject) => {
        const { username, email, password, avatar } = newUser
        db.run(
            `
                INSERT INTO users (username, email, password, avatar)
                VALUES (?, ?, ?, ?)
            `,
            [username, email, password, avatar], 
            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({id: this.lastID, ...newUser})
                }
            }
        );
    });
}

function getUserByEmailRepository(email) {
    return new Promise((resolve, reject) => {
        db.get(
            `
                SELECT id, username, email, avatar 
                FROM users 
                WHERE email = ?
            `,
            [email],
            (err, row) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(row)
                }
            }
        );
    });
}

export default {
    createUserRepository,
    getUserByEmailRepository
}