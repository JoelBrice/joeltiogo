import React from "react";
import profilePic from "../assets/images/0.jpg";
import styled from 'styled-components';
import { LinkedIn } from "@mui/icons-material";

const Container = styled.div`
  height: 90vh;
`;

function Home() {
  return (
    <Container className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Welcome to my website!
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            I am Joel Tiogo, Business Development Manager at <a href="http://www.syenah.ai" className="text-blue-600">Syenah GmbH</a>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            I specialize in leveraging technology for business value and sustainability, with a focus on ESG.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <a
                href="/portfolio"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                My Portfolio
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/blog"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Read My Blog
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center"> Let's connect!
            <a
              href="https://www.linkedin.com/in/joeltiogo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-900"
            >
              <LinkedIn fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
