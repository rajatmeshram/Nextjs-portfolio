'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Technology = ({ i, title, description, src, color, progress, range, targetScale, image, url }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6 md:px-8"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="
          relative flex flex-col lg:flex-row 
          h-auto lg:h-[500px] w-full lg:w-[1000px]
          rounded-[25px] p-6 sm:p-8 md:p-10 lg:p-[50px]
          transform-origin-top shadow-lg
        "
      >
        <h2 className="text-center lg:text-left text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold mb-4 lg:mb-0">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row h-full mt-4 lg:mt-[50px] gap-6 lg:gap-[50px]">
          {/* Description */}
          <div className="w-full lg:w-[40%] relative top-0 lg:top-[10%]">
            <p className="text-[15px] sm:text-[16px] leading-relaxed">
              <span className="first-letter:text-[24px] sm:first-letter:text-[28px] first-letter:font-['Title']">
                {description}
              </span>
            </p>

            {url && (
              <span className="flex items-center gap-[5px] mt-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] sm:text-[14px] underline cursor-pointer hover:text-blue-600 transition-colors"
                >
                  Learn more →
                </a>
              </span>
            )}
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-[60%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-full rounded-[20px] lg:rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL + image.url}`}
                width={960}
                height={635}
                alt={title}
                unoptimized
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technology;
