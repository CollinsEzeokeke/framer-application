import FeaturesSection from "@/components/Featuressection";
import PhysicsFooter from "@/components/FooterDrop";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <Hero />
    <FeaturesSection />
    <div className="mb-10"/>
    <PhysicsFooter />
    </>
  );
}
