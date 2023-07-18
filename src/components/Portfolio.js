import React from "react";
import { Link } from "react-router-dom";
import SmartAIr from "../assets/images/smartair.png";
import Expotech from "../assets/images/expotech.svg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Air",
      description: "A Patented IoT solution that detect air quality in a given environment and sends the data to a dashboard.",
      image: SmartAIr,
      link: "https://www.smartair.co.za"
    },
    {
      id: 2,
      title: "Expotech Industries",
      description: "A startup that provides high quality consulting services in Electrical Engineering, Software Engineering, and Skills development in 4IR.",
      image:Expotech,
      link: "https://www.expotechindustries.com",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "../assets/images/smartair.png",
      link: "https://www.example.com/project3",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are some of my past and present work:
          </p>
        </div>

        <div className="mt-10 flex justify-center flex-wrap">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-xs rounded overflow-hidden shadow-lg m-4"
            >
              <img className="w-full" src={project.image} alt={project.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
              <div className="px-6 py-4">
                <Link
                  to={project.link}
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
