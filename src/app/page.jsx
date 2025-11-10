
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { getDataBySlug } from '@/utils/page.fetch'

export default async function Home() {
const data = await getDataBySlug('/page');
const heroData = data?.right_content?.social_profiles;
const intro =  data?.left_Content;
const rightcont =  data?.right_content;
const about =  data?.about;
const quotes =  data?.Quote_slider;
const workHistory =  data?.history;
const portfolio =  data?.Portfolio;
const techno =  data?.Portfolio.technology_section;
const contact = data?.contact;

  return (
    <>
      <Hero data={heroData} intro={intro} rightcont={rightcont} quotes={quotes} />
      <Introduction about={about} />
      <NavBar />
      <TableOfContents work ={workHistory} />
      <Screencasts  port={portfolio} />
      <Pricing techno ={techno} />
      <Resources contact = {contact} />
      <Footer bottom = {contact}/>
    </>
  )
}
