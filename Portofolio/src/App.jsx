// src/App.jsx
import React from 'react';
import ThemeToggle from './components/ThemeToggle'; // <-- Import toggle-nya
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import CertificationCard from './components/CertificationCard';
import SectionHeading from './components/SectionHeading';
import { projects, experiences, educations, certifications } from './data';

function App() {
  return (
      <div className="min-h-screen font-sans bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white transition-colors duration-300 selection:bg-blue-500 selection:text-white pb-20 relative">      
      
      {/* Tombol Toggle diletakkan di sini agar melayang di pojok kanan atas */}
      <ThemeToggle />

      <header className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Glow efek di background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/20 blur-[120px] rounded-full -z-10 transition-colors duration-300"></div>
        
        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider mb-4 transition-colors duration-300">HI THERE, I'M</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6 transition-all duration-300">
          Abigail Excelsis Deo
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 transition-colors duration-300">
          Backend Engineer specializing in <span className="text-slate-900 dark:text-white font-semibold">Python, Laravel, & Golang</span>.
        </p>
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