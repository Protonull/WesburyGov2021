import React, {Fragment} from "react";
import {hash} from "../../utilities";

import Chin from "../basic/chin";
import NewsItem from "../news-item";

export default function ({ pageContext }) {
    const posts = (pageContext.posts ?? []);
    return (
        <Fragment>
            <Chin/>
            {posts.map((post) =>
                <NewsItem key={hash("article", post)}
                          title={post.childMdx.frontmatter.news.title}
                          date={post.childMdx.frontmatter.news.date}
                          link={"/news/" + post.name}
                          image={post.childMdx.frontmatter.news.icon}>
                    {post.childMdx.frontmatter.news.excerpt}
                </NewsItem>
            )}
            <Chin/>
        </Fragment>
    );
}
