'use client';
import Technology from './Technology';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
const projects = [
  {
    title: "PHP & Mysql Development",
    description: "I possess over 7+ years of experience in PHP development with a strong foundation in core PHP and advanced PHP concepts, including object-oriented programming (OOP). Additionally, I am proficient in popular PHP frameworks such as Laravel and ProcessWire. My expertise lies in crafting high-quality, maintainable code that adheres to best practices.",
    src: "https://support.stormerhost.com/wp-content/uploads/2024/09/WordPress-Icon.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF"
  },
  {
    title: "Javascript Development",
    description: "I have strong proficiency in JavaScript and jQuery, along with advanced experience in modern JavaScript frameworks such as React and Next.js. I also work with Node.js for backend development, API creation, and building scalable full-stack applications. I specialize in developing single-page applications (SPAs) using clean, reusable components and seamless API integrations to deliver dynamic and high-performing web solutions.",
    src: "https://gracethemes.com/wp-content/uploads/2025/09/nodeJs.png",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D"
  },
  {
    title: "Shopify Deployment",
    description: "I have strong expertise in Shopify development, specializing in custom theme creation and Shopify storefront customization using Liquid, JavaScript, HTML, and CSS. I build dynamic and high-converting eCommerce stores with reusable components and optimized layouts that enhance user experience and performance.",
    src: "https://blueerasoftech.com/wp-content/uploads/2025/07/tc_shopify_banner.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D"
  },
  {
    title: "Server Deployment",
    description: "I am proficient in server deployments, including AWS server management, instance creation tailored to project needs, integration of S3 and other services, and deploying diverse tech stack projects in the AWS environment.I also possess knowledge of other hosting servers and deployment using cPanel.I have a strong understanding of Git versioning, GitHub CI/CD pipelines, and maintaining code using GitHub Actions.",
    src: "https://chariotsolutions.com/wp-content/uploads/2022/01/deployment_with_proxy.png",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429"
  }
]
export function Pricing({techno}) {

   const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  
return (
    <div ref={container} id='technology'>
        <Container>
              <SectionHeading number="4" id="screencasts-title">
                Technology
              </SectionHeading>
              <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                {techno.title}
              </p>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
               {techno.description}
              </p>
            </Container>
      {techno.Technology_list.map((project, i) => {
        const targetScale = 1 - ((techno.Technology_list.length - i) * 0.05)
        return (
          <Technology
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}
