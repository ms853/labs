enum CurrencyType {
    GBP = "GBP"
}

enum TransactionType {
    DEPOSIT = "DEPOSIT",
    WITHDRAWAL = "WITHDRAWAL"
}

export interface Transaction {
    id: string;
    userId?: string;
    type: TransactionType;
    amount: number;
    currency: CurrencyType;
    reference?: string;
    createdTimestamp?: string;
}