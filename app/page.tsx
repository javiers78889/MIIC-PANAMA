
import { CloudinaryVideoCarousel } from "@/components/Carrousel";
import FeatureCarousel from "@/components/FeatureCarousel";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SobreNosotros from "@/components/sobreNosotros";
import Timeline from "@/components/Timeline";



export default function Home() {
  return (
    <>
     
        <Hero />
        <Marquee />
        <Timeline />
        <CloudinaryVideoCarousel />
        <FeatureCarousel />
        <SobreNosotros />
    </>
  )
}

