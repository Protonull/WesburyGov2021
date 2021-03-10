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
    {
        resolve: "gatsby-plugin-paginate",
        options: {
            sources: [
                {
                    path: "/news",
                    pageSize: 10,
                    template: require.resolve("./src/components/templates/news-list.tsx"),
                    serialize: (results) => results?.allFile?.edges ?? [],
                    query: `
                        query GetNews {
                            allFile(
                                sort: {order: DESC, fields: childrenMdx___frontmatter___news___date}
                                filter: {childMdx: {frontmatter: {type: {eq: "news"}}}, sourceInstanceName: {eq: "news"}}
                            ) {
                                edges {
                                    node {
                                        name
                                        childMdx {
                                            frontmatter {
                                                news {
                                                    title
                                                    date
                                                    excerpt
                                                    icon
                                                }
                                            }
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
    "@wardpeet/gatsby-plugin-static-site",
    "gatsby-plugin-offline",
    "gatsby-plugin-no-javascript" // Always have this last
];
