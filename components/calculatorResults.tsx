import Card from "./card";
import { Fragment, useEffect, useState } from "react";

import { useCalculatorResults } from "../context/CalculatorResultsContext";
import { Tab } from "@headlessui/react";
import { SummaryPanel } from "./SummaryPanel";
import dynamic from "next/dynamic";
import ResultsTable from "./resultsTable";

const PieChart = dynamic(() => import("./amCharts/PieChart"), { ssr: false });
const LineChart = dynamic(() => import("./amCharts/LineChart"), { ssr: false });

const CalculatorResults = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { results } = useCalculatorResults();

    useEffect(() => {
        setSelectedIndex(0);
    }, [results]);

    if (!results) {
        return <></>;
    }

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(" ");
    }

    // TODO: if a tabbed item is selected and then gets deleted from calc, the tabs go blank. Need to reset the selected value

    return (
        <div className="grid grid-cols-12 gap-8 mt-12 md:mt-0">
            <Card className="col-span-12 xl:col-span-6 sm:rounded-md ">
                <Tab.Group
                    selectedIndex={selectedIndex}
                    onChange={setSelectedIndex}
                >
                    <Tab.List className="flex border-b border-gray-200">
                        {results.summary.map((interestRateSummary, index) => {
                            return (
                                <Tab as={Fragment} key={index}>
                                    {({ selected }) => (
                                        <button
                                            className={classNames(
                                                selected
                                                    ? "border-[#06b6d4] text-gray-800"
                                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                                                "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm",

                                                "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center focus:z-10"
                                            )}
                                            aria-current={
                                                selected ? "page" : undefined
                                            }
                                            key={index}
                                        >
                                            {interestRateSummary.interestRate}%
                                        </button>
                                    )}
                                </Tab>
                            );
                        })}
                    </Tab.List>
                    <Tab.Panels>
                        {results.summary.map((interestRateSummary, index) => {
                            return (
                                <Tab.Panel key={index}>
                                    <SummaryPanel {...interestRateSummary} />
                                    <div className="p-8">
                                        <PieChart
                                            dataSeries={[
                                                {
                                                    name: "Contributions",
                                                    value: interestRateSummary.directContributions,
                                                },
                                                {
                                                    name: "Interest",
                                                    value: interestRateSummary.interestEarned,
                                                },
                                            ]}
                                        />
                                    </div>
                                </Tab.Panel>
                            );
                        })}
                    </Tab.Panels>
                </Tab.Group>
            </Card>
            <Card className="col-span-12 xl:col-span-6 sm:rounded-md ">
                <div className="p-3 sm:p-5 h-[500px] min-h-full">
                    <LineChart
                        seriesList={results.originalData.interestRates}
                        seriesValues={results.tabularData}
                        currency={results.originalData.currency}
                    />
                </div>
            </Card>
            <Card className="col-span-12 lg:col-span-12 sm:rounded-md ">
                <ResultsTable results={results} />
            </Card>
        </div>
    );
};

export default CalculatorResults;
