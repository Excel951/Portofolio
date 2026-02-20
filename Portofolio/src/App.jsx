import React from 'react';
import ProjectCard from './components/ProjectCard';
import { projects } from './data';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500 selection:text-white">

      {/* Hero Section dengan Gradient Text */}
      <header className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Latar Belakang Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

        <p className="text-blue-400 font-semibold tracking-wider mb-4">HI THERE, I'M</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
          Abigail Excelsis Deo
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10">
          Backend Engineer specializing in <span className="text-white font-semibold">Python, Laravel, & Golang</span>. Building scalable architectures and smart ecosystems.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            View My Work
          </a>
          <a href="mailto:abigailexcelsisdeo@gmail.com" className="bg-slate-800 border border-slate-700 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-700 transition-colors">
            Contact Me
          </a>
        </div>
      </header>

      {/* Projects Section (Menggunakan Component mapping) */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
        <div className="w-20 h-1 bg-blue-500 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              role={project.role}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 text-slate-400">
        <p>© 2026 Abigail Excelsis Deo. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;