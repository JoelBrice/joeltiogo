import React from 'react';
import styled from 'styled-components';
import intelPartner from '../assets/images/intel-student.jpg';

const Head = styled.div`
    padding: 1em;
    background-color: #f2f2f2;
    font-weight: 900;
    font-size:32px;
    text-align: center;
    margin: 1em 0 1em 0 ;
`;

const Card = styled.div`
  width: 500px;
  border: 2px 2px 2px 2px #afafaf;
  background-color: #f2f2f2;
  min-height:800px;
`;

const Img = styled.img`

width: 500px;
height: 500px;

`;

const Content = styled.div`
margin: 2em;
`;

const CardBody = styled.div`

min-height:100px;
`;


const CardTitle = styled.h1`
font-weight: 600;
font-size: 22px;
`;
export default function Blog() {
  return (
    <Content>
      <Head>
        BLOG
      </Head>
      <Card>
        <CardTitle>How being a student partner/ambassador helped me learn how to code better.</CardTitle>
        <Img src={intelPartner} />
        <CardBody>
          <p>A student ambassador or a student partner is first and foremost a student who act as a promotor in his/her university.</p>
        </CardBody>
      </Card>
    </Content>
  )
}
