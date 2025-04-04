import loanService from "../service/loan.service.js";

async function createLoanController(req, res) {
    const { bookId, dueDate } = req.body;
    const userId = req.userId;

    try {
        const createdLoan = await loanService.createLoanService(
            userId,
            bookId,
            dueDate
        );
        res.status(201).send(createdLoan);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function findAllLoansController(req, res) {
    try {
        const loans = await loanService.findAllLoansService();
        res.send(loans);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

export default {
    createLoanController,
    findAllLoansController,
}