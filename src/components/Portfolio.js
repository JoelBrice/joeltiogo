import React from 'react'
import styled from 'styled-components';

const Head = styled.div`
    min-height: 100px;
    margin: 2em;
`;

const Body = styled.div`

min-height: 300px;
background-color: #f3f3f3;
`;

export default function Portfolio() {
    return (
        <>
            <Head>
                <h3>Here are some of the projects I have worked.</h3>
            </Head>
            <Body>

            </Body>
        </>
    )
}
