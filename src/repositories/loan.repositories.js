import db from "../config/database.js"

db.run(`
    CREATE TABLE IF NOT EXISTS loans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        bookId INTEGER,
        dueDate DATE,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (bookId) REFERENCES books(id)
    )`);

function createLoanRepository(userId, bookId, dueDate) {
    return new Promise((resolve, reject) => {
        db.run(
            `
                INSERT INTO loans (userId, bookId, dueDate) VALUES (?, ?, ?)
            `, [userId, bookId, dueDate],
            function (error) {
                if (error) {
                    return reject(error);
                } else{
                    resolve({ id: this.lastID, userId, bookId})
                }
            }
        )
    })
}

function findAllLoansRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `
                SELECT * FROM loans;
            `, [],
            (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        )
    })
}

export default {
    createLoanRepository,
    findAllLoansRepository,
}