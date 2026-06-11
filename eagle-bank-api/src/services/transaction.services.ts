import { TransactionRepository } from '../repositories/transaction.repository';
import { AccountRepository } from '../repositories/account.repository';
import { Transaction } from '../models/transaction.model';
import { CreateTransactionRequest, BadRequestCreateTransactionResponse, CreatedTransactionResponse } from '../api-types/transactions';
import { Account } from '../models/account.model';

export class TransactionService {
    private transactionRepository: TransactionRepository;
    private accountRepository: AccountRepository;

    constructor() {
        this.transactionRepository = new TransactionRepository();
        this.accountRepository = new AccountRepository();
    }

    private async deposit(
        account: Account,
        request: CreateTransactionRequest
    ) {
    account.balance += request.amount;

    await this.accountRepository.update(account);

    // For future enchancement - this will be DB transaction, alongside the update account functions.
    const transaction =
        this.transactionRepository.createTransaction({
            id: account.accountNumber,
            amount: request.amount,
            currency: request.currency as Account["currency"],
            type: "deposit",
            reference: request.reference,
            createdTimestamp: new Date().toISOString(),
        });

    return transaction as CreatedTransactionResponse;
    }

    private async withdrawal(
        account: Account,
        request: CreateTransactionRequest
    ) {
    account.balance -= request.amount;

    // For future enchancement - this will be DB transaction, alongside the update account functions.
    const transaction =
        this.transactionRepository.createTransaction({
            id: account.accountNumber,
            amount: request.amount,
            currency: request.currency as Account["currency"],
            type: "withdrawal",
            reference: request.reference,
            createdTimestamp: new Date().toISOString(),
        });

    return transaction as CreatedTransactionResponse;
    }

    async createTransaction(currentUserId: string, accountId: string, transactionRequest: CreateTransactionRequest): Promise<CreatedTransactionResponse | BadRequestCreateTransactionResponse> {
        const account = this.accountRepository.fetchBankAccountByAccountNumber(accountId);
        if (!account) {
            throw new Error(`Account with number ${accountId} not found`);
        }

        if (account.userId !== currentUserId) {
            throw new Error(`User ${currentUserId} does not have permission to create transactions for account ${accountId}`);
        }

        if (transactionRequest.type === 'withdrawal' && account.balance < transactionRequest.amount) {
            throw new Error(`Insufficient funds in account ${accountId}`);
        }

        if (transactionRequest.type === 'withdrawal') {
            //account.balance -= transactionRequest.amount;
            return this.withdrawal(account, transactionRequest);
        }

        if (transactionRequest.type === 'deposit') {
            return this.deposit(account, transactionRequest);
        }

        return this.transactionRepository.createTransaction(accountId, transactionRequest.amount, transactionRequest.type);
    }
    
}