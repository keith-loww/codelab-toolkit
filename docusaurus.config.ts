import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "CodeLab Toolkit 🧰",
    tagline: "A Guide To Learning Common Development Patterns",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://keith-loww.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/codelab-toolkit",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "keith-loww", // Usually your GitHub org/user name.
    projectName: "codelab-toolkit", // Usually your repo name.
    deploymentBranch: "gh-pages",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/toolkit-social-card.png",
        navbar: {
            title: "CodeLab Toolkit",
            logo: {
                alt: "CodeLab Icon",
                src: "img/codelab-icon.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "guideSidebar",
                    position: "left",
                    label: "Guide",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/Codelab-Davis/codelab-toolkit",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Guide",
                            to: "/docs/guide",
                        },
                    ],
                },
                {
                    title: "Socials",
                    items: [
                        {
                            label: "Instagram",
                            href: "https://www.instagram.com/codelabdavis/",
                        },
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/company/codelabdavis/",
                        },
                        {
                            label: "Medium",
                            href: "https://codelabdavis.medium.com/",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/Codelab-Davis/codelab-toolkit",
                        },
                    ],
                },
            ],
            copyright: `Created with 🧡 by CodeLab Infra`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.oneDark,
        },
        colorMode: {
            defaultMode: "dark",
            disableSwitch: false,
        },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        algolia: {
            appId: "PRQO1PLM1C",
            apiKey: "ba586a3967497e426c756a7d50e27836",
            indexName: "toolkit-codelabdavis",
            contextualSearch: false,
            searchPagePath: "search",
        },
    } satisfies Preset.ThemeConfig,

    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],
};

export default config;
