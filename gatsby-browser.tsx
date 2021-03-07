import React from "react";
import DefaultTemplate from "./src/components/templates/default";

export function wrapRootElement({ element }) {
    return (
        <DefaultTemplate>
            {element}
        </DefaultTemplate>
    );
}
