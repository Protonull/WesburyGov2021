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





    // Source for constitution files which need their own layout
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "constitutional",
            path: "./src/pages/admiralty/constitution",
        },
    },
    // Source for news articles which need their own layout
    {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "news",
            path: "./src/pages/news",
        },
    },
    // Source for files generally (got to put this last because of overlap)
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
                constitutional: require.resolve("./src/components/templates/constitutional.tsx"),
            },
        },
    },





    {
        resolve: "gatsby-plugin-paginate",
        options: {
            sources: [
                {
                    path: "/news",
                    pageSize: 10,
                    template: require.resolve("./src/components/templates/news-list.tsx"),
                    serialize: (results) => results.allMdx.edges ?? [],
                    query: `
                        query GetNews {
                            allMdx(
                                filter: {fileAbsolutePath: {regex: "/src\\\\/pages\\\\/news\\\\/.+/"}}
                                sort: {order: DESC, fields: frontmatter___date}
                            ) {
                                edges {
                                    node {
                                        slug
                                        frontmatter {
                                            title
                                            author
                                            date
                                        }
                                    }
                                }
                            }
                        }
                    `
                }
            ]
        }
    },





    "gatsby-plugin-mdx-frontmatter",
    "@wardpeet/gatsby-plugin-static-site",
    "gatsby-plugin-offline",
    "gatsby-plugin-no-javascript" // Always have this last
];
