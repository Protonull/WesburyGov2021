import {Page as GatsbyPage, Node as GatsbyNode} from "gatsby";
import {filterObject, Pocket} from "./src/utilities";
import {parseDate, segmentArray} from "js-utilities";
import {pathSuffix} from "./src/components/templates/news-article";
import path from "path";

// ------------------------------------------------------------
// Collections
// ------------------------------------------------------------

const PAGES: {[key: string]: GatsbyPage & GatsbyNode} = {};

// ------------------------------------------------------------
// Build Process
// ------------------------------------------------------------

export function onCreatePage({ page }) {
    PAGES[page.path] = page;
}

export function onPostBootstrap({ actions: { createPage } }) {
    // Retrieve all laws
    PAGES["/admiralty/"].context["documents"] =
        Object.values(filterObject(PAGES, (key) => key.startsWith("/admiralty/documents/")))
            .map((document) => {
                const frontmatter: Pocket = Object.assign({
                    title: "Document Title",
                    date: new Date(),
                    type: "STANDING ORDER",
                    order: 0
                }, document.context.frontmatter);
                frontmatter.path = document.path;
                frontmatter.date = parseDate(frontmatter.date);
                return frontmatter;
            });
    // Retrieve all news
    const paginatedNews = segmentArray(Object.values(filterObject(PAGES, (key) => key.startsWith("/news/")))
        .map((document) => {
            const frontmatter: Pocket = Object.assign({
                title: "Article Title",
                author: "Author",
                date: new Date(),
                snippet: null
            }, document.context.frontmatter);
            frontmatter.path = document.path;
            frontmatter.date = parseDate(frontmatter.date);
            return frontmatter;
        })
        .sort((lhs, rhs) => (rhs.date ?? 0) - (lhs.date ?? 0)), 20);
    for (let i = 0, l = paginatedNews.length; i < l; i++) {
        createPage({
            path: "/news/" + pathSuffix(i),
            component: path.resolve("./src/components/templates/news-article.tsx"),
            context: {
                currentPage: i,
                hasPrevious: (i - 1) >= 0,
                hasNext: (i + 1) < l,
                articles: paginatedNews[i]
            }
        });
    }

}
