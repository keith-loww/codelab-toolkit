import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className="flex flex-wrap place-items-center justify-center bg-blue-950 px-6 py-32">
            <div className="flex flex-wrap place-content-center place-items-center gap-y-2">
                <Heading
                    as="h1"
                    className="font-poppins w-full text-center text-7xl"
                >
                    {siteConfig.title}
                </Heading>
                <p className="font-poppins w-full text-center text-xl">
                    {siteConfig.tagline}
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg font-poppins"
                        to="/docs/guide"
                    >
                        Get Started 🚀
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
