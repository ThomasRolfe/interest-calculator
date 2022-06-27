import Footer from "./footer";
import Header from "./header";

const Layout = (props: any) => (
    <div>
        <Header />
        <main>{props.children}</main>
        <Footer />
    </div>
);

export default Layout;
