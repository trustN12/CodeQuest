import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-tl from-black via-gray-900 to-purple-900 flex flex-col justify-center items-center  bg-opacity-50">
      <div className="py-4 ">
        <p className="text-base text-gray-400">
          &copy; {new Date().getFullYear()} CodeQuest. All rights reserved. Developed By Nabarun
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;