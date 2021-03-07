export const plugins = [
    "gatsby-plugin-typescript",
    {
        resolve: "gatsby-plugin-netlify-cms",
        options: {
            modulePath: "./src/components/netlifycms/cms.tsx"
        },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "pages",
            path: "./src/pages/",
        },
    },
    {
        resolve: "gatsby-plugin-mdx",
        options: {
            defaultLayouts: {
                default: require.resolve("./src/components/md-wrapper.tsx"),
            },
        },
    },
    "gatsby-plugin-mdx-frontmatter",
    "@wardpeet/gatsby-plugin-static-site",
    "gatsby-plugin-offline",
    "gatsby-plugin-no-javascript" // Always have this last
];
