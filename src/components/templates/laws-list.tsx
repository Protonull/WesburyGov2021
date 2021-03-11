import React, {Fragment} from "react";
import config from "../../config";
import {hash, Pocket} from "../../utilities";
import {arrayHasElements,ensureNumber} from "js-utilities";

import BreadCrumbs from "@govuk-react/breadcrumbs";
import WarningText from "@govuk-react/warning-text";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import {H2} from "@govuk-react/heading";
import UnorderedList from "@govuk-react/unordered-list";
import ListItem from "@govuk-react/list-item";
import Paragraph from "../basic/paragraph";
import Link from "@govuk-react/link";

function getLawType(laws: Pocket[], type: string) {
    return laws
        .filter(law => law.frontmatter?.type === type)
        .sort((lhs, rhs) => ensureNumber(lhs.frontmatter?.order) - ensureNumber(rhs.frontmatter?.order));
}

function displayLawLinks(laws: Pocket[], emptyMessage: string) {
    if (arrayHasElements(laws)) {
        return (
            <UnorderedList>
                {laws.map(law => (
                    <ListItem key={hash("law", law)}>
                        <Link href={config.roots.laws + law.slug}>{law.frontmatter?.title ?? "Law"}</Link>
                    </ListItem>
                ))}
            </UnorderedList>
        );
    }
    return (
        <Paragraph><i>{emptyMessage}</i></Paragraph>
    );
}

export default function ({ pageContext }) {
    const documents = pageContext.laws ?? [];
    const constitution = getLawType(documents, "CONSTITUTION");
    const treaties = getLawType(documents, "TREATY");
    const laws = getLawType(documents, "STANDING ORDER");
    const precedents = getLawType(documents, "PRECEDENT");
    return (
        <Fragment>
            <BreadCrumbs>
                <BreadCrumbs.Link href="../">
                    Wesbury
                </BreadCrumbs.Link>
                Laws
            </BreadCrumbs>

            {/* TODO: Get rid of this when the laws and such are up to date! */}
            <WarningText>This page is <i>currently</i> not reflective of Wesbury's legal situation.</WarningText>
            <br/>

            <GridRow>
                <GridCol setWidth="one-half">
                    <H2>Constitution</H2>
                    {displayLawLinks(constitution, "Wesbury does not have any charter documents.")}
                    <br/>
                </GridCol>
                <GridCol setWidth="one-half">
                    <H2>Agreements</H2>
                    {displayLawLinks(treaties, "Wesbury current has no treaties.")}
                    <br/>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol setWidth="one-half">
                    <H2>Standing Orders</H2>
                    {displayLawLinks(laws, "Wesbury currently has no standing orders.")}
                    <br/>
                </GridCol>
                <GridCol setWidth="one-half">
                    <H2>Precedents</H2>
                    {displayLawLinks(precedents, "Wesbury currently has no precedents.")}
                    <br/>
                </GridCol>
            </GridRow>
        </Fragment>
    );
}
