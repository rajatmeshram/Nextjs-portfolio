'use client';

import React, { useState, useEffect } from 'react';

export default function QuoteSlider({qdata}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % qdata.length);
        setIsVisible(true);
      }, 300);
    }, 4000); // Change quote every 4 seconds

    return () => clearInterval(interval);
  }, [qdata.length]);

  const currentTestimonial = qdata[currentIndex];

  return (
    <div className="absolute w-full lg:-top-22">
      <figure 
        className={`relative mx-auto max-w-md text-center lg:mx-0 lg:text-left transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <blockquote className="mt-2">
          <p className="font-display text-xl font-medium text-slate-900">
            "{currentTestimonial.quotes}"
          </p>
        </blockquote>
        <figcaption className="mt-2 text-sm text-slate-500">
          <strong className="font-semibold text-blue-600 before:content-['—_']">
            {currentTestimonial.author}
          </strong>
          , {currentTestimonial.designation}
        </figcaption>
      </figure>
      
      {/* Dots indicator */}
      <div className="mt-4 flex justify-center lg:justify-start space-x-2">
        {qdata.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsVisible(true);
              }, 300);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-blue-600 w-6' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}