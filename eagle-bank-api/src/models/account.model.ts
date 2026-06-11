
export enum AccountType {
    PERSONAL = "personal",
    BUSINESS = "business"
}

export enum CurrencyType {
    GBP = "GBP"
}

export enum SortCode {
    CODE_1 = "10-10-10",
    CODE_2 = "20-20-20",
    CODE_3 = "30-30-30",
    CODE_4 = "40-40-40",
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