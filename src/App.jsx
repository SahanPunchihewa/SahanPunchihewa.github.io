import React, { useState } from 'react';
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import deved from './assets/dev-ed-wave.png';
import research from './assets/research.png';
import iwt from "./assets/iwt.png";
import oop from './assets/oop.png';
import csse from './assets/csse.png';
import ead from './assets/ead.png';
import ds from './assets/ds.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    { id: 1, image: research, alt: 'Project 1' },
    { id: 2, image: iwt, alt: 'Project 2' },
    { id: 3, image: oop, alt: 'Project 3' },
    { id: 4, image: csse, alt: 'Project 4' },
    { id: 5, image: ead, alt: 'Project 5' },
    { id: 6, image: ds, alt: 'Project 6' }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Developed by Sahan Punchihewa</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1GQm3hW41l-e4k7Q5w_9hgkuoFcMC9_CW/view"
                  target="_blank" rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sahan Punchihewa
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Associate Software Engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am currently pursuing a Software Engineering undergraduate
              degree at Sri Lanka Institute of Information Technology
              (SLIIT). I am passionate about web development and have
              considerable experience in the software engineering field. I am seeking exciting
              opportunities related to the same.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/sahan-punchihewa/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/SahanPunchihewa" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a href="mailto:sahannilupul18@gmail.com" target="_blank" rel="noopener noreferrer">
                <AiFillMail />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={deved} className="w-full h-full object-cover" alt="Profile" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Technologies and Tools I Use</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Over the course of my education and work experience, I have developed a robust skill set in various technologies and tools. These include:
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h4 className="py-4 text-teal-600">Programming Languages</h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">C</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h4 className="py-4 text-teal-600">Web Development</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Express.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h4 className="py-4 text-teal-600">Databases</h4>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">SQLite</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <h4 className="py-4 text-teal-600">Other Tools & Technologies</h4>
              <p className="text-gray-800 py-1">Git</p>
              <p className="text-gray-800 py-1">Docker</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Welcome to my portfolio! Here, you will find a selection of my university projects and collaborations. These works showcase my skills, creativity, and dedication to developing innovative solutions. Each project represents a unique journey and a valuable learning experience. Dive in and explore the passion and effort I put into every piece of work. For more projects, check out my <a href="https://github.com/SahanPunchihewa" className="text-teal-500" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </div>
          <Slider {...sliderSettings}>
            {projects.map(project => (
              <div key={project.id} className="p-2">
                <img className="rounded-lg object-cover w-full h-80" src={project.image} alt={project.alt} />
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </div>
  );
}

export default App;

