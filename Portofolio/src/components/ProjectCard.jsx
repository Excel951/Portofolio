import React from "react";

export default function ProjectCard({ title, role, techStack, description, link, image }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300 flex flex-col h-full group overflow-hidden">
            
            <div className="h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                <img 
                src={image || "./images/pikachu.webp"} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1 mb-4">{role}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow transition-colors">
                {description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech, index) => (
                    <span key={index} className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-200 dark:border-slate-600 transition-colors">
                        {tech}
                    </span>
                ))}
                </div>

                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-center w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-2 rounded-lg transition-all">
                View Project
                </a>
            </div>
        </div>
    );
}