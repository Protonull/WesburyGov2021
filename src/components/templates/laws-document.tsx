import React, {Fragment} from "react";
import config from "../../config";

import {Helmet} from "react-helmet";
import BreadCrumbs from "@govuk-react/breadcrumbs";
import Panel from "@govuk-react/panel";
import MDXWrapper from "../mdx-wrapper";

export default function ({ children, pageContext, ...props }) {
    const frontmatter = pageContext.frontmatter ?? {};
    const title = frontmatter.title ?? "Law";
    return (
        <Fragment>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <BreadCrumbs>
                <BreadCrumbs.Link href="/WesburyGov2021/">
                    Wesbury
                </BreadCrumbs.Link>
                <BreadCrumbs.Link href={"/WesburyGov2021" + config.roots.laws}>
                    Laws
                </BreadCrumbs.Link>
                <span>{title}</span>
            </BreadCrumbs>
            <Panel title={title} bgColor={"#FFC145"}>
                {frontmatter.subtitle}
            </Panel>
            <MDXWrapper chin={false}>
                {children}
            </MDXWrapper>
        </Fragment>
    );
}
