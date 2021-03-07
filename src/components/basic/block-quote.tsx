import React from "react";
import styled from "styled-components";
import {spacing,typography} from "@govuk-react/lib";
import {SPACING} from "@govuk-react/constants";
import {GREY_1} from "govuk-colours";

export default styled("p")(
    {
        margin: 0,
        paddingLeft: SPACING.SCALE_2,
        borderLeft: "5px solid #000000",
        fontStyle: "italic",
        color: GREY_1
    },
    typography.font({
        size: 16
    }),
    spacing.withWhiteSpace({
        marginLeft: SPACING.SCALE_2,
        marginBottom: 4
    })
);
