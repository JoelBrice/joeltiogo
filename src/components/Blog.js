import React from 'react';

import styled from 'styled-components';

const Head = styled.div`
    min-height: 100px;
    margin: 2em;
`;

const Img = styled.img`


`;

export default function Blog() {
  return (
    <div className="main">
      <Head>
        <h1>Welcome to the blog page.</h1>
        <p> A place to learn, grow, debate, and share ideas.</p>
        <Img src="../assets/images/photo.jpg" />
      </Head>
    </div>
  )
}
