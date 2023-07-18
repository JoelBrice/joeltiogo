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
                I am a digital transformation expert with a background in electrical engineering and software development. I have a passion for leveraging technology to drive business value and sustainability.
              </p>
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
                After completing my degree in electrical engineering, I worked as a software developer for several years before starting my own startup. This experience gave me a deep understanding of how technology can be used to solve real-world problems and create value for businesses.
              </p>
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
                In my current role, I help organizations develop and implement digital transformation strategies that drive growth, improve efficiency, and support sustainability. I am passionate about using technology to create a better world and I believe that digital transformation is a key driver of positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
