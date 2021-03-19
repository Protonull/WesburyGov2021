import React, {Fragment} from "react";

import {MDXProvider} from "@mdx-js/react";
import Chin from "./basic/chin";

import Paragraph from "./basic/paragraph";
import {H1,H2,H3,H4,H5,H6} from "@govuk-react/heading";
// ThematicBreak https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
import BlockQuote from "@govuk-react/inset-text";
import UnorderedList from "@govuk-react/unordered-list";
import OrderedList from "@govuk-react/ordered-list";
import ListItem from "@govuk-react/list-item";
import Table from "@govuk-react/table";
import ALink from "@govuk-react/link";
import Image from "./basic/image";

/** See order at: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#components */
const components = {
    p: Paragraph,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    //thematicBreak: null, // basically another <hr/>
    blockquote: BlockQuote,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    table: Table,
    tr: Table.Row,
    th: Table.CellHeader,
    td: Table.Cell,
    pre: null,
    code: null,
    //em: null, // italic
    //strong: null, // bold
    //delete: null, // strikethrough
    inlineCode: null,
    //hr: null,
    a: ALink,
    img: Image
};

export default function ({ children, ...props }) {
    const chin = props.chin !== false;
    return (
        <Fragment>
            {chin && <Chin/>}
            <MDXProvider components={components}>{children}</MDXProvider>
        </Fragment>
    );
}
