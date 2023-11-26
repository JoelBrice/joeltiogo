import React from "react";
import profilePic from "../assets/images/1.jpg";
import styled from 'styled-components';
import { LinkedIn, Email } from "@mui/icons-material";
import PlaceIcon from '@mui/icons-material/Place';

const Header = styled.header`
  display: flex;
  flex-direction: column; /* Stack vertically by default */
  align-items: center;
  text-align: center; /* Center the text for the mobile layout */

  @media (min-width: 768px) { /* Adjustments for larger screens */
    flex-direction: row; /* Display side-by-side */
    align-items: flex-start;
    text-align: left;
  }
  
  img {
    width: 100%;
    max-width: 300px; /* Set a maximum width for the image */
    height: auto; /* Maintain aspect ratio */
    border-radius: 50%; /* Make the image round */
    margin: 0 10em; /* Add some space around the image */
      }
      
      .text-content {
        max-width: 640px; /* Maximum width of the text content */
      }
    `;
    
    const Intro = styled.section`
      background: linear-gradient(to right, #67b26f, #4ca2cd);
      padding: 20px;
      color: white;
      border-radius: 10px;
      margin-top: 2em;
    `;
    
    const Container = styled.main`
      padding: 2em;
    `;
    
    function Home() {
      return (
        <div className="home">
          <Header aria-label="Background profile picture" className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-wrap justify-center lg:justify-between items-center">
              <div className="text-content">
                <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-blue-900 sm:text-4xl">
                  Business Developer
                </p>
                <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-blue-900 sm:text-4xl">ESG Consultant</p>
            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-blue-900 sm:text-4xl">Digital Transformation</p>
          </div>
          <img src={profilePic} alt="Profile" />
        </div>
      </Header>
      <Container>
        <Intro className="content">
          <p className="mt-3 max-w-2xl text-xl lg:mx-auto">
          I have a unique blend of qualifications and experiences in electrical engineering, software, entrepreneurship, and the ESG space. 

 </p>
          <p className="mt-3 max-w-2xl text-xl lg:mx-auto">
            
Passionate about the 4th Industrial Revolution (4IR) and sustainability, I integrate technical expertise with ESG principles at Syenah, spearheading new business development.
            <br />
            I actively engage with professionals, attend meet-ups, and value personal growth through activities like football, chess, and reading. Let's connect to explore collaborative opportunities in emerging technologies and ESG, driving positive change towards a sustainable future.
         
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/blog"
              className="mt-10 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Read My Blog
            </a>
          </div>
          <div className="mt-4 flex flex-wrap justify-center lg:justify-start items-center text-lg">
            <LinkedIn fontSize="large" className="mr-2"/>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white mr-4">LinkedIn</a>
            <Email fontSize="large" className="mr-2"/>
            <a href="mailto:example@gmail.com" className="text-white mr-4">Email</a>
            <PlaceIcon fontSize="large" className="mr-2"/>
            <span className="text-white">Frankfurt am Main, Germany</span>
          </div>
        </Intro>
      </Container>
    </div>
  );
}
export default Home;