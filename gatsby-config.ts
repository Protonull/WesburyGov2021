export const pathPrefix = "Wesbury";

export const plugins = [
    "gatsby-plugin-typescript",
    "gatsby-plugin-netlify-cms",
    {
        resolve: "gatsby-plugin-styled-components",
        options: {
            displayName: false
        },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    // Source for news articles which need their own layout
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "news",
            path: "./src/pages/news"
        },
    },
    // Source for law documents which need their own layout
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "laws",
            path: "./src/pages/laws"
        },
    },
    // Source for files generally (got to put this last because of overlap)
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "default",
            path: "./src/pages/",
            ignore: ["news/\.*", "laws/\.*"]
        },
    },
    {
        resolve: "gatsby-plugin-mdx",
        options: {
            defaultLayouts: {
                default: require.resolve("./src/components/mdx-wrapper.tsx"),
                news: require.resolve("./src/components/templates/news-article.tsx"),
                laws: require.resolve("./src/components/templates/laws-document.tsx")
            },
        },
    },
    "gatsby-plugin-mdx-frontmatter",
    "@wardpeet/gatsby-plugin-static-site",
    "gatsby-plugin-offline",
    "gatsby-plugin-no-javascript" // Always have this last
];
