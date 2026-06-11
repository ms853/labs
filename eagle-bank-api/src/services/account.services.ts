import { AccountRepository } from "../repositories/account.repository";
import { Account } from "../models/account.model";
import { TransactionRepository } from "../repositories/transaction.repository";
import { CreateAccountRequest, BadRequestCreateAccountResponse } from "../api-types/accounts";

export class AccountService {
    private accountRepository: AccountRepository;
    private transactionRepository: TransactionRepository;

    constructor() {
        this.accountRepository = new AccountRepository();
        this.transactionRepository = new TransactionRepository();
    }

    async createAccount(newAccount: CreateAccountRequest): Promise<Account | BadRequestCreateAccountResponse> {
       if (!newAccount.name || !newAccount.accountType) {
                return { 
                    status: 400,
                    message: "Invalid account details supplied",
                    details: [
                        { field: "name", message: "Name is required", type: "string" }, 
                        { field: "accountType", message: "Account type is required", type: "string" }
                    ]
                } as BadRequestCreateAccountResponse;
        
            }
             
        return this.accountRepository.createAccount(newAccount);
    }
    
    async fetchAccountByAccountNumber(accountNumber: string): Promise<Account | undefined> {
        
        return this.accountRepository.fetchBankAccountByAccountNumber(accountNumber);
    }   

}