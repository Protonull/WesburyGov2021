import {Node as GatsbyNode, Page as GatsbyPage} from "gatsby";
import {filterObject, Pocket, startsWithNotEqual} from "./src/utilities";
import {parseDate} from "js-utilities";

// ------------------------------------------------------------
// Collections
// ------------------------------------------------------------

const PAGES: {[key: string]: GatsbyPage & GatsbyNode} = {};

// ------------------------------------------------------------
// Build Process
// ------------------------------------------------------------

export function onCreatePage({ page }) {
    console.log("Creating page: " + page.path);
    PAGES[page.path] = page;
    // Create default law frontmatter template
    if (startsWithNotEqual(page.path, "/admiralty/")) {
        const frontmatter: Pocket = (page.context.frontmatter ??= {});
        frontmatter.title ??= "Document Title";
        frontmatter.subtitle ??= "Ordered by the Admiral";
        frontmatter.type ??= "STANDING ORDER";
        frontmatter.order ??= 0;
        frontmatter.path = page.path;
    }
    // Create default news template
    if (startsWithNotEqual(page.path, "/news/")
            && page.isCreatedByStatefulCreatePages === true) {
        // Front matter template
        const frontmatter: Pocket = (page.context.frontmatter ??= {});
        frontmatter.title ??= "Document Title";
        frontmatter.author ??= "Author";
        frontmatter.snippet ??= null;
        frontmatter.date ??= new Date();
        frontmatter.date = parseDate(frontmatter.date); // Just in case
        frontmatter.path = page.path;
    }
}

export function onPostBootstrap() {
    // Add page's path to the page's context
    for (const [key, value] of Object.entries(PAGES)) {
        value.context.path = key;
    }
    // Retrieve all laws
    PAGES["/admiralty/"].context["documents"] = Object.values(
        filterObject(PAGES, (key) => startsWithNotEqual(key, "/admiralty/")))
        .map(document => document.context.frontmatter);
}
