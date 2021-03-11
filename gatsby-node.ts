import config from "./src/config";
import {exists, parseDate, segmentArray} from "js-utilities";

function printPageCreation(path: string) {
    console.log("Creating page: " + path);
}

async function compileMdxCollection(collection: string, graphql, getNode) {
    return ((await graphql(`
            query GetCollection {
                allFile(filter: {sourceInstanceName: {eq: "${collection}"}, ext: {in: ".mdx"}}) {
                    edges {
                        node {
                            name
                            childMdx {
                                id
                            }
                        }
                    }
                }
            }
        `))?.data?.allFile?.edges ?? [])
        .map(result => {
            const node = getNode(result.node.childMdx.id);
            if (!exists(node)) {
                console.warn("Could not find node [" + result.node.name + "] " +
                    "with id [" + result.node.childMdx.id + "] in collection [" + collection + "]!");
                return null;
            }
            return {
                slug: result.node.name,
                frontmatter: node.frontmatter ?? {}
            };
        })
        .filter(result => exists(result));
}

export async function createPagesStatefully({ actions, graphql, getNode }) {
    // Collect and paginate news
    {
        const articlesPerPage = 20;
        const articles = await compileMdxCollection("news", graphql, getNode);
        articles.sort((lhs, rhs) =>
            // @ts-ignore SHUT UP TYPESCRIPT, THIS WORKS FINE!
            (parseDate(rhs.frontmatter?.date) ?? 0) - (parseDate(lhs.frontmatter?.date) ?? 0));
        const pages = segmentArray(articles, articlesPerPage);
        function generatePath(index: number, maximum: number): string {
            if (index < 0 || index >= maximum) {
                return null;
            }
            return config.roots.news + (index == 0 ? "" : (index + 1) + "/");
        }
        for (let i = 0, l = pages.length; i < l; i++) {
            const path = generatePath(i, l);
            printPageCreation(path);
            actions.createPage({
                path: path,
                component: require.resolve("./src/components/templates/news-list.tsx"),
                context: {
                    items: pages[i],
                    previousPath: generatePath(i - 1, l),
                    nextPath: generatePath(i + 1, l)
                }
            });
        }
    }
    // Collect laws and create page
    {
        const path = config.roots.laws;
        printPageCreation(path);
        actions.createPage({
            path: path,
            component: require.resolve("./src/components/templates/laws-list.tsx"),
            context: {
                laws: await compileMdxCollection("laws", graphql, getNode)
            }
        });
    }
}

export async function onCreatePage({ page }) {
    printPageCreation(page.path);
}
