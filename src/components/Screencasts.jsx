import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'


const videos = [
  {
    title: 'Php/Wordpress Projects',
    description:
      'Worked on multiple PHP and WordPress-based projects with a strong focus on custom theme development, ACF Pro integration, and feature customization.',
  },
  {
    title: 'Nodejs/Nextjs Projects',
    description:
      'I have built fast and scalable web applications using Next.js and Node.js, with Strapi as a headless CMS and REST/GraphQL API integration.',
  },
  {
    title: 'Shopify Projects',
    description:
      'I have worked on Shopify development projects, customizing themes and sections, and integrating Shopify APIs to meet business needs.',
  },
  {
    title: 'Wagtail/Other Projects',
    description:
      'I have explored and developed projects using Wagtail (Django CMS) and ProcessWire, working on custom content structures, dynamic pages, and backend logic.',
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts({ port }) {
  return (
    <section
      id="portfolio"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Portfolio
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          {port?.title}
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          {port?.description}
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {port?.portfoliocards.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl  shadow-lg"

              >
                <div className="flex overflow-hidden rounded-sm shadow-sm h-full w-full">
                  <Image src={`${process.env.IMG_URL
                    + video.image.url}`} width='400' height='400' alt="" unoptimized className='object-cover' />
                </div>

              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
              <a

                href={video.btn_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full px-4 py-1 text-blue-600 ring-1 ring-blue-600 ring-inset mt-2"
              >{video.btn_text}</a>
            </li>
          ))}
        </ol>


      </Container>
    </section>
  )
}
