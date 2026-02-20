import React from "react";

export default function ProjectCard({ title, role, techStack, description, link }) {
    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300 flex flex-col h-full group">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-blue-400 font-medium mt-1 mb-4">{role}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech, index) => (
                    <span key={index} className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-600">
                        {tech}
                    </span>
                ))}
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-2 rounded-lg transition-all">
                View Project
            </a>
        </div>
    );
}