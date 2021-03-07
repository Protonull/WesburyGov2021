import React from "react";
import {ServerStyleSheet, StyleSheetManager} from "styled-components";
import DefaultTemplate from "./src/components/templates/default";

const css = new ServerStyleSheet();

export function onRenderBody({ setHeadComponents }) {
    setHeadComponents([css.getStyleElement()])
}

export function wrapRootElement({ element }) {
    return (
        <StyleSheetManager sheet={css.instance}>
            <DefaultTemplate>
                {element}
            </DefaultTemplate>
        </StyleSheetManager>
    );
}
