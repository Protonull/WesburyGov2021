import config from "./src/config";
import {Node as GatsbyNode, Page as GatsbyPage} from "gatsby";
import {Pocket} from "./src/utilities";
import {segmentArray} from "js-utilities";

const PAGES: {[key: string]: GatsbyPage & GatsbyNode} = {};

export function createSchemaCustomization({ actions }) {
    // Types with an ! are non-null, think of everything else as for example "title?: string"
    actions.createTypes(`
        type WesburyNews {
            title: String!
            author: String!
            excerpt: String
            date: String!
            categories: [String!]
            icon: String
        }
        type WesburyLaw {
            type: String!
            order: Int!
            current: Boolean!
        }
        extend type MdxFrontmatter {
            type: String!

            news: WesburyNews
            law: WesburyLaw
        }
    `);
}

export async function createPages({ actions, graphql }) {
    // Paginate news
    {
        let results = ((await graphql(`
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
        `))?.data?.allFile?.edges ?? []);
        results = results.map(result => result.node ?? {});
        results = results.map(result => <Pocket>{
            slug: result?.name,
            frontmatter: {
                ...result?.childMdx?.frontmatter
            }
        });
        results = segmentArray(results, 20 /** items per page */);
        function generatePath(index: number, maximum: number): string {
            if (index < 0 || index >= maximum) {
                return null;
            }
            return config.roots.news + (index == 0 ? "" : (index + 1) + "/");
        }
        for (let i = 0, l = results.length; i < l; i++) {
            actions.createPage({
                path: generatePath(i, l),
                component: require.resolve("./src/components/templates/news-list.tsx"),
                context: {
                    items: results[i],
                    previousPath: generatePath(i - 1, l),
                    nextPath: generatePath(i + 1, l)
                }
            });
        }
    }
}

export function onCreatePage({ page }) {
    console.log("Creating page: " + page.path);
    PAGES[page.path] = page;
}

export function onPostBootstrap() {
    // Add page's path to the page's context
    for (const [key, value] of Object.entries(PAGES)) {
        value.context.path = key;
    }
}
