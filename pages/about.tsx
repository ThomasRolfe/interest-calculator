import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card";
import Container from "../components/container";
import Layout from "../components/layout";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Interest Calculator - See how much you can make with
                    compound interest
                </title>
                <meta
                    name="description"
                    content="Compound Interest Calculator illustrates how much money can be made with the power of compound interest. Try out different deposits, top ups and interest rates and Interest Calculator will do the rest."
                />
            </Head>
            <Layout>
                <Container className="text-lg mx-auto">
                    <div className="px-4">
                        <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            About
                        </h1>
                        <p className="mt-6 prose prose-indigo prose-xl text-gray-800 mx-auto ">
                            The interest calculator is a tool to help illustrate
                            the financial gains that can be made just with the
                            power of compound interest and regular saving. Often
                            times it can be confusing to understand the
                            astronomical rates of interest that can be paid on
                            loans and mortgages if left unpaid.
                        </p>
                        <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                            {" "}
                            The amount of money that can be earned in a savings
                            account or ISA with a good interest rate can also be
                            underestimated with the impact of small interest
                            rate increases causing a big difference in earnings.
                        </p>
                        <div className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                            <h2>How it works</h2>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                The interest calculator requires a minimum of 3
                                figures to generate a set of results from:
                            </p>
                            <ul>
                                <li>An initial deposit</li>
                                <li>Number of years saved for</li>
                                <li>Gross interest rate</li>
                            </ul>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                The initial deposit is taken as the first
                                contribution to, for example, a savings account.
                                If the interest is compounded once per year,
                                interest is evaluated on the current total at
                                the end of the year and before any yearly top
                                ups.
                            </p>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                If interest is compounded monthly, 1/12th of the
                                interest rate is compounded every month, also
                                before any monthly top ups. This may not be
                                indicative of the exact top-up/compounding setup
                                that a real savings account/investment may have
                                so please seek advice from the institution
                                providing the interest rate.
                            </p>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                If a second interest rate is provided, the
                                results will allow you to compare the different
                                yields between the two rates.
                            </p>

                            <h2>What is AER?</h2>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                The acronym AER stands for Annual Effective
                                Rate. APY (Annual Percentage Yield) is often
                                used in the United States to describe the same
                                process. This is used to show the equivalent
                                yearly interest rate which can be used to
                                compare between rates that compound at different
                                intervals.
                            </p>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                When calculating interest on a yearly basis, the
                                formula is as follows:
                            </p>
                            <div className="bg-blue-50 border-2 border-blue-400 p-4 rounded-md text-center">
                                <strong>n x (1 + i)</strong>
                            </div>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                Where "n" can be considered the amount in
                                savings to be compounded and "i" is the gross
                                interest rate as a decimal. For instance with a
                                deposit of £100 saved at 5% interest, we get{" "}
                                <strong>100 x 1.05 = £105</strong>.
                            </p>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                Things change when the interest is compounded
                                more frequently than once a year as the amount
                                in savings is marginally higher each time the
                                compound happens. Take for instance an interest
                                rate of 5% which is evaluated on a monthly
                                basis, the formula for each compound event is:
                            </p>
                            <div className="bg-blue-50 border-2 border-blue-400 p-4 rounded-md text-center">
                                <strong>n x (1 + i/f)</strong>
                            </div>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                Where "n" is the amount in savings, "i" is the
                                gross interest rate and "f" is the frequency of
                                compounds per year, with monthly being a
                                frequency of 12 per year. The savings are now
                                multiplied by 1.004167... 12 times which
                                evaluates as follows (figures rounded):
                            </p>
                            <div className="col-sm-12 col-lg-4 offset-lg-4">
                                <ul className="list-none font-semibold">
                                    <li className="text-center">100</li>
                                    <li className="text-center">100.42</li>
                                    <li className="text-center">100.84</li>
                                    <li className="text-center">101.26</li>
                                    <li className="text-center">101.68</li>
                                    <li className="text-center">102.10</li>
                                    <li className="text-center">102.53</li>
                                    <li className="text-center">102.95</li>
                                    <li className="text-center">103.38</li>
                                    <li className="text-center">103.81</li>
                                    <li className="text-center">104.25</li>
                                    <li className="text-center">104.68</li>
                                    <li className="text-center">105.12</li>
                                </ul>
                            </div>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                You can see that at the end of the 12th month,
                                we end up with £0.12 more just by increasing the
                                compounding frequency.
                            </p>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                This leads us to have an AER which is the annual
                                rate that this works out to and is calculated as
                                follows:
                            </p>
                            <div className="bg-blue-50 border-2 border-blue-400 p-4 rounded-md text-center">
                                <strong>
                                    AER = (1 + i / f)<sup>f</sup> -1
                                </strong>
                            </div>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                With "i" being the gross interest rate as a
                                decimal (0.05) and "f" being the frequency of
                                compounds in a year (12).
                            </p>
                            <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                This evaluates to 5.116% AER even though the
                                gross interest rate was 5%. .
                            </p>

                            <h3 className="card-title heading-font">
                                Disclaimer
                            </h3>
                            <p className="my-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
                                The results of the interest calculator are
                                designed only for illustration purposes and does
                                not constitute professional financial advice nor
                                does it promise that the results are accurate
                                for the purpose of basing financial decisions
                                from.
                            </p>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default About;
