import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import ToolBoxSVG from "@site/static/img/toolbox.svg";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <>
            <div className="w-full bg-yellow-100 p-4 text-center text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                This is a snapshot of the CodeLab Toolkit from early 2024 and may not reflect the current live version.
            </div>
            <header className="flex flex-wrap place-items-center justify-center bg-gradient-to-tr from-red-500 to-orange-300 px-6 py-32 dark:from-red-600 dark:to-orange-400">
                <div className="grid grid-cols-5 place-content-center place-items-center text-white">
                    <div className="col-span-2 flex w-full justify-end">
                        <ToolBoxSVG
                            role="img"
                            className="h-72 w-72 stroke-gray-200 dark:stroke-gray-300"
                        />
                    </div>
                    <div className="col-span-3 flex w-full flex-wrap gap-y-2">
                        <Heading
                            as="h1"
                            className="w-full text-left font-poppins text-6xl"
                        >
                            CodeLab Toolkit
                        </Heading>
                        <p className="w-full text-left font-poppins text-xl">
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
                </div>
            </header>
        </>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            // title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
