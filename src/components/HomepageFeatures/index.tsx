import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Beyond the Bootcamp",
        Svg: require("@site/static/img/learn.svg").default,
        description: (
            <>
                Learn common patterns and best practices for building
                applications with CodeLab.
            </>
        ),
    },
    {
        title: "Interact with Live Examples",
        Svg: require("@site/static/img/interact.svg").default,
        description: (
            <>
                Examples use code sandboxes to allow you to interact with the
                code and see the results.
            </>
        ),
    },
    {
        title: "Powered by React",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                This website is built with{" "}
                <a href="https://reactjs.org/" target="_blank">
                    React
                </a>{" "}
                and{" "}
                <a href="https://docusaurus.io/" target="_blank">
                    Docusaurus
                </a>
                . You can use React to build your own applications.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {/* <Svg className={styles.featureSvg} role="img" /> */}
                <Svg className="h-40 w-40" role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
