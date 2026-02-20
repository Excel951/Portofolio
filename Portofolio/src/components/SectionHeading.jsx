import React from "react";

export default function SectionHeading({ title }) {
    return (
        <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
    );
}