import React, {Fragment} from "react";
import {hash} from "../../utilities";

import Chin from "../basic/chin";
import NewsItem from "../news-item";

export default function ({ pageContext }) {
    const posts = (pageContext.posts ?? []).map(post => post.childMdx);
    return (
        <Fragment>
            <Chin/>
            {posts.map((post) =>
                <NewsItem key={hash("article", post)}
                          title={post.frontmatter.news.title}
                          date={post.frontmatter.news.date}
                          link={"/" + post.slug}
                          image={post.frontmatter.news.icon}>
                    {post.frontmatter.news.excerpt}
                </NewsItem>
            )}
            <Chin/>
        </Fragment>
    );
}
