"use client";
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'

export function Resources({contact}) {
  return (
    <section
      id="contact"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="5" id="resources-title">
          Contact Me
        </SectionHeading>
        <div>
          <h1 className='mt-8 font-display text-4xl font-bold tracking-tight text-slate-9000'>{contact.title}</h1>
          <p className='mt-4 text-3xl text-slate-600'>{contact.description}</p>
          <div className="mt-8 flex gap-4">
                      <Button href={`mailto:${contact.btn1_url}`} color="blue">
                       {contact.btn1_text}
                      </Button>
                      <Button href={`tel: ${contact.btn2_text}`} variant="outline" color="blue">
                      {contact.btn2_text}
                      </Button>
                    </div>
        </div>

     
      </Container>
    </section>
  )
}
