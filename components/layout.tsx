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
