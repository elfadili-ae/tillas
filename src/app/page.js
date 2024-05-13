import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import VideoSection from "../components/VideoSection";
import GetToKnow from "../components/GetToKnow";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center">
      <Hero />
      <Marquee />
      <GetToKnow />
      <Expertise />
      <VideoSection />
      <Portfolio />
      <Contact />
    </main>
  );
}
