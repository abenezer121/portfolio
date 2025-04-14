
import gebetaimage1 from "../assets/images/gebeta/1.png"
import gebetaimage2 from "../assets/images/gebeta/2.png"
import gebetaimage3 from "../assets/images/gebeta/3.png"
import gebetaimage4 from "../assets/images/gebeta/4.png"
import gebetaimage5 from "../assets/images/gebeta/5.png"
import gebetaimage6 from "../assets/images/gebeta/6.png"




import gebetadocsimage1 from "../assets/images/gebeta-docs/1.png"
import gebetadocsimage2 from "../assets/images/gebeta-docs/2.png"
import gebetadocsimage3 from "../assets/images/gebeta-docs/3.png"
import gebetadocsimage4 from "../assets/images/gebeta-docs/4.png"
import gebetadocsimage5 from "../assets/images/gebeta-docs/5.png"


import termis1 from "../assets/images/termis/1.png"
import termis2 from "../assets/images/termis/2.png"
import termis3 from "../assets/images/termis/3.png"
import termis4 from "../assets/images/termis/4.png"


import gudina1 from "../assets/images/gudina/1.png"
import gudina2 from "../assets/images/gudina/2.png"
import gudina3 from "../assets/images/gudina/3.png"
import gudina4 from "../assets/images/gudina/4.png"
import gudina5 from "../assets/images/gudina/5.png"
import gudina6 from "../assets/images/gudina/6.png"
import gudina7 from "../assets/images/gudina/7.png"
import gudina8 from "../assets/images/gudina/8.png"
import gudina9 from "../assets/images/gudina/9.png"

import shazum from "../assets/images/shazum/1.png"
import sra1 from "../assets/images/satellite-analyzer/1.png"
import sra2 from "../assets/images/satellite-analyzer/2.jpeg"
const getProjectData = () => {
    return [
      {
        title: 'Gebeta Docs',
        description: 'A comprehensive documentation website for Gebeta Maps, designed to provide users with detailed guides, API references, and tutorials to maximize their experience with the platform.',
        skills: ['Next.js', 'Tailwind'],
        links: {
          github: 'https://github.com/AfriGebeta/GebetaDocs',
          preview: 'https://docs.gebeta.app',
        },
        image: gebetadocsimage1,
        images: [
            gebetadocsimage2,
            gebetadocsimage3,
            gebetadocsimage4,
            gebetadocsimage5,
          ],
      },
      {
        title: 'Gebeta Maps Website',
        description: 'The official website for Gebeta Maps, offering an intuitive interface for exploring geospatial data and tools. Built with modern web technologies to ensure performance and scalability.',
        skills: ['Next.js', 'Tailwind'],
        links: {
          github: 'https://github.com/AfriGebeta/GebetaNew',
          preview: 'https://gebeta.app',
        },
        image: gebetaimage1,
        images: [
            gebetaimage4,
            gebetaimage2,
            gebetaimage3,
            gebetaimage5,
            gebetaimage6,
          ],
      },
      {
        title: 'Termis',
        description: 'A modern desktop application for managing SSH clients and servers. Designed to streamline remote server management with an intuitive user interface and robust features.',
        skills: ['electron', 'react'],
        links: {
          github: 'https://github.com/abenezer121/termis.git',
          preview: '',
        },
        image: termis1,
        images: [
            termis2,
            termis3,
            termis4
          ],
      },

      {
        title: 'Reverend Gudina Tumsa Memorial Website',
        description: 'A tribute website dedicated to Reverend Gudina Tumsa, celebrating his life, legacy, and contributions. Built with React to provide an engaging and informative user experience.',
        skills: ['React'],
        links: {
          github: 'https://github.com/abenezer121/gudinareact',
          preview: '',
        },
        image: gudina1,
        images: [
            gudina2,
            gudina3,
            gudina4,
            gudina5,
            gudina6,
            gudina7,
            gudina8,
            gudina9,
            
          ],
      },
      {
        title: 'Shazum',
        description: 'A music recognition platform inspired by Shazam, allowing users to identify songs by analyzing audio input. The backend server processes audio fingerprints to match songs in real-time. The backend can be find in https://github.com/abenezer121/shazum',
        skills: ['React'],
        links: {
          github: 'https://github.com/abenezer121/shazum-client',
          preview: '',
        },
        image: shazum,
        images: [
            
            
          ],
      },
      {
        title: 'JOSM Satellite Road Analyzer',
        description: 'A JOSM plugin that enhances road mapping by leveraging satellite imagery. It sends bounding box coordinates to a server, which processes the imagery to segment and extract road networks for use in OpenStreetMap editing.',
        skills: ['Java', 'JOSM Plugin Development'],
        links: {
          github: 'https://github.com/abenezer121/satellite-image-analyzer-josmplugin.git',
          preview: '',
        },
        image: sra2,
        images: [
            
            
          ],
      }
    ];
  };
  
  export default getProjectData;
  