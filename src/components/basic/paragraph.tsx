import React from "react";
import styled from "styled-components";
import {spacing,typography} from "@govuk-react/lib";

export default styled("p")(
    {
        margin: 0,
    },
    typography.font({
        size: 19
    }),
    spacing.withWhiteSpace({
        marginBottom: 4
    })
);
