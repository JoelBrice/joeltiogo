import React from "react";
import profilePic from "../assets/images/0.jpg";
import styled from 'styled-components';
import { LinkedIn, Email } from "@mui/icons-material";
import PlaceIcon from '@mui/icons-material/Place';

const Header = styled.div`
  block-size: 80vh;
  background-image: url(${profilePic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Intro = styled.div`
  background: linear-gradient(to right, #67b26f, #4ca2cd);
  padding: 20px;
  color: white;
  border-radius: 10px;
`;

const Container = styled.div``;

function Home() {
  return (
    <div className="home">
    <Header aria-label="Background profile picture" className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-left py-20">
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-black-900 sm:text-4xl">
          Business Development Engineer
          </p>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-black-900 sm:text-4xl"> Digital Transformation & ESG Consultant</p>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-black-900 sm:text-4xl">Tech Entrepreneur</p>
        </div>
      </div>
    </Header>
    <Container>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Intro className="content">
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            I specialize in leveraging technology for business value and sustainability, with a focus on ESG.
          </p>
          <div className="mt-10 sm:flex sm:justify-start lg:justify-start ">
            <a href="/portfolio"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              My Portfolio
            </a>
            <a
              href="/blog"
              className="mt-3 sm:mt-0 sm:ml-3 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Read My Blog
            </a>
          </div>
          <div className="mt-4 flex items-center text-lg">
            <LinkedIn fontSize="large" className="mr-2"/> 
            <a href="https://www.linkedin.com/in/joeltiogo/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
            <Email fontSize="large" className="ml-4 mr-2"/> 
            <a href="mailto:joeltiogo@example.com" className="text-white">Email</a>
            <PlaceIcon fontSize="large" className="ml-4 mr-2"/> 
            <p className="text-white">Frankfurt am Main, Germany</p>
          </div>
        </Intro>
      </div>
    </Container>
    </div>
  );
}

export default Home;