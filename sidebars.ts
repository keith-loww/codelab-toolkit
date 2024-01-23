import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    guideSidebar: [
        {
            type: "category",
            label: "Introduction",
            collapsed: false,
            collapsible: false,
            link: {
                type: "doc",
                id: "guide/index",
            },
            items: [
                "guide/async",
                "guide/useEffect",
                "guide/useContext",
                "guide/useReducer",
                "guide/conditional",
                "guide/tailwind",
                "guide/customHooks",
                "guide/useMemoUseCallback",
                "guide/authentication",
            ],
        },
    ],
};

export default sidebars;
