// App.js
import React, { useState } from 'react';
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import deved from './assets/dev-ed-wave.png';
import code from './assets/code.png';
import design from './assets/design.png';
import consulting from './assets/consulting.png';
import web1 from './assets/web1.png';
import web2 from './assets/web2.png';
import web3 from './assets/web3.png';
import web4 from './assets/web4.png';
import web5 from './assets/web5.png';
import web6 from './assets/web6.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
                  href="https://drive.google.com/file/d/1iYnnAivp06mp9SwalvmeMOp5A9uSueXl/view"
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
              I currently pursue a Software Engineering undergraduate
              degree at Sri Lanka Institute of Information Technology
              (SLIIT). With the interested in web development and
              having considerable extent of experience in software
              engineering field, I'm seeking available exciting
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
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including brand design, programming, and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={design} width={100} height={100} alt="Design Icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your needs following core design theory.</p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={code} width={100} height={100} alt="Code Icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Code your dream project</h3>
              <p className="py-2">Do you have an idea for your next great website? Let's make it a reality.</p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={consulting} width={100} height={100} alt="Consulting Icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">Are you interested in feedback for your current project? I can give you tips and tricks to level it up.</p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including brand design, programming, and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src={web1} alt="Project 1" />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src={web2} alt="Project 2" />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src={web3} alt="Project 3" />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src={web4} alt="Project 4" />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src={web5} alt="Project 5" />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src={web6} alt="Project 6" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
