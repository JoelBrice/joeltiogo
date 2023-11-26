import React from 'react';
import profilePic from '../assets/images/1.jpg';
import styled from 'styled-components';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

 @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
    justify-content: space-around;
  }

  img {
    width: auto;
    max-width: 250px;
    height: 250px; /* Square shape */
    object-fit: cover; /* Ensure no stretching */
    border-radius: 50%;
    margin: 1rem;
    border: 5px solid white; /* White border to create a standout effect */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  }
`;

const ContentContainer = styled.div`
  max-width: 640px;
`;

const Intro = styled.section`
  background: linear-gradient(to right, #67b26f, #4ca2cd);
  padding: 2rem;
  color: white;
  border-radius: 12px;
  margin: 2rem 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.main`
  padding:1rem;
  `;
  
  const CallToActionBtn = styled.a`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
    background-color: white;
    color: #4ca2cd;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #e0e0e0;
    }
  `;
  
  const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  
    a {
      color: white;
      transition: transform 0.2s ease;
      text-decoration: none;
  
      &:hover {
        transform: translateY(-2px);
      }
    }
  `;
  
  const IconWrapper = styled.span`
    margin-right: 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `;
  
  function Home() {
    return (
      <div className="home">
        <Header>
          <img src={profilePic} alt="Profile" />
          <ContentContainer>
            
          <h1 className="font-bold text-4xl text-blue-900 mb-4">
            Business Developer | ESG Consultant | Digital Transformation Specialist
          </h1>
          <p className="mt-4 text-xl text-blue-900 sm:text-2xl">
          Strategic leader in sustainable business growth, Digital Transformation and Environmental, Social, and Governance (ESG) solutions.
          </p>
        </ContentContainer>
      </Header>
      <Container>
        <Intro>
          <p className="text-xl">
            A unique blend of qualifications in engineering, software, and entrepreneurship matched with deep insights into the ESG space.
          </p>
          <p className="text-xl mt-4">
            Driving business growth through innovation and technology, fostering strategic partnerships, emphasizing sustainable advances.
          </p>
          <CallToActionBtn href="/blog">
            Read My Blog
          </CallToActionBtn>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/joeltiogo/" target="_blank" rel="noopener noreferrer">
            <IconWrapper>
              <LinkedIn  fontSize="large"  />
            </IconWrapper>
          </a>
          <a href="mailto:tiogojoel@gmail.com">
            <IconWrapper>
              <Email fontSize="large" />
            </IconWrapper>
            </a>
          <a>
            <IconWrapper>
              <PlaceIcon fontSize="large"  />
            </IconWrapper>
            65428 Rüsselsheim am Main, Germany
          </a>
        </SocialLinks>
        </Intro>
      </Container>
    </div>
  );
}

export default Home;