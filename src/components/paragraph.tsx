import React from "react";
import styled from "styled-components";
import { spacing, typography } from "@govuk-react/lib";

export default styled("p")(
    {
        margin: 0,
        "> p": {
            margin: 0,
        },
        "> p > code": {
            padding: "0.2em 0.4em",
            margin: "0",
            fontSize: "85%",
            backgroundColor: "rgba(27,31,35,0.05)",
            borderRadius: "3px",
        },
        "> pre": {
            padding: "16px",
            overflow: "auto",
            fontSize: "85%",
            lineHeight: "1.45",
            backgroundColor: "#f6f8fa",
            borderRadius: "3px",
        },
        "> pre > code": {
            display: "inline",
            padding: "0",
            margin: "0",
            border: "0",
            overflow: "visible",
            lineHeight: "inherit",
            wordWrap: "normal",
        },
        "ol, ul": {
            marginLeft: "15px",
            marginTop: "10px"
        }
    },
    ({ supportingText }) => typography.font({ size: supportingText ? 16 : 19 }),
    spacing.withWhiteSpace({ marginBottom: 4 })
);
