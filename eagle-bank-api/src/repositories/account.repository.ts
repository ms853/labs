import { Account, CurrencyType, SortCode } from "../models/account.model";
import { BadRequestCreateAccountResponse, CreateAccountRequest} from "../api-types/accounts";

export class AccountRepository {
    private accountStore: Account[] = [];  
    
    createAccount(newAccount: CreateAccountRequest): Account {
       
        const account: Account = {
            ...newAccount,
            accountNumber: `acc-${this.accountStore.length + 1}`,
            balance: 0.00,
            currency: CurrencyType.GBP,
            sortCode: SortCode.CODE_1,
            accountType: newAccount.accountType as Account["accountType"],
            createdTimestamp: new Date().toISOString(),
            updatedTimestamp: new Date().toISOString()
        };
        this.accountStore.push(account);
        return account;
    }

    fetchBankAccountByAccountNumber(accountNumber: string): Account | undefined {
        return this.accountStore.find(account => account.accountNumber === accountNumber);
    }  

    listAccountsByUserId(currentUserId: string): Account[] {
        if (!currentUserId) {
            return [];
        }
        return this.accountStore;
    }

    updateAccount(accountNumber: string, updatedFields: Partial<Omit<Account, "accountNumber">>): Account | undefined {
        const accountIndex = this.accountStore.findIndex(account => account.accountNumber === accountNumber); 
        if (accountIndex === -1) {
            return undefined;
        }
        const existingAccount = this.accountStore[accountIndex];
        const updatedAccount: Account = { ...existingAccount, ...updatedFields } as Account;
        this.accountStore[accountIndex] = updatedAccount;
        return updatedAccount;
    }

    deleteAccount(accountNumber: string): boolean {
        const accountIndex = this.accountStore.findIndex(account => account.accountNumber === accountNumber);
        if (accountIndex === -1) {
            return false;
        }
        this.accountStore.splice(accountIndex, 1);
        return true;
    }           

}