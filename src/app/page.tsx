import { Hero } from "@/components/sections/Hero";
import { OilTicker } from "@/components/sections/OilTicker";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Operations } from "@/components/sections/Operations";
import { Industries } from "@/components/sections/Industries";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <OilTicker />
      <About />
      <Stats />
      <Services />
      <Operations />
      <Industries />
      <WhyUs />
      <Contact />
    </div>
  );
}
