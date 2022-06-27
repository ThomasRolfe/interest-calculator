import { useState } from "react";
import interestCalculator from "../services/InterestCalculator";

const CalculatorForm = () => {
    const [initialAmount, setInitialAmount] = useState<number | string | null>(
        ""
    );
    const [currency, setCurrency] = useState<string>("GBP");
    const [topUpAmount, setTopUpAmount] = useState<number | string | null>("");
    const [topUpFrequency, setTopUpFrequency] = useState<string>("monthly");
    const [yearsSavedFor, setYearsSavedFor] = useState<number | string | null>(
        ""
    );
    const [compoundingFrequency, setCompoundingFrequency] =
        useState<string>("monthly");

    const [interestRates, setInterestRates] = useState([0]);

    const handleInterestRateChange = (index: number, newValue: number) => {
        setInterestRates(
            interestRates.map((rate, mapIndex) => {
                return mapIndex === index ? newValue : rate;
            })
        );
    };

    const handleAddInterestRate = () => {
        if (interestRates.length < 5) {
            setInterestRates([...interestRates, 0]);
        }
    };

    const handleDeleteInterestRate = (indexToDelete: number) => {
        setInterestRates(
            interestRates.filter((rate, index) => {
                return index !== indexToDelete;
            })
        );
    };

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault();

        const options = {
            method: "POST",
            body: JSON.stringify({
                initialAmount: initialAmount,
                currency,
                topUpAmount,
                topUpFrequency,
                yearsSavedFor,
                compoundingFrequency,
                interestRates,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch("/api/calculator-form", options);
        // let responseOk
        const result = await response.json();

        const calcData = interestCalculator(result);

        console.log(result);
        // send initial values to context store
        // send result to context store
    };

    return (
        <form
            action="/api/calculator-form"
            method="POST"
            className="max-w-lg mx-auto"
            onSubmit={handleSubmit}
        >
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-8">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="initial-amount"
                                className="block text-sm font-medium text-green-900"
                            >
                                Initial amount*
                            </label>
                            <input
                                type="number"
                                step="1"
                                required={true}
                                name="initial-amount"
                                id="initial-amount"
                                className="mt-1 focus:ring-neon-blue focus:border-neon-blue block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                value={initialAmount!}
                                onChange={(e) =>
                                    setInitialAmount(Number(e.target.value))
                                }
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="currency"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Currency
                            </label>
                            <select
                                id="currency"
                                name="currency"
                                autoComplete="currency"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-neon-blue focus:border-neon-blue sm:text-sm"
                                value={currency}
                                onChange={(e) => {
                                    setCurrency(e.target.value);
                                }}
                            >
                                <option value={`GBP`}>£ (GBP)</option>
                                <option value={`USD`}>$ (USD)</option>
                                <option value={`EUR`}>€ (EUR)</option>
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="top-up-amount"
                                className="block text-sm font-medium text-green-900"
                            >
                                Top-up amount
                            </label>
                            <input
                                type="number"
                                step="1"
                                min="0"
                                name="top-up-amount"
                                id="top-up-amount"
                                className="mt-1 focus:ring-neon-blue focus:border-neon-blue block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                value={topUpAmount!}
                                onChange={(e) => {
                                    setTopUpAmount(e.target.value);
                                }}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="top-up-frequency"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Top-up frequency
                            </label>
                            <select
                                id="top-up-frequency"
                                name="top-up-frequency"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-neon-blue focus:border-neon-blue sm:text-sm"
                                value={topUpFrequency}
                                onChange={(e) => {
                                    setTopUpFrequency(e.target.value);
                                }}
                            >
                                <option value="monthly">Monthly</option>
                                <option value="annually">Annually</option>
                            </select>
                        </div>

                        <div className="col-span-6">
                            <label
                                htmlFor="years-saved-for"
                                className="block text-sm font-medium text-green-900"
                            >
                                Years saved for*
                            </label>
                            <input
                                type="number"
                                step="1"
                                min="1"
                                max="100"
                                name="years-saved-for"
                                id="years-saved-for"
                                required={true}
                                value={yearsSavedFor!}
                                onChange={(e) => {
                                    setYearsSavedFor(Number(e.target.value));
                                }}
                                className="mt-1 focus:ring-neon-blue focus:border-neon-blue block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-6">
                            <label
                                htmlFor="compounding-frequency"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Compounding frequency (?)
                            </label>
                            <select
                                id="compounding-frequency"
                                name="compounding-frequency"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-neon-blue focus:border-neon-blue sm:text-sm"
                                value={compoundingFrequency}
                                onChange={(e) => {
                                    setCompoundingFrequency(e.target.value);
                                }}
                            >
                                <option value="monthly">Monthly</option>
                                <option value="annually">Annually</option>
                            </select>
                        </div>
                        <div className="col-span-6">
                            {interestRates.map((rate, index) => {
                                return (
                                    <>
                                        <label
                                            htmlFor={`interest-rate[${index}]`}
                                            className={`block text-sm font-medium text-green-900 ${
                                                index > 0 ? "hidden" : ""
                                            }`}
                                        >
                                            Interest rate*
                                        </label>
                                        <div className="flex" key={index}>
                                            <input
                                                type="number"
                                                step="0.01"
                                                min="0.01"
                                                max="100"
                                                name={`interest-rate[${index}]`}
                                                id={`interest-rate[${index}]`}
                                                required={true}
                                                value={rate}
                                                onChange={(e) => {
                                                    handleInterestRateChange(
                                                        index,
                                                        Number(e.target.value)
                                                    );
                                                }}
                                                placeholder="Rate as a percentage eg. 8"
                                                className="mt-1 focus:ring-neon-blue focus:border-neon-blue block grow shadow-sm sm:text-sm border border-gray-300 rounded-md"
                                            />
                                            {index === 0 ? (
                                                <div
                                                    onClick={
                                                        handleAddInterestRate
                                                    }
                                                    className="w-20 flex items-center align-middle"
                                                >
                                                    <button
                                                        type="button"
                                                        className="mx-auto"
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    onClick={(e) => {
                                                        handleDeleteInterestRate(
                                                            index
                                                        );
                                                    }}
                                                    className="w-20 flex items-center align-middle"
                                                >
                                                    <button
                                                        type="button"
                                                        className="mx-auto"
                                                    >
                                                        Del
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 text-center sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center w-full py-2 px-4 mb-4  shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-br from-[#ff9966] to-[#ff5e62] hover:from-[#f6793b] hover:to-[#e13e42] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-blue"
                    >
                        Calculate
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CalculatorForm;
