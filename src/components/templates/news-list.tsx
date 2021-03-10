import React, {Fragment} from "react";
import config from "../../config";
import {hash} from "../../utilities";

import Chin from "../basic/chin";
import NewsItem from "../news-item";

export default function ({ pageContext }) {
    return (
        <Fragment>
            <Chin/>
            {(pageContext.items ?? []).map(post =>
                <NewsItem key={hash("article", post)}
                          title={post.frontmatter.news.title}
                          date={post.frontmatter.news.date}
                          link={config.roots.news + post.slug}
                          image={post.frontmatter.news.icon}>
                    {post.frontmatter.news.excerpt}
                </NewsItem>
            )}
            <Chin/>
        </Fragment>
    );
}
