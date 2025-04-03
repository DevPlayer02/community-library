import { userIdSchema } from "../schema/user.schema.js";
import { bookIdSchema } from "../schema/book.schema.js";

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (e) {
        res.status(400).json({ error : e.errors });
    }
};

const validateUserId = (req, res, next) => {
    try {
        const userId = +req.params.id;
        userIdSchema.parse({ userId: userId });
        next();
    } catch (e) {
        res.status(400).json({ error : e.errors });
    }
};

const validateBookId = (req, res, next) => {
    try {
        bookIdSchema.parse({ bookId: +req.params.id });
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

export { validate, validateUserId, validateBookId };