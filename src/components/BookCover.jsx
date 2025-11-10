import { Code2, Globe } from 'lucide-react';

export default function BookCover({data}) {
  return (
    <div className="relative w-full md:max-w-2xl bg-[#4a5568] flex flex-col items-start justify-center md:px-10 md:py-14 p-7 rounded-2xl">
      {/* Icons Container */}
      <div className="flex gap-6 md:mb-10 mb-7">
        {/* Code icon */}
        <div className="w-16 h-16 bg-[#90A4F4] rounded-sm flex items-center justify-center -rotate-12">
          <Code2 className="w-9 h-9 text-[#4a5568]" />
        </div>
        
        {/* Globe icon */}
        <div className="w-16 h-16 bg-[#C4B5FD] rounded-full flex items-center justify-center">
          <Globe className="w-9 h-9 text-[#4a5568]" />
        </div>
      </div>
      
      {/* Main Title */}
      <h1 className="text-white md:text-7xl text-4xl font-extrabold leading-[0.9] md:mb-10 mb-7 tracking-tight">
       {data?.title}
      </h1>
      
      {/* Subtitle */}
      <p className="text-gray-400 md:text-xl text-lg max-w-xl leading-relaxed font-normal">
       {data?.descriptiom}
      </p>
    </div>
  );
}