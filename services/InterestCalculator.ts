import {
    AnnualLog,
    CalculatorInputData,
    CalculatorOutputData,
    Currencies,
    Frequencies,
    InterestRateLog,
    InterestRateLogs,
    SummaryData,
} from "../types/types";

const interestCalculator = (
    inputData: CalculatorInputData
): CalculatorOutputData => {
    const interestRateLogs = calculateInterestValues(inputData);

    return {
        summary: calculateSummary(interestRateLogs),
        tabularData: getTableData(interestRateLogs),
        interestRateLogs: interestRateLogs,
        originalData: inputData,
    };
};

const calculateSummary = (
    interestRateLogs: InterestRateLogs
): SummaryData[] => {
    return interestRateLogs.map((interestRateLog, index) => {
        return {
            interestRate: interestRateLog.interestRate,
            finalSum: interestRateLog.runningTotal,
            directContributions: interestRateLog.directContributionTotal,
            interestEarned:
                interestRateLog.runningTotal -
                interestRateLog.directContributionTotal,
            percentageIncrease:
                (interestRateLog.runningTotal -
                    interestRateLog.directContributionTotal) /
                interestRateLog.directContributionTotal,
            currency: interestRateLog.currency,
        };
    });
};

// TODO: simplify this
const getTableData = (interestRateLogs: InterestRateLogs): {}[] => {
    let data = {};

    interestRateLogs.forEach((interestRateLog: InterestRateLog) => {
        interestRateLog.annualLogs.forEach((annualLog: AnnualLog) => {
            if (!data.hasOwnProperty(String(annualLog.year))) {
                data[String(annualLog.year)] = {
                    year: String(annualLog.year),
                };
            }

            data[String(annualLog.year)][
                `${interestRateLog.interestRate}_percent`
            ] = annualLog.total;
        });
    });

    let dataArray = Object.keys(data).map((dataKey) => {
        return data[dataKey];
    });

    return dataArray;
};

const addTopUpContribution = (
    interestRateLogs: InterestRateLogs,
    topUpAmount: number,
    frequency: Frequencies,
    isFullYear: boolean
): void => {
    if (!eventFrequencyRequired(isFullYear, frequency)) {
        return;
    }
    interestRateLogs.forEach(function (interestRateLog: InterestRateLog) {
        interestRateLog.directContributionTotal += Number(topUpAmount);
        interestRateLog.runningTotal += Number(topUpAmount);
    });
};

const addCompoundingInterest = (
    interestRateLogs: InterestRateLogs,
    frequency: Frequencies,
    isFullYear: boolean
): void => {
    if (!eventFrequencyRequired(isFullYear, frequency)) {
        return;
    }

    interestRateLogs.forEach(function (interestRateLog: InterestRateLog) {
        if (frequency === Frequencies.Monthly) {
            interestRateLog.runningTotal =
                interestRateLog.runningTotal *
                (1 + interestRateLog.interestRate / 12 / 100);
        } else {
            interestRateLog.runningTotal =
                interestRateLog.runningTotal *
                (1 + interestRateLog.interestRate / 100);
        }
    });
};

const eventFrequencyRequired = (
    isFullYear: boolean,
    frequency: Frequencies
): boolean => {
    if (frequency === Frequencies.Monthly) {
        return true;
    }

    if (isFullYear && frequency === Frequencies.Yearly) {
        return true;
    }

    return false;
};

const writeLogs = (interestRateLogs: InterestRateLogs, year: number): void => {
    interestRateLogs.forEach((interestRateLog): void => {
        interestRateLog.annualLogs.push({
            year: year,
            total: interestRateLog.runningTotal,
            directContributions: interestRateLog.directContributionTotal,
        });
    });
};

const generateInterestRateLogs = (
    rates: number[],
    initialAmount: number,
    currency: Currencies
): InterestRateLogs => {
    return rates.map(function (rate) {
        return {
            interestRate: rate,
            directContributionTotal: initialAmount,
            runningTotal: initialAmount,
            currency: currency,
            annualLogs: [],
        };
    });
};

const calculateInterestValues = (
    inputData: CalculatorInputData
): InterestRateLogs => {
    let interestRateLogs: InterestRateLogs = generateInterestRateLogs(
        inputData.interestRates,
        inputData.initialAmount,
        inputData.currency
    );

    writeLogs(interestRateLogs, 0);

    for (let months = 1; months <= inputData.yearsSavedFor * 12; months++) {
        let year = Math.floor(months / 12);
        let isFullYear = months % 12 === 0;

        addTopUpContribution(
            interestRateLogs,
            inputData.topUpAmount,
            inputData.topUpFrequency,
            isFullYear
        );

        addCompoundingInterest(
            interestRateLogs,
            inputData.compoundingFrequency,
            isFullYear
        );

        if (isFullYear) {
            writeLogs(interestRateLogs, year);
        }
    }

    return interestRateLogs;
};

export default interestCalculator;
