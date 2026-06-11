import { Transaction } from "../models/transaction.model";

export class TransactionRepository {
    private transactionStore: Transaction[] = [];  
    
    createTransaction(newTransaction: Transaction): Transaction {
        this.transactionStore.push(newTransaction);
        return newTransaction;
    }

    fetchTransactionById(transactionId: string): Transaction | undefined {
        return this.transactionStore.find(transaction => transaction.id === transactionId);
    }

    listTransactionsByUserId(userId: string): Transaction[] {
        return this.transactionStore.filter(transaction => transaction.userId === userId);
    }

    updateTransaction(transactionId: string, updatedFields: Partial<Omit<Transaction, "id">>): Transaction | undefined {
        const transactionIndex = this.transactionStore.findIndex(transaction => transaction.id === transactionId);
        if (transactionIndex === -1) {
            return undefined;
        }
        const existingTransaction = this.transactionStore[transactionIndex];
        const updatedTransaction: Transaction = { ...existingTransaction, ...updatedFields } as Transaction;
        this.transactionStore[transactionIndex] = updatedTransaction;
        return updatedTransaction;
    }

    deleteTransaction(transactionId: string): boolean {
        const transactionIndex = this.transactionStore.findIndex(transaction => transaction.id === transactionId);
        if (transactionIndex === -1) {
            return false;
        }
        this.transactionStore.splice(transactionIndex, 1);
        return true;
    }
}