import React, { useMemo, useState } from 'react';
import deved from './assets/KEFI PC 1-487.jpg';
import {
  SiTypescript, SiJavascript, SiPython, SiCsharp, SiPhp,
  SiReact, SiNodedotjs, SiNextdotjs, SiNestjs, SiLaravel, SiWordpress, SiEslint, SiPrettier,
  SiPostgresql, SiMysql, SiMongodb, SiFirebase, SiSqlite, SiMicrosoftsqlserver,
  SiAmazonaws, SiMicrosoftazure, SiDigitalocean, SiRender, SiHeroku,
  SiDocker, SiJenkins, SiGit, SiGithub, SiGitlab, SiVisualstudio, SiVisualstudiocode, SiPostman,
  SiPowerapps, SiPowerautomate, SiMicrosoftsharepoint, SiGithubcopilot
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const profile = useMemo(
    () => ({
      name: 'Sahan Punchihewa',
      title: 'Software Engineer',
      summary: 'Software Engineer with hands-on experience in web, cloud, and automation projects. Passionate about building robust, scalable solutions and learning new technologies.',
      links: {
        linkedin: 'https://www.linkedin.com/in/sahan-punchihewa/',
        github: 'https://github.com/SahanPunchihewa',
        email: 'mailto:sahannilupul18@gmail.com',
      },
      resume: {
        href: '/Sahan_Punchihewa_Resume.pdf',
        downloadName: 'Sahan_Punchihewa_Resume.pdf',
      },
    }),
    []
  );

  const experience = useMemo(
    () => [
      {
        company: 'DxDy(Pvt) LTD',
        title: 'Associate Software Engineer',
        period: 'Dec 2024 - Present',
        bullets: [
          'Contributed to a travel management system (ASP.NET, MSSQL): seamless booking, workflow for travel requests/approvals.',
          'Apparel Industry Management System (ASP.NET, MSSQL): designed/implemented workflow for industry operations.',
          'Healthcare project (NestJS, Next.js, PostgreSQL): backend and frontend implementation.',
          'School system website (WordPress, Elementor): custom layouts, interactive components, responsive design.',
          'Travel planning system (Next.js, NestJS, PostgreSQL): end-to-end system design, backend integration, responsive frontend.',
          'Shoes Manufacturing Company Management System (Laravel): backend, business process automation.',
        ],
      },
      {
        company: 'DP Infotech (Pvt) LTD',
        title: 'Intern Robotic Process Automation Developer',
        period: 'Mar 2024 - Sep 2024',
        bullets: [
          'Asset management app (Power Apps, SharePoint, Power Automate).',
          'Chatbot app (Microsoft Copilot Studio, Power Apps, SharePoint, Power Automate), integrated with Teams.',
          'MSL ticket system: Power Automate + Python backend.',
          'Digital signature solution (Power Apps, SharePoint).',
          'JIRA Server API integration research.',
        ],
      },
      {
        company: 'Nino Digital House (Pvt) Ltd',
        title: 'Associate Software Engineer',
        period: 'Jul 2023 - Nov 2023',
        bullets: [
          'Online Student Management System (Laravel, Angular): backend (auth, DB, logic), frontend (responsive UI).',
          'Deployed projects with Direct Admin: hosting, domain config, performance.',
        ],
      },
      {
        company: 'Nino Digital House (Pvt) Ltd',
        title: 'Trainee Software Engineer',
        period: 'Jan 2023 - Jul 2023',
        bullets: [
          'OMDB Movie Portal (Angular, REST API): real-time search, detailed info, responsive UI.',
          'E-commerce website (WordPress): payment gateways, product catalog, user-friendly navigation.',
          'School Management System (Laravel, Angular): contributed to backend/frontend.',
        ],
      },
    ],
    []
  );

  const skills = useMemo(
    () => [
      {
        group: 'Programming Languages & API',
        icon: '💻',
        items: [
          { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
          { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
          { name: 'Java', icon: FaJava, color: '#007396' },
          { name: 'C#', icon: SiCsharp, color: '#239120' },
          { name: 'PHP', icon: SiPhp, color: '#777BB4' },
          { name: 'REST API', icon: TbApi, color: '#009688' },
        ],
      },
      {
        group: 'Libraries & Frameworks',
        icon: '🌐',
        items: [
          { name: 'React', icon: SiReact, color: '#61DAFB' },
          { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
          { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
          { name: 'Nest.js', icon: SiNestjs, color: '#E0234E' },
          { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
          { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
          { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
          { name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
        ],
      },
      {
        group: 'Database',
        icon: '🗄️',
        items: [
          { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
          { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
          { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
          { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
          { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
          { name: 'MSSQL', icon: SiMicrosoftsqlserver, color: '#CC2927' },
        ],
      },
      {
        group: 'Cloud',
        icon: '☁️',
        items: [
          { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
          { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
          { name: 'Digital Ocean', icon: SiDigitalocean, color: '#0080FF' },
          { name: 'Render', icon: SiRender, color: '#46E3B7' },
          { name: 'Heroku', icon: SiHeroku, color: '#430098' },
          { name: 'Hostinger', icon: SiNodedotjs, color: '#673AB7' },
        ],
      },
      {
        group: 'AI Frameworks & Tools',
        icon: '🤖',
        items: [
          { name: 'Jupyter Notebook', icon: SiPython, color: '#F37626' },
        ],
      },
      {
        group: 'DevOps & Tools',
        icon: '⚙️',
        items: [
          { name: 'Docker', icon: SiDocker, color: '#2496ED' },
          { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
          { name: 'Git', icon: SiGit, color: '#F05032' },
          { name: 'GitHub', icon: SiGithub, color: '#181717' },
          { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
          { name: 'Visual Studio', icon: SiVisualstudio, color: '#5C2D91' },
          { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
          { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        ],
      },
      {
        group: 'Power Platform',
        icon: '🧩',
        items: [
          { name: 'Power Apps', icon: SiPowerapps, color: '#742774' },
          { name: 'Power Automate', icon: SiPowerautomate, color: '#0066FF' },
          { name: 'SharePoint', icon: SiMicrosoftsharepoint, color: '#0078D4' },
          { name: 'Copilot', icon: SiGithubcopilot, color: '#6E40C9' },
        ],
      },
    ],
    []
  );

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] dark:from-[#020c1b] dark:via-[#0a192f] dark:to-[#020c1b]">
        {/* Top Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/95 dark:bg-[#020c1b]/95 backdrop-blur-sm border-b border-cyan-900/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-lg font-bold text-white">
              Sahan Punchihewa
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 hover:border-cyan-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden px-6 pb-4">
              <div className="flex flex-col gap-3 rounded-xl border border-cyan-900/40 bg-[#0a1628] p-4">
                <a
                  href="#home"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-sm text-gray-300">Working remotely from Sri Lanka</span>
              </div> */}

              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                  {profile.name.split(' ')[0]} {profile.name.split(' ')[1]}
                </h1>
              </div>

              <div>
                <p className="text-xl md:text-2xl font-medium text-cyan-400 mb-4">
                  {profile.title}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  {profile.summary}
                </p>
              </div>

              <div>
                <a
                  href={profile.resume.href}
                  download={profile.resume.downloadName}
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-white transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download resume
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded hover:bg-[#006396] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  LinkedIn
                </a>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </a>
                <a href={profile.links.email} className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Email
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-2 shadow-2xl animate-float">
                  <img
                    src={deved}
                    className="w-full h-full rounded-full object-cover border-4 border-[#0a192f] dark:border-[#020c1b]"
                    alt={profile.name}
                  />
                </div>
                {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="font-medium">Available to connect</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 text-center">Technical Skills</h2>
            <p className="text-gray-400 text-center mb-12">Technologies and tools I work with</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#0f1c2e] to-[#1a2332] backdrop-blur-sm rounded-2xl border border-cyan-900/40 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{group.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{group.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={i}
                          className="group flex items-center gap-2 bg-[#0a1628] px-3 py-2 rounded-lg border border-cyan-900/40 hover:border-cyan-500/60 hover:bg-[#0f1e33] transition-all cursor-default shadow-sm"
                        >
                          <IconComponent
                            className="text-lg transition-all group-hover:scale-110"
                            style={{ color: item.color }}
                          />
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8 hover:bg-white/10 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                      <span className="text-cyan-400 font-medium text-lg">{exp.company}</span>
                    </div>
                    <span className="text-gray-400 mt-2 lg:mt-0 lg:text-right">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={profile.links.email} className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-xl">
                Send Email
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl">
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-cyan-900/20">
          <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} {profile.name}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
