import React from 'react';

const TerminalOutput = ({ statements }) => {
  return (
    <div>
      {statements.map((statement, index) => (
        <div
          className={`mb-6 mx-9 leading-6 first:pt-[35px] last:pb-[60px] ${statement.type === 'contact' ? 'contact-statement' : ''}`}
          key={index}
        >
          <div className="font-fixedsys text-xl  text-[#ff6c00] before:content-['portfolio@abenezer:$']">
            {" "+statement.input}
          </div>
          <div
            className={`font-mono text-[#b1f2a7] ${statement.type === 'contact' ? 'contact-return' : ''}`} 
            dangerouslySetInnerHTML={{ __html: statement.return }}
          />
        </div>
      ))}

      {/* Blinking cursor */}
      <div className="mb-6 mx-9 leading-6">
        <div className="text-[#ff6c00] before:content-['portfolio@abenezer:~$'] inline-block">
          <span className="bg-[rgba(247,247,247,0.65)] animate-caret">&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalOutput;
