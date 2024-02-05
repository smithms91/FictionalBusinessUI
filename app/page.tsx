// import { ContactCTA } from '@/components/ContactCTA'
// import { Footer } from '@/components/Footer'
// import { FooterTwo } from '@/components/FooterTwo'
// import GridSection from '@/components/GridSection'
// import LogoSection from '@/components/LogoSection'
// import MeetTheTeam from '@/components/MeetTheTeam'
// import AboutParallax from '@/components/RoofingSite/AboutParallax'
// import ParallaxSection from '@/components/RoofingSite/ParallaxSection'
// import ProjectSection from '@/components/RoofingSite/ProjectSection'
// import QualitySection from '@/components/RoofingSite/QualitySection'
// import QuestionInfo from '@/components/RoofingSite/QuestionInfo'
// import RoofingAbout from '@/components/RoofingSite/RoofingAbout'
// import RoofingEstimate from '@/components/RoofingSite/RoofingEstimate'
// import RoofingFooter from '@/components/RoofingSite/RoofingFooter'
// import RoofingNav from '@/components/RoofingSite/RoofingNav'
import Content from '@/components/Content'
import CaseStudy from '@/components/GenericWebsite1/CaseStudy'
import Footer from '@/components/GenericWebsite1/Footer'
import GenericNav from '@/components/GenericWebsite1/GenericNav'
import LatestNews from '@/components/GenericWebsite1/LatestNews'
import MainHeader from '@/components/GenericWebsite1/MainHeader'
import NewsSection from '@/components/GenericWebsite1/NewsSection'
import Newsletter from '@/components/GenericWebsite1/Newsletter'
import RoofingEstimate from '@/components/RoofingSite/RoofingEstimate'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-end bg-white">
      <GenericNav />
      <MainHeader />
      <LatestNews />
      <NewsSection />
      <Newsletter />
      <Content />
      {/* <CaseStudy /> */}
      <Footer />
    </main>
  )
}


{/*<RoofingNav />
      <RoofingEstimate />
      <RoofingAbout />
      <AboutParallax />
      <QualitySection />
      <GridSection />
      <ParallaxSection />
      <ProjectSection />
      <QuestionInfo />
      <RoofingFooter />
      <LogoSection />
      <MeetTheTeam />
      <ContactCTA side="left" />
      <FooterTwo />
      <Footer /> */}