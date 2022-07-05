export enum Frequencies {
    Monthly = "monthly",
    Yearly = "yearly",
}

export enum Currencies {
    GBP = "GBP",
    USD = "USD",
    EUR = "EUR",
}

export interface CalculatorInputData {
    initialAmount: number;
    currency: Currencies;
    topUpAmount: number;
    topUpFrequency: Frequencies;
    yearsSavedFor: number;
    compoundingFrequency: Frequencies;
    interestRates: number[];
}

export interface CalculatorOutputData {
    summary: SummaryData[];
    tabularData: [];
    originalData: CalculatorInputData;
}

export interface SummaryData {
    interestRate: number;
    finalSum: number;
    directContributions: number;
    interestEarned: number;
    percentageIncrease: number;
}

export interface InterestRateLog {
    interestRate: number;
    directContributionTotal: number;
    runningTotal: number;
    annualLogs: AnnualLog[];
    currency: Currencies;
}

export interface AnnualLog {
    year: number;
    total: number;
    directContributions: number;
}

export interface InterestRateLogs extends Array<InterestRateLog> {}
