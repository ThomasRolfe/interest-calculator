interface calculatorInputData {
    initialAmount: number;
    currency: string;
    topUpAmount: number;
    topUpFrequency: string;
    yearsSavedFor: number;
    compoundingFrequency: string;
    interestRates: number[];
}

interface calculatorOutputData {
    summary: string[];
    pieData: string[];
    graphData: string[];
    tabularData: string[];
}

const interestCalculator = (
    inputData: calculatorInputData
): calculatorOutputData => {
    return {
        summary: [""],
        pieData: [""],
        graphData: [""],
        tabularData: [""],
    };
};

export default interestCalculator;
