import React from "react";
import { ContactContent } from "../constants";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const ReturnIcon = ({ name }) => {
    if (name == "LinkedIn") return <FiLinkedin />;
    else if (name == "Github") return <FiGithub />;
    else return <FiInstagram />;
  };
  return (
    <div
      id="contact"
      className="mt-30 py-20 bg-white relative font-popp text-black w-full flex items-center justify-evenly px-5"
    >
      <div className="flex gap-10 flex-col">
        <h1 className="text-3xl font-bold font-heading">Contact Me</h1>
        <div className="sm:w-[60%] sm:text-base text-sm w-full z-10">
          {ContactContent.line}
        </div>
        <span className="z-10">{ContactContent.email}</span>
        <ul className="flex gap-4">
          {ContactContent.links.map((link, i) => (
            <li key={i} className="z-10">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <ReturnIcon name={link.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <img
        title="Contact Me!"
        className="w-40 h-40 mr-10 sm:relative absolute z-0 bottom-0 right-0"
        src="/fist-bump.gif"
        alt="fistBump"
      />
    </div>
  );
};

export default Contact;
