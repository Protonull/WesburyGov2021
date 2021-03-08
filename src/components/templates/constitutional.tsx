import React, {Fragment} from "react";
import {Helmet} from "react-helmet";
import BreadCrumbs from "@govuk-react/breadcrumbs";
import Panel from "@govuk-react/panel";
import MDXWrapper from "../md-wrapper";

export default function ({ children, pageContext, ...props }) {
    const frontmatter = pageContext.frontmatter ?? {};

    console.log("frontmatter:", frontmatter);
    console.log("props:", props);

    return (
        <Fragment>
            <Helmet>
                <title>{frontmatter.title}</title>
            </Helmet>
            <BreadCrumbs>
                <BreadCrumbs.Link href="../../../">
                    Wesbury
                </BreadCrumbs.Link>
                <BreadCrumbs.Link href="../../">
                    Admiralty
                </BreadCrumbs.Link>
                <span>Constitution</span>
                <span>{frontmatter.title}</span>
            </BreadCrumbs>
            <Panel title={frontmatter.title} bgColor={"#FFC145"}>
                {frontmatter.subtitle}
            </Panel>
            <MDXWrapper chin={false}>
                {children}
            </MDXWrapper>
        </Fragment>
    );
}
