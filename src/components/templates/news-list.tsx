import React, {Fragment} from "react";
import config from "../../config";
import {hash} from "../../utilities";
import styled from "styled-components";
import {spacing, typography} from "@govuk-react/lib";
import {parseDate} from "js-utilities";
import dateFormat from "dateformat";

import Chin from "../basic/chin";

const Wrapper = styled("a")(
    {
        display: "block",
        marginBottom: "15px",
        boxShadow: "0 1px 1px 0 rgba(60, 64, 67, .08), 0 1px 3px 1px rgba(60, 64, 67, .16)",
        color: "#373151",
        textDecoration: "none",
        ":hover": {
            background: "#ebe9e8"
        },
        ":active": {
            border: "3px solid #20c997",
            margin: "-3px -3px 12px"
        }
    },
    () => typography.font({ size: 16 }),
    spacing.withWhiteSpace()
);

const Internal = styled.div`
    position: relative;
    min-height: 130px;
    display: flex;
    padding: 10px 15px 10px 130px;
    border-left: 6px solid #ffc145;
    justify-content: space-between;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 10px 15px;
    }
`;

const ImageWrapper = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Content = styled.div`
    flex-grow: 1;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 500;
`;

const Excerpt = styled.div`
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0;
`;

const Info = styled.div`
    padding-right: 15px;
    padding-top: 7px;
    padding-bottom: 7px;
    border-top: 1px dotted rgb(203, 201, 205);
    margin-right: -15px;
    margin-bottom: -10px;
    color: #717171;
    font-size: 18px;
    font-weight: 400;
`;

export default function ({ pageContext }) {
    return (
        <Fragment>
            <Chin/>
            {(pageContext.items ?? []).map(post =>
                <Wrapper key={hash("news", post)} href={config.roots.news + post.slug}>
                    <Internal>
                        <ImageWrapper>
                            <img src={post.frontmatter?.icon ?? "/static/news_stock.png"}
                                 width={100} height={100} alt={""}/>
                        </ImageWrapper>
                        <Content>
                            <Title>{post.frontmatter?.title ?? "Document Title"}</Title>
                            <Excerpt>{post.frontmatter?.excerpt}</Excerpt>
                        </Content>
                        <Info>
                            {dateFormat((parseDate(post.frontmatter?.date) ?? new Date(0)), "dd mmmm yyyy")}
                        </Info>
                    </Internal>
                </Wrapper>
            )}
            <Chin/>
        </Fragment>
    );
}
