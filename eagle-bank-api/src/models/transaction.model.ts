enum CurrencyType {
    GBP = "GBP"
}

export interface Transaction {
    id: string;
    userId?: string;
    type: "withdrawal" | "deposit";
    amount: number;
    currency: CurrencyType;
    reference?: string;
    createdTimestamp?: string;
}