
import React from 'react';
import TerminalOutput from './Terminal/TerminalOutput';

const About = ({ statements }) => {
  return (
    <div className="mt-[15vh] mx-auto px-4">
      <div className="text-center mb-4">
        <p className="text-black text-4xl font-semibold">Abenezer Seifu</p>
      </div>
      <div className="rounded-t-[10px] overflow-hidden shadow-xl max-w-3xl mx-auto mt-[10vh]">
       
        <div className="bg-[#2c001e] text-[#f7f7f7] font-mono rounded-b-md shadow-[0_50px_100px_rgba(50,50,93,0.15),0_15px_35px_rgba(50,50,93,0.2),0_5px_15px_rgba(0,0,0,0.12)]">
          <TerminalOutput statements={statements} />
        </div>
      </div>
    </div>
  );
};

export default About;
