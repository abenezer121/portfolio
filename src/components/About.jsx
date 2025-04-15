
import React from 'react';
import TerminalOutput from './Terminal/TerminalOutput';

const About = ({ statements }) => {
  return (
    <div className="mt-[15vh] mx-auto px-4">
      <div className="text-center mb-4">
        <p className="text-black text-6xl font-fixedsys">Abenezer Seifu</p>
      </div>
      <nav className="flex justify-around space-x-4 font-sans text-[1.2em] mt-10 md:text-base   hover:-translate-y-1 transition-all ">
        <a
          href="#projects"
          className="font-mono rounded-md border-[2.4px] border-[#ff6c00] px-5 py-3 text-xl text-gray-700 hover:text-[#ff6c00] relative no-underline transition-all duration-150 after:absolute after:left-0 after:-bottom-7 after:w-0 after:h-2 after:bg-purple after:content-[''] hover:after:w-full"
          >
          Projects
        </a>
       
      </nav>
      <div className="rounded-t-[10px] overflow-hidden shadow-xl max-w-3xl mx-auto mt-[8vh]">
       
        <div className=" bg-[#2c001e] text-[#f7f7f7] font-mono rounded-b-md shadow-[0_50px_100px_rgba(50,50,93,0.15),0_15px_35px_rgba(50,50,93,0.2),0_5px_15px_rgba(0,0,0,0.12)]">
          <TerminalOutput statements={statements} />
        </div>
      </div>
    </div>
  );
};

export default About;
