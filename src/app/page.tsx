import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

import Image from "next/image";

export default function Home() {
  return (
  
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <Testimonials/>
    <UpComingWebinars/>
    <Instructor/>
    <Footer/>

    </main>
   
  );
}
