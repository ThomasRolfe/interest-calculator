import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

interface StatProps {
    title: string;
    value: number;
    currency: "GBP" | "USD" | "EUR";
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export const StatCard = (props: StatProps) => {
    return (
        <div key={props.title} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-brand-orange">
                {props.title}
            </dt>
            <dd className="mt-1 flex justify-between items-baseline md:block xl:flex">
                <div className="flex items-baseline text-2xl font-semibold text-[#311847]">
                    {props.value > 100_000_000_000_000_000
                        ? "Too much!"
                        : Intl.NumberFormat("en-GB", {
                              style: "currency",
                              currency: props.currency,
                              notation: "compact",
                              maximumFractionDigits: 2,
                          }).format(props.value)}
                </div>
            </dd>
        </div>
    );
};
