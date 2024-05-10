import BaseSection from '../components/BaseSection';
import HeroSection from '../components/home-page/sections/HeroSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BaseSection>
        <h1>Holas!</h1>
      </BaseSection>
    </main>
  );
}
