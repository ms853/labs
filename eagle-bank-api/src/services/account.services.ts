import { AccountRepository } from "../repositories/account.repository";
import { Account } from "../models/account.model";
import { CreateAccountRequest, BadRequestCreateAccountResponse, FetchAccountByAccountNumberResponse, FetchAccountByAccountNumberBadRequestResponse } from "../api-types/accounts";
import { BadRequestError, NotFoundError } from "../errors/user.error";

export class AccountService {
    private accountRepository: AccountRepository;

    constructor() {
        this.accountRepository = new AccountRepository();
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

    async listAccountsForUser(currentUserId: string): Promise<Account[]> {
        if (!currentUserId) {
            throw new BadRequestError("User ID is required to list accounts");
        }
        return this.accountRepository.listAccountsByUserId(currentUserId);
    }
    
    async fetchAccountByAccountNumber(accountNumber: string, currentUserId: string): Promise<FetchAccountByAccountNumberResponse  | undefined> {
        const account = this.accountRepository.fetchBankAccountByAccountNumber(accountNumber);
        if (!account) {
            throw new NotFoundError(`Account with number ${accountNumber} not found`);
        }
        if (account.userId !== currentUserId) {
            throw new BadRequestError("Account does not belong to the specified user");
        }
        return account as FetchAccountByAccountNumberResponse;
    }   

}