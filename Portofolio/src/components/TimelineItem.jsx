import React from "react";

export default function TimelineItem({ title, organization, duration, description }) {
    return (
        <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Garis Timeline & Titik (Dot) */}
            <div className="hidden sm:block absolute left-24 top-0 bottom-0 w-px bg-slate-700 group-hover:bg-blue-500 transition-colors duration-300"></div>
            <div className="absolute left-0 sm:left-[91px] top-8 w-4 h-4 rounded-full bg-slate-800 border-2 border-blue-500 z-10 group-hover:bg-blue-500 transition-colors duration-300"></div>

            {/* Konten */}
            <div className="flex flex-col sm:flex-row sm:items-baseline mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                <span className="text-blue-600 dark:text-blue-500 font-medium sm:ml-auto text-sm bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    {duration}
                </span>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-3 transition-colors">{organization}</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base transition-colors">
                {description}
            </p>
        </div>
    );
}