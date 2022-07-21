import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = (props: any) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>
                Interest Calculator - See how much you can make with compound
                interest
            </title>
            <meta
                name="title"
                content="Interest Calculator - See how much you can make with compound interest"
            />
            <meta
                name="description"
                content="Compound Interest Calculator illustrates how much money can be made with the power of compound interest. Try out different deposits, top ups and interest rates and Interest Calculator will do the rest."
            />

            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content="https://interest-calculator.tomrolfe.co.uk/"
            />
            <meta
                property="og:title"
                content="Interest Calculator - See how much you can make with compound interest"
            />
            <meta
                property="og:description"
                content="Compound Interest Calculator illustrates how much money can be made with the power of compound interest. Try out different deposits, top ups and interest rates and Interest Calculator will do the rest."
            />
            <meta
                property="og:image"
                content="https://interest-calculator.tomrolfe.co.uk/interest-calculator-og.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content="https://interest-calculator.tomrolfe.co.uk/"
            />
            <meta
                property="twitter:title"
                content="Interest Calculator - See how much you can make with compound interest"
            />
            <meta
                property="twitter:description"
                content="Compound Interest Calculator illustrates how much money can be made with the power of compound interest. Try out different deposits, top ups and interest rates and Interest Calculator will do the rest."
            />
            <meta
                property="twitter:image"
                content="https://interest-calculator.tomrolfe.co.uk/interest-calculator-og.png"
            ></meta>

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <link
                rel="stylesheet"
                href="https://use.typekit.net/hfj5pix.css"
            ></link>
        </Head>
        <div className="background-gradient">
            <Header />
            <main className="">{props.children}</main>
            <Footer />
        </div>
    </>
);

export default Layout;
