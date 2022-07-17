import usePaginateArray from "../hooks/usePaginateArray";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useEffect } from "react";

const ResultsTable = ({ results }) => {
    const {
        setTargetPage,
        setNextPage,
        setPrevPage,
        paginatedArray,
        currentPage,
        totalPages,
        pageArray,
        currentRange,
    } = usePaginateArray(results.tabularData, 15);

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <>
            <table className="min-w-full divide-y divide-gray-300 font-sansalt">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-brand-purple sm:pl-6"
                        >
                            Year
                        </th>
                        {results.originalData.interestRates.map(
                            (interestRate, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-brand-purple"
                                >
                                    {interestRate}%
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {paginatedArray.map((tableRow) => (
                        <tr key={tableRow.year} className="hover:bg-slate-200">
                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-brand-purple font-bold sm:pl-6">
                                {tableRow.year}
                            </td>
                            {results.originalData.interestRates.map(
                                (interestRate, index) => (
                                    <td
                                        key={index}
                                        className="whitespace-nowrap px-2 py-2 text-sm text-brand-purple"
                                        title={Intl.NumberFormat("en-GB", {
                                            style: "currency",
                                            currency:
                                                results.originalData.currency,
                                            notation: "standard",
                                            maximumFractionDigits: 2,
                                        }).format(
                                            tableRow[`${interestRate}_percent`]
                                        )}
                                    >
                                        {Intl.NumberFormat("en-GB", {
                                            style: "currency",
                                            currency:
                                                results.originalData.currency,
                                            notation: "compact",
                                            maximumFractionDigits: 2,
                                        }).format(
                                            tableRow[`${interestRate}_percent`]
                                        )}
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 font-sansalt">
                <div className="flex-1 flex justify-between sm:hidden">
                    <button
                        onClick={setPrevPage}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={setNextPage}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
                    <div>
                        <nav
                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px "
                            aria-label="Pagination"
                        >
                            <button
                                onClick={setPrevPage}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                            {pageArray.map((pageNumber, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setTargetPage(pageNumber);
                                    }}
                                    aria-current="page"
                                    className={classNames(
                                        pageNumber === currentPage
                                            ? "z-10 bg-indigo-50 border-brand-purple text-brand-purple"
                                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50",
                                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    )}
                                >
                                    {pageNumber}
                                </button>
                            ))}

                            <button
                                onClick={setNextPage}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResultsTable;
