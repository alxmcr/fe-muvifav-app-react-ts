import BaseSection from '../components/BaseSection';
import HeroSection from '../components/home-page/sections/HeroSection';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

export default function HomePage() {
  const results = useTopRatedMovies(1);
  console.log('🚀 ~ HomePage ~ results:', results);

  return (
    <main>
      <HeroSection />
      <BaseSection>
        <h1>Holas!</h1>
      </BaseSection>
    </main>
  );
}
