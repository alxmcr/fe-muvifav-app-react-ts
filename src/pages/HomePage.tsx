import BaseSection from '../components/BaseSection';
import HeroSection from '../components/home-page/sections/HeroSection';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

export default function HomePage() {
  const results = useUpcomingMovies(1);
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
