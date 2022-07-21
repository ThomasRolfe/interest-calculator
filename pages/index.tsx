import type { NextPage } from "next";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import CalculatorForm from "../components/calculatorForm";
import CalculatorResults from "../components/calculatorResults";
import { CalculatorResultsContextProvider } from "../context/CalculatorResultsContext";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <CalculatorResultsContextProvider>
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
                <div className="  lg:-mt-16">
                    <Container className="">
                        <div
                            className={`grid grid-cols-12 gap-8 min-h-[100vh]`}
                        >
                            <div className="col-span-12 lg:col-span-6 text-center lg:text-left self-center">
                                <h1 className="my-4 mb-12 text-4xl tracking-tight font-semibold font-sans text-slate-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-7xl">
                                    Calculate & compare{" "}
                                    <span className="underline decoration-brand-orange">
                                        compound interest
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    The interest calculator helps illustrate how
                                    much money will be made with the power of
                                    compound interest.
                                </p>
                                <p className="mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    {" "}
                                    Compare the differences over time with
                                    multiple interest rates at once.
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-6 lg:self-center">
                                <CalculatorForm />
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div>
                            <CalculatorResults />
                        </div>
                    </Container>
                    <section className="bg-white mt-12 py-12">
                        <Container className="px-4">
                            <div className="prose prose-xl mx-auto mt-6">
                                <h2 className="font-bold">
                                    How Compound Interest Works
                                </h2>
                                <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto ">
                                    Compound interest is the process of earning
                                    interest on an amount of money cumulatively
                                    over time. Interest is calculated as a
                                    percentage of the current amount including
                                    accumulated interest payments meaning that
                                    once you receive a payment of interest, you
                                    will earn more on the next interest payment.
                                </p>
                                <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto ">
                                    It is this compounding that Albert Einstein
                                    famously called &quot;the 8th wonder of the
                                    world&quot;. Once you can utilise it in your
                                    personal savings and make your money work
                                    for you, you will see why!
                                </p>
                                <h2 className="font-bold">
                                    How is compound interest calculated?
                                </h2>
                                <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto ">
                                    Compound interest can be calculated manually
                                    year by year or by using a formula. Visit
                                    the <Link href="/about">about page</Link> to
                                    see how the calculation is made or simply
                                    use the calculator above.
                                </p>
                                <h2 className="font-bold">
                                    Which compound interest rate is better?
                                </h2>
                                <p className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto ">
                                    You may find different interest rates quoted
                                    in different ways and with varying compound
                                    intervals. The main figure to look for is
                                    the APR (annual percentage rate) which shows
                                    the actual rate of interest paid over a
                                    period of 1 year. Using this as a benchmark
                                    to compare various rates will help simplify
                                    the comparison process and ensure you find
                                    the best rate for you.
                                </p>
                            </div>
                        </Container>
                    </section>
                </div>
            </Layout>
        </CalculatorResultsContextProvider>
    );
};

export default Home;
