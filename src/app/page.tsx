import { EtapaIdiomasSection } from "./components/EtapaIdiomasSection";
import { HeaderSection } from "./components/HeaderSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ReasonSection } from "./components/ReasonsSection/ReasonsSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <ReasonSection />
        <EtapaIdiomasSection />
      </main>
    </>
  );
}
