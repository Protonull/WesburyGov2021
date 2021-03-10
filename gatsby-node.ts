import {Node as GatsbyNode, Page as GatsbyPage} from "gatsby";

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
