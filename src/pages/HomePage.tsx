import BaseSection from '../components/BaseSection';
import HeroSection from '../components/home-page/sections/HeroSection';
import useMovie from '../hooks/useMovie';

export default function HomePage() {
  const idMovie = 748783;
  const movie = useMovie(idMovie);
  console.log("🚀 ~ HomePage ~ movie:", movie)

  return (
    <main>
      <HeroSection />
      <BaseSection>
        <h1>Holas!</h1>
      </BaseSection>
    </main>
  );
}
