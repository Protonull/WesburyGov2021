import React, {Fragment} from "react";
import {hash} from "../../utilities";

export default function ({ pageContext }) {
    console.log("context:", pageContext);
    return (
        <div>
            {pageContext.posts.map(post =>
                <Fragment key={hash("article", post)}>
                    <a href={"./" + post.slug}>
                        {post.frontmatter.title}
                    </a>
                    <br/>
                </Fragment>
            )}
        </div>
    );
}
