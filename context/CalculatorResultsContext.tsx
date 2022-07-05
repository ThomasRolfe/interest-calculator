import React, { createContext, Dispatch, useContext, useState } from "react";
import { CalculatorOutputData } from "../types/types";

type ResultsContextType =
    | {
          results: CalculatorOutputData | undefined;
          setResults: Dispatch<undefined>;
      }
    | undefined;

const CalculatorResultsContext = createContext<ResultsContextType>(undefined);

export const CalculatorResultsContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [results, setResults] = useState(undefined);
    const value = { results, setResults };
    return (
        <CalculatorResultsContext.Provider value={value}>
            {children}
        </CalculatorResultsContext.Provider>
    );
};

export const useCalculatorResults = () => {
    const context = useContext(CalculatorResultsContext);
    if (context === undefined) {
        throw new Error(
            "useCalculatorResults must be used within a CalculatorResultsContextProvider"
        );
    }
    return context;
};
