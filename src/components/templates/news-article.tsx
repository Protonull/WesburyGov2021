import React, {Fragment} from "react";
import styled from "styled-components";
import {spacing, typography} from "@govuk-react/lib";
import {parseDate} from "js-utilities";
import dateFormat from "dateformat";

import Chin from "../basic/chin";
import {H1} from "@govuk-react/heading";
import MdxWrapper from "../md-wrapper";

const SupportingText = styled("div")(
    {
        color: "#717171",
    },
    () => typography.font({ size: 19 }),
    spacing.withWhiteSpace()
);

export default function ({ children, pageContext }) {
    const frontmatter = pageContext.frontmatter ?? {};
    const title = frontmatter.title ?? "Testing";
    const date = parseDate(frontmatter.date) ?? new Date(0);
    return (
        <Fragment>
            <Chin/>
            <H1>{title}</H1>
            <SupportingText>{dateFormat(date, "dd mmmm yyyy")}</SupportingText>
            <MdxWrapper>
                {children}
            </MdxWrapper>
        </Fragment>
    );
}
