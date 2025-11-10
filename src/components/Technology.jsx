'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Technology = ({i, title, description, src, color, progress, range, targetScale,image,url}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 //console.log(process.env.IMG_URL+ image.url,'ttt')
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              {/* <img  src={`${process.env.IMG_URL+ image.url}`}
                alt="image" /> */}
              
              {/* <Image
               height={635} width={960} 
                src={`${process.env.IMG_URL+ image.url}`}
                alt="image" 
              /> */}
               <Image src={`${process.env.IMG_URL
                                  + image.url}`} width='960' height='635' alt="" unoptimized className='object-cover' />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Technology