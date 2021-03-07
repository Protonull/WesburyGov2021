import React, {Fragment} from "react";
import config from "./src/config";
import "sanitize.css";

import {Helmet} from "react-helmet";
import Page from "@govuk-react/page";
import Main from "@govuk-react/main";
import TopNav, {asNavLinkAnchor, asTopNavAnchor} from "@govuk-react/top-nav";
import hash from "./src/utilities";

const LogoAnchor = asTopNavAnchor("a");
const NavAnchor = asNavLinkAnchor("a");

const Company = (
    <LogoAnchor href="/">
        <TopNav.IconTitle icon={<img src={"/static/wesbury_logo.png"}
                                     width={"36"} height={"36"} alt={"Emblem of Wesbury"}/>}>
            {config.title}
        </TopNav.IconTitle>
    </LogoAnchor>
);

const Header = (
    <TopNav company={Company}>
        {config.navigation.map(link =>
            <NavAnchor key={hash("nav", link)} href={link.href} alt={link.alt} target={link.target}>
                {link.label}
            </NavAnchor>)}
    </TopNav>
);

export function wrapRootElement({ element }) {
    return (
        <Fragment>
            <Helmet>
                <title>{config.fullTitle}</title>
            </Helmet>
            <Page header={Header} main={Main}>
                {element}
            </Page>
        </Fragment>
    );
}
