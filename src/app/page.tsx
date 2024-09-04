import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedWebinars from "@/components/FeaturedWebinars";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/2">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MovingCards />
      <FeaturedWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
