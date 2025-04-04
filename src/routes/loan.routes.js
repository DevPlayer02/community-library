import { Router } from 'express';
import loanController from '../controller/loan.controllers.js';
import { validate } from '../middlewares/validation.middlewares.js';
import { loanSchema } from '../schema/loan.schema.js';

const router = Router();

router.post(
    "/loans",
    validate(loanSchema),
    loanController.createLoanController
)
router.get(
    "/loans",
    loanController.findAllLoansController
)


export default router;