import { useRef, useState } from "react";
import { useCalculatorResults } from "../context/CalculatorResultsContext";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const currencies = [
    {
        value: "GBP",
        symbol: "£",
        label: "£ GBP",
    },
    {
        value: "EUR",
        symbol: "€",
        label: "€ EUR",
    },
    {
        value: "USD",
        symbol: "$",
        label: "$ USD",
    },
];

const CalculatorForm = () => {
    const { setResults } = useCalculatorResults();
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
        useState<string>("yearly");

    const [interestRates, setInterestRates] = useState<(string | number)[]>([
        "",
    ]);
    const [ratesContainer] = useAutoAnimate<HTMLDivElement>();

    const handleInterestRateChange = (
        index: number,
        newValue: number | string
    ) => {
        setInterestRates(
            interestRates.map((rate, mapIndex) => {
                return mapIndex === index ? newValue : rate;
            })
        );
    };

    const handleAddInterestRate = () => {
        if (interestRates.length < 5) {
            setInterestRates([...interestRates, ""]);
        }
    };

    const handleDeleteInterestRate = (indexToDelete: number) => {
        setInterestRates(
            interestRates.filter((rate, index) => {
                return index !== indexToDelete;
            })
        );
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const options = {
            method: "POST",
            body: JSON.stringify({
                initialAmount,
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
        const result = await response.json();
        setResults(result);
    };

    return (
        <form
            action="/api/calculator-form"
            method="POST"
            className="max-w-lg mx-auto"
            onSubmit={handleSubmit}
        >
            <div className=" backdrop-blur-lg backdrop-brightness-100 shadow-xl shadow-cyan-800/20 bg-white md:bg-white/50 overflow-hidden sm:rounded-md font-sansalt">
                <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-8">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="initial-amount"
                                className="block text-sm font-medium text-slate-900"
                            >
                                Initial amount*
                            </label>
                            <div className="mt-1 flex">
                                <span className="inline-flex items-center px-3 rounded-tl-md rounded-bl-md border border-r-0 border-gray-200 bg-white text-gray-500 text-sm">
                                    {
                                        currencies.find((constcurrency) => {
                                            return (
                                                constcurrency.value === currency
                                            );
                                        })?.symbol
                                    }
                                </span>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0.01"
                                    max="100_000_000"
                                    required={true}
                                    name="initial-amount"
                                    id="initial-amount"
                                    className=" focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-50 block w-full sm:text-sm border border-gray-200 rounded-tr-md rounded-br-md"
                                    value={initialAmount!}
                                    onChange={(e) =>
                                        setInitialAmount(Number(e.target.value))
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="currency"
                                className="block text-sm font-medium text-slate-900"
                            >
                                Currency
                            </label>
                            <select
                                id="currency"
                                name="currency"
                                autoComplete="currency"
                                className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-50 sm:text-sm"
                                value={currency}
                                onChange={(e) => {
                                    setCurrency(e.target.value);
                                }}
                            >
                                {currencies.map((currency, index) => (
                                    <option key={index} value={currency.value}>
                                        {currency.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="top-up-amount"
                                className="block text-sm font-medium text-slate-900"
                            >
                                Top-up amount
                            </label>
                            <div className="mt-1 flex">
                                <span className="inline-flex items-center px-3 rounded-tl-md rounded-bl-md border border-r-0 border-gray-200 bg-white text-gray-500 text-sm">
                                    {
                                        currencies.find((constcurrency) => {
                                            return (
                                                constcurrency.value === currency
                                            );
                                        })?.symbol
                                    }
                                </span>
                                <input
                                    type="number"
                                    step="1"
                                    min="0"
                                    name="top-up-amount"
                                    id="top-up-amount"
                                    className=" focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-50 block w-full sm:text-sm border border-gray-200 rounded-tr-md rounded-br-md"
                                    value={topUpAmount!}
                                    onChange={(e) => {
                                        setTopUpAmount(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="top-up-frequency"
                                className="block text-sm font-medium text-slate-900"
                            >
                                Top-up frequency
                            </label>
                            <select
                                id="top-up-frequency"
                                name="top-up-frequency"
                                className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-50 sm:text-sm"
                                value={topUpFrequency}
                                onChange={(e) => {
                                    setTopUpFrequency(e.target.value);
                                }}
                            >
                                <option key={1} value="monthly">
                                    Monthly
                                </option>
                                <option key={2} value="yearly">
                                    Yearly
                                </option>
                            </select>
                        </div>

                        <div className="col-span-6">
                            <label
                                htmlFor="years-saved-for"
                                className="block text-sm font-medium text-slate-900"
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
                                className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-50 block w-full  sm:text-sm border border-gray-200 rounded-md"
                            />
                        </div>

                        <div className="col-span-6">
                            <label
                                htmlFor="compounding-frequency"
                                className="block text-sm font-medium text-slate-900"
                            >
                                Compounding frequency
                            </label>
                            <select
                                id="compounding-frequency"
                                name="compounding-frequency"
                                className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-50 sm:text-sm"
                                value={compoundingFrequency}
                                onChange={(e) => {
                                    setCompoundingFrequency(e.target.value);
                                }}
                            >
                                <option key={1} value="yearly">
                                    Yearly
                                </option>
                                <option key={2} value="monthly">
                                    Monthly
                                </option>
                            </select>
                        </div>
                        <div className="col-span-6" ref={ratesContainer}>
                            {interestRates.map((rate, index) => {
                                return (
                                    <>
                                        <label
                                            htmlFor={`interest-rate[${index}]`}
                                            className={`block text-sm font-medium text-slate-900 ${
                                                index > 0 ? "hidden" : ""
                                            }`}
                                        >
                                            Interest rate (%)*
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
                                                className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-50 block grow sm:text-sm border border-gray-200 rounded-md"
                                            />
                                            {/* Make individual components with show/hide logic */}
                                            {index === 0 ? (
                                                <div
                                                    onClick={
                                                        handleAddInterestRate
                                                    }
                                                    className="w-12 flex items-center align-middle"
                                                >
                                                    <button
                                                        type="button"
                                                        className="ml-auto"
                                                        title="Add interest rate"
                                                    >
                                                        <PlusCircleIcon
                                                            className="h-5 w-5 text-cyan-500"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    onClick={(e) => {
                                                        handleDeleteInterestRate(
                                                            index
                                                        );
                                                    }}
                                                    className="w-12 flex items-center align-middle"
                                                >
                                                    <button
                                                        type="button"
                                                        className="ml-auto focus:ring-cyan-500 focus:border-cyan-500 focus:bg-slate-50"
                                                        title="Remove interest rate"
                                                    >
                                                        <MinusCircleIcon
                                                            className="h-5 w-5 text-red-600 focus:ring-cyan-500 focus:border-cyan-500"
                                                            aria-hidden="true"
                                                        />
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
                <div className="px-4 py-3 text-center sm:px-6 backdrop-blur-lg backdrop-brightness-100 shadow-md shadow-slate-400/50 bg-white/50 ">
                    <button
                        type="submit"
                        className="inline-flex justify-center w-full py-2 px-4 mb-4  shadow-sm text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-sky-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                        Calculate
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CalculatorForm;
