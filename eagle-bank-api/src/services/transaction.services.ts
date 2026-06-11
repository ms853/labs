import { TransactionRepository } from '../repositories/transaction.repository';

export class TransactionService {
    private transactionRepository: TransactionRepository;

    constructor() {
        this.transactionRepository = new TransactionRepository();
    }
}