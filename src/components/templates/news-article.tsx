import React from "react";

export function pathSuffix(index: number) {
    return index == 0 ? "" : "-" + index;
}

export default function ({ children, ...props }) {
    return (
        <div>article</div>
    );
}
