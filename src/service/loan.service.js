import loanRepositories from "../repositories/loan.repositories.js";

async function createLoanService(userId, bookId, dueDate) {
    const createLoan = await loanRepositories.createLoanRepository(
        userId,
        bookId,
        dueDate
    );
    if (!createLoan) throw new Error("Error creating loan");
    return createLoan;
}

async function findAllLoansService() {
    const loans = await loanRepositories.findAllLoansRepository();
    return loans;
}

export default {
    createLoanService,
    findAllLoansService,
}