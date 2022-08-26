import React from 'react'
import styled from 'styled-components';

const Head = styled.div`
    min-height: 100px;
    margin: 2em;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    padding: 1em;
    background-color: #f3f3f3;
`;

const Body = styled.div`

min-height: 300px;
${'' /* background-color: #f3f3f3; */}
`;

const Card = styled.div`
width: 300px;
min-height: 300px;
background-color: #f3f3f3;
`;

const Content = styled.div`
margin: 2em;
`;

export default function Portfolio() {
    return (
        <Content className="portfolio">
            <Head>
                <h3>PROJECTS</h3>
            </Head>
            <Body>
                <Card className="residenses.com">

                </Card>
            </Body>
        </Content>
    )
}
