
enum AccountType {
    PERSONAL = "personal",
    BUSINESS = "business"
}

enum CurrencyType {
    GBP = "GBP"
}

enum SortCode {
    "10-10-10" = "10-10-10"
}

export interface Account {
    userId?: string;
    accountNumber: string;
    name: string;
    accountType: AccountType;
    currency: CurrencyType;
    sortCode: SortCode;
    balance: number;
    createdTimestamp?: string;
    updatedTimestamp?: string;
}