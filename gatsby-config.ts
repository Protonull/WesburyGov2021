export const plugins = [
    "gatsby-plugin-typescript",
    {
        resolve: "gatsby-plugin-netlify-cms",
        options: {
            modulePath: "./src/components/netlifycms/cms.tsx"
        },
    },
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
    // Source for files generally (got to put this last because of overlap)
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "default",
            path: "./src/pages/",
            ignore: ["news/\.*"]
        },
    },
    {
        resolve: "gatsby-plugin-mdx",
        options: {
            defaultLayouts: {
                default: require.resolve("./src/components/md-wrapper.tsx"),
                news: require.resolve("./src/components/templates/news-article.tsx")
            },
        },
    },
    "gatsby-plugin-mdx-frontmatter",
    "@wardpeet/gatsby-plugin-static-site",
    "gatsby-plugin-offline",
    "gatsby-plugin-no-javascript" // Always have this last
];
