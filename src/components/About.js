import React from "react";
import aboutPic from "../assets/images/0.jpg";

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
            <div className="mt-5 sm:mt-0 justify-content">
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
              I am a seasoned professional with a unique mix of qualifications and experiences, currently spearheading New Business Development at Syenah. From earning a degree in Electrical Engineering to gaining practical experience in the solar energy industry and the software sector, my journey has been rich and diverse.</p>
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
              Building on the technical expertise acquired during my academic and professional pursuits, I delved into the software industry, gaining invaluable skills and insights. My entrepreneurial drive led me to establish my own tech start-up, further deepening my understanding of the interplay between technology and business value.</p>
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
              Now at Syenah, I fuse my technical know-how with ESG principles, performing diverse roles that encompass data sourcing, forming strategic alliances, and closely working with ESG taxonomies and frameworks. This balanced approach, underpinned by rigorous research, amplifies our platform's capabilities, performance, and commitment to ESG principles.</p>
              <p className="mt-3 max-w-2xl text-xl text-gray-500">
              With a deep-seated interest in leadership roles, my aim is to position ESG considerations at the heart of business operations. I am passionate about the synergy between Fourth Industrial Revolution (4IR) technologies, such as AI, and sustainable business growth. My robust networking abilities and social skills, coupled with a commitment to exploring the future of technology, are key drivers in my mission to help businesses navigate the path towards sustainable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
