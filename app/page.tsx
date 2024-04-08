import ExploreSpacesSection from "@/components/Home/ExploreSpacesSection";
import HeroSection from "@/components/Home/HeroSection";
import OurValuesSection from "@/components/Home/OurValuesSection";


export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <HeroSection />
      <OurValuesSection />
      <ExploreSpacesSection/>
    </section>
  );
}
