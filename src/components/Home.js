import React from "react";
import profilePic from "../assets/images/hacker.jpg";
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
          Business Developer
          </p>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-black-900 sm:text-4xl"> ESG Consultant </p>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-black-900 sm:text-4xl"> Digital Transformation </p>
        </div>
      </div>
    </Header>
    <Container>
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-5 py-12">
        <Intro className="content">
          <p className="mt-3 max-w-2xl text-xl lg:mx-auto">
          I have a unique blend of qualifications and experiences in electrical engineering, software, entrepreneurship, and the ESG space.</p>
          <p className="mt-3 max-w-2xl text-xl lg:mx-auto">
          Passionate about the 4th Industrial Revolution (4IR) and sustainability, I integrate technical expertise with ESG principles at Syenah, spearheading new business development.
          <br/>
          I actively engage with professionals, attend meet-ups, and value personal growth through activities like football, chess, and reading. Let's connect to explore collaborative opportunities in emerging technologies and ESG, driving positive change towards a sustainable future.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-center ">
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
            <a href="mailto:tiogojoel@gmail.com" className="text-white">Email</a>
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