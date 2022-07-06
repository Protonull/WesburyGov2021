import React, {Fragment} from "react";
import config from "../../config";
import {hash} from "../../utilities";
import styled from "styled-components";
import "sanitize.css";

import {Helmet} from "react-helmet";
import Page from "@govuk-react/page";
import Main from "@govuk-react/main";
import TopNav, {asNavLinkAnchor, asTopNavAnchor} from "@govuk-react/top-nav";
import Chin from "../basic/chin";
import Footer from "@govuk-react/footer";

const LogoAnchor = asTopNavAnchor("a");
const NavAnchor = asNavLinkAnchor("a");

const Company = (
    <LogoAnchor href="/Wesbury/">
        <TopNav.IconTitle icon={<img src={"/Wesbury/static/wesbury_logo.png"}
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

const Foot = (
    <Footer
        copyright={{
            text: "Protonull",
            link: "/Wesbury/about/",
            image: {
                source: "/Wesbury/static/wesbury_emblem.png",
                height: 156,
                width: 125,
                style: {
                    opacity: 0.6
                }
            }
        }}/>
);

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export default function({ children }) {
    return (
        <Fragment>
            <Helmet>
                <title>{config.fullTitle}</title>
            </Helmet>
            <Page header={Header} main={Main} footer={Foot}>
                <Container>
                    {children}
                    <Chin/>
                </Container>
            </Page>
        </Fragment>
    );
}
