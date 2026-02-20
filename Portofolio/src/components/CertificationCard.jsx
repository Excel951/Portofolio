import React from "react";

export default function CertificationCard({ name, issuer, link }) {
    return (
        <div className="bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all flex items-start gap-4 group">
            <div className="w-12 h-12 rounded bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
            </div>
            <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base md:text-lg leading-snug mb-1 transition-colors">{name}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors">{issuer}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 inline-block mt-3 text-sm text-blue-500 hover:text-blue-400 transition-colors">View Certificate</a>
            </div>
        </div>
    );
}