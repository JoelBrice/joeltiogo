import React from "react";
import aboutPic from "../assets/images/webinar.jpg";

function About() 
{
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-center">
            <div className="mr-8 flex-shrink-0">
              <img
                className="h-64 w-64 rounded-full object-cover"
                src={aboutPic}
                alt="About Me"
              />
            </div>
            <div className="mt-5 sm:mt-0">
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
              I'm a Business Development Manager with an electrical engineering and software development background. Passionate about leveraging technology for business value and sustainability, with a focus on ESG.
              </p>
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
              After completing my electrical engineering degree, I gained valuable experience as a software developer and founded my own startup. This journey deepened my understanding of technology's role in solving real-world problems and driving business value.
              </p>
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
              In my current role, I facilitate partnerships that drive growth and innovation. I'm dedicated to using technology to create a better world, believing that combining Good ESG practices with advanced technology will shape a brighter future.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
