import type { NextPage } from "next";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import CalculatorForm from "../components/calculatorForm";
import CalculatorResults from "../components/calculatorResults";
import Card from "../components/card";

const Home: NextPage = () => {
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
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Layout>
                <div className="">
                    <Container className="">
                        <div
                            className={`grid grid-cols-12 gap-8 min-h-[100vh]`}
                        >
                            <div className="col-span-12 lg:col-span-6 text-center lg:text-left self-center">
                                <h1 className="my-4 mb-12 text-4xl tracking-tight font-bold font-sans text-slate-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-7xl">
                                    Calculate compound interest for{" "}
                                    <span className="text-neon-blue">
                                        free!
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
                        <CalculatorResults />
                    </Container>
                    <section className="bg-gray-100 my-6 py-12">
                        <Container className="px-4">
                            <div className="">
                                <h3 className="font-bold text-xl mb-4">
                                    How Compound Interest Works
                                </h3>
                                <p className="mb-4">
                                    Compound interest is the process of earning
                                    interest on an amount of money cumulatively
                                    over time. Interest is calculated as a
                                    percentage of the current amount including
                                    accumulated interest payments meaning that
                                    once you receive a payment of interest, you
                                    will earn more on the next interest payment.
                                </p>
                                <p className="mb-4">
                                    It is this compounding that Albert Einstein
                                    famously called &quot;the 8th wonder of the
                                    world&quot;. Once you can utilise it in your
                                    personal savings and make your money work
                                    for you, you will see why!
                                </p>
                                <h3 className="font-bold text-xl mb-4">
                                    How is compound interest calculated?
                                </h3>
                                <p className="mb-4">
                                    Compound interest can be calculated manually
                                    year by year or by using a formula. Visit
                                    the about page to see how the calculation is
                                    made or simply use the calculator above.
                                </p>
                                <h3 className="font-bold text-xl mb-4">
                                    Which compound interest rate is better?
                                </h3>
                                <p className="mb-4">
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

                    <Container>
                        <Card>google ad</Card>
                    </Container>
                </div>
            </Layout>
        </>
    );
};

export default Home;
