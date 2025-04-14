

import React from 'react';
import TopBar from './../components/TopBar';
import About from './../components/About';
import Projects from './../components/Projects';
import Footer from '../components/Footer';
import getProjectData from "../content/project"
function Home() {
  const terminalStatements = [
    {
      input: 'whoami',
      return: 'Hi, I’m a software engineer with more than 5 years of experience in software development.',
      type: 'info',
    },
    {
      input: 'education',
      return: 'B.Sc. Software Engineering - Addis Ababa Science and Technology University',
      type: 'info', 
    },
    {
      input: 'skills',
      return: 'React, TypeScript, Golang, Rust, Tailwind, Git, Java, Python, Redux, and more...',
      type: 'info', 
    },
    {
      input: 'github',
      return: 'Github <a href="https://www.github.com/abenezer121">abenezer121</a>',
      type: 'contact',
    },

    {
      input: 'contact',
      return: `
        <strong>Email:</strong> <a href="mailto:abenzer.seifuu.kinfuu@gmail.com">abenzer.seifuu.kinfuu@gmail.com</a><br/>
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abenezer-seifu-5493b3290">Abenezer Seifu</a><br/>
 
      `,
      type: 'contact', 
    }]

 

  return (
    <>
      <TopBar />
      <About statements={terminalStatements} />
      <Projects projects={getProjectData()} />
      <Footer />
    </>
  );
}

export default Home;
