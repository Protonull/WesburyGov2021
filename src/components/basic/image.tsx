import React from "react";
import styled from "styled-components";

const Image = styled.img`
    position: relative;
    display: block;
`;

export default function ({ ...props }) {
    return (
        <Image width={"100%"} {...props}/>
    );
}

