'use client';

import React, { useState } from 'react';
export function WorkHistory({workData}) {
  const [expandedIndex, setExpandedIndex] = useState(null);
 
  const workHistory = workData.work_history;

  
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-12 text-slate-900">Work Experience</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200"></div>
        
        {workHistory.map((job, index) => (
          <div key={index} className="relative mb-8 last:mb-0">
            {/* Timeline dot with pulse effect for current job */}
            <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 z-10">
              {index === 0 && (
                <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping"></div>
              )}
            </div>
            
            {/* Full width card */}
            <div className="ml-16 w-full">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Card Header - Always visible */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900">{job.designation}</h3>
                      <p className="text-blue-600 font-medium text-lg">{job.Company}</p>
                    </div>
                    <div className="text-right ml-4">
                      <span className="text-sm font-medium text-slate-600">{job.date}</span>
                      {index === 0 && (
                        <span className="block text-xs font-semibold text-green-600 mt-1 bg-green-100 px-2 py-1 rounded">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-500 mb-3">📍 {job.address}</p>
                  <p className="text-slate-700 mb-4">{job.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.comp_tech.map((techObj, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                        {techObj.tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>{expandedIndex === index ? 'Hide' : 'View'} Details</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {/* Expandable Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedIndex === index ? 'max-h-96' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pt-0 border-t border-slate-100">
                    <h4 className="font-medium text-slate-900 mb-3 mt-4">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-2">
                      {job.resposibility.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-700">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-sm leading-relaxed">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}