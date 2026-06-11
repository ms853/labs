import { Account } from "../models/account.model";

export class AccountRepository {
    private accountStore: Account[] = [];  
    
    createAccount(newAccount: Account): Account {
        this.accountStore.push(newAccount);
        return newAccount;
    }

    fetchBankAccountByAccountNumber(accountNumber: string): Account | undefined {
        return this.accountStore.find(account => account.accountNumber === accountNumber);
    }  

    listAccountsByUserId(userId: string): Account[] {
        return this.accountStore.filter(account => account.userId === userId);
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