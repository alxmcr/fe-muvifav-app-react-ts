import BaseSection from '../components/BaseSection';
import HeroSection from '../components/home-page/sections/HeroSection';
import usePopularMovies from '../hooks/usePopularMovies';

export default function HomePage() {
  const results = usePopularMovies(1);
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
