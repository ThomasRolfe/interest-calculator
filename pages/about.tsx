import type { NextPage } from "next";
import Card from "../components/card";
import Layout from "../components/layout";

const About: NextPage = () => {
    return (
        <Layout>
            <div>
                <h1>About page</h1>
                <Card.MobileFullWidth>
                    Some test content inside a mobile container
                </Card.MobileFullWidth>
            </div>
        </Layout>
    );
};

export default About;
