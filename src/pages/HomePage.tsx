import Icon44x44ArrowLeft from '../components/@icons/44x44/Icon44x44ArrowLeft';
import Icon44x44ArrowRight from '../components/@icons/44x44/Icon44x44ArrowRight';
import BaseSection from '../components/BaseSection';
import HeroSection from '../components/home-page/sections/HeroSection';
import useMovie from '../hooks/useMovie';

export default function HomePage() {
  const idMovie = 748783;
  const movie = useMovie(idMovie);
  console.log('🚀 ~ HomePage ~ movie:', movie);

  return (
    <main>
      <HeroSection />
      <BaseSection>
        <h1>Holas!</h1>
        <p>
          <Icon44x44ArrowLeft />
          <Icon44x44ArrowRight />
        </p>
      </BaseSection>
    </main>
  );
}
