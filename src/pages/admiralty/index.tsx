import React, {Fragment} from "react";
import hash, {Pocket} from "../../utilities";
import {arrayHasElements,ensureNumber} from "js-utilities";

import BreadCrumbs from "@govuk-react/breadcrumbs";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import {H2} from "@govuk-react/heading";
import UnorderedList from "@govuk-react/unordered-list";
import ListItem from "@govuk-react/list-item";
import Paragraph from "../../components/basic/paragraph";
import Link from "@govuk-react/link";

function getDocumentType(documents: Pocket[], type: string) {
    return documents
        .filter(element => element.type === type)
        .sort((lhs, rhs) => ensureNumber(lhs.order) - ensureNumber(rhs.order));
}

function displayDocumentLinks(documents: Pocket[], emptyMessage: string) {
    if (arrayHasElements(documents)) {
        return (
            <UnorderedList>
                {documents.map(document => (
                    <ListItem key={hash("document", document)}>
                        <Link href={document.path}>{document.title}</Link>
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
    const documents = pageContext.documents ?? [];
    const constitution = getDocumentType(documents, "CONSTITUTION");
    const treaties = getDocumentType(documents, "TREATY");
    const laws = getDocumentType(documents, "STANDING ORDER");
    const precedents = getDocumentType(documents, "PRECEDENT");
    return (
        <Fragment>
            <BreadCrumbs>
                <BreadCrumbs.Link href="../">
                    Wesbury
                </BreadCrumbs.Link>
                Admiralty
            </BreadCrumbs>
            <GridRow>
                <GridCol setWidth="one-half">
                    <H2>Constitution</H2>
                    {displayDocumentLinks(constitution, "Wesbury does not have any charter documents.")}
                    <br/>
                </GridCol>
                <GridCol setWidth="one-half">
                    <H2>Agreements</H2>
                    {displayDocumentLinks(treaties, "Wesbury current has no treaties.")}
                    <br/>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol setWidth="one-half">
                    <H2>Standing Orders</H2>
                    {displayDocumentLinks(laws, "Wesbury currently has no standing orders.")}
                    <br/>
                </GridCol>
                <GridCol setWidth="one-half">
                    <H2>Precedents</H2>
                    {displayDocumentLinks(precedents, "Wesbury currently has no precedents.")}
                    <br/>
                </GridCol>
            </GridRow>
        </Fragment>
    );
}
