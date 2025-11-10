import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction({about}) {
  return (
    <section
      id="aboutme"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
         {about?.title}
        </p>
        <p className="mt-4">
          {about?.descriptiom}
        </p>
        <p className="mt-4">
         <b>{about?.title2}</b>
        </p>
        
        <ul role="list" className="mt-8 space-y-3">
          {about?.skills.map((feature) => (
            <li key={feature.id} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature.skill_name}</span>
            </li>
          ))}
        </ul>
        
      </Container>
    </section>
  )
}
