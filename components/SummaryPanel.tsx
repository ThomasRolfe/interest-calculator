import { StatCard } from "./StatCard";

export const SummaryPanel = (props: any) => {
    const finalSum = {
        title: "Final Sum",
        value: props.finalSum,
        currency: props.currency,
    } as const;

    const interestEarned = {
        title: "Interest",
        value: props.interestEarned,
        currency: props.currency,
    } as const;

    const directContributions = {
        title: "Contributions",
        value: props.directContributions,
        currency: props.currency,
    } as const;

    return (
        <div>
            <dl className="grid grid-cols-1  overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                <StatCard {...finalSum} />
                <StatCard {...interestEarned} />
                <StatCard {...directContributions} />
            </dl>
        </div>
    );
};
