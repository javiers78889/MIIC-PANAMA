import ContactForm from "@/components/ContactForm";
import FeatureCarousel from "@/components/FeatureCarousel";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NewsletterSubscribe from "@/components/NewsletterSuscribe";
import PortfolioGrid from "@/components/PortfolioGrid";
import Timeline from "@/components/Timeline";
import WearYourStory from "@/components/WearYourStory";


export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}
