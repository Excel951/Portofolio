// src/App.jsx
import React from 'react';
import ThemeToggle from './components/ThemeToggle'; // <-- Import toggle-nya
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import CertificationCard from './components/CertificationCard';
import SectionHeading from './components/SectionHeading';
import { projects, experiences, educations, certifications, campusExperiences } from './data';

function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white transition-colors duration-300 selection:bg-blue-500 selection:text-white pb-20 relative">

      {/* Tombol Toggle diletakkan di sini agar melayang di pojok kanan atas */}
      <ThemeToggle />

      {/* Hero Section */}
      <header className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/20 blur-[120px] rounded-full -z-10 transition-colors duration-300"></div>

        {/* Foto Profil */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 mx-auto group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur group-hover:blur-md transition-all duration-300 opacity-70"></div>
          <img
            src="./images/fotodiri.webp"
            alt="Abigail Excelsis Deo"
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider mb-4 transition-colors duration-300">HI THERE, I'M</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6 transition-all duration-300">
          Abigail Excelsis Deo
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 transition-colors duration-300">
          Backend Engineer specializing in <span className="text-slate-900 dark:text-white font-semibold">Python, Laravel</span>.
        </p>

        {/* Tombol Aksi & Sosial Media */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="https://drive.google.com/file/d/1zSaOgZjkzfg3xpiKX_n7wkRHWqGWWZgN/view?usp=sharing" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
            View My Work
          </a>

          {/* Tombol Download CV */}
          <a href="./pdf/Abigail Excelsis Deo - Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-3 rounded-full font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download CV
          </a>
        </div>

        {/* Ikon Sosial Media Link */}
        <div className="flex gap-6 mt-8">
          <a href="https://github.com/Excel951" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
            <span className="sr-only">GitHub</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/abigail-excelsis-deo/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-32">

        {/* Work Experience Section */}
        <section id="experience">
          <SectionHeading title="Work Experience" />
          <div className="space-y-4 border-l-0 sm:border-l border-slate-700 ml-0 sm:ml-24">
            {experiences.map((exp) => (
              <TimelineItem key={exp.id} {...exp} />
            ))}
          </div>
        </section>

        {/* Campus Experience Section */}
        <section id="campus-experience">
          <SectionHeading title="Campus Experience" />
          <div className="space-y-4 border-l-0 sm:border-l border-slate-700 ml-0 sm:ml-24">
            {campusExperiences.map((campExp) => (
              <TimelineItem key={campExp.id} {...campExp} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <SectionHeading title="Education" />
          <div className="space-y-4 border-l-0 sm:border-l border-slate-700 ml-0 sm:ml-24">
            {educations.map((edu) => (
              <TimelineItem key={edu.id} {...edu} />
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <SectionHeading title="Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} {...cert} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeading title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;