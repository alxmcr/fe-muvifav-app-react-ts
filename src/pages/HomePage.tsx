import Icon44x44ArrowLeft from '../components/@icons/44x44/Icon44x44ArrowLeft';
import Icon44x44ArrowRight from '../components/@icons/44x44/Icon44x44ArrowRight';
import LogoMuvifav from '../components/@logos/48x48/LogoMuvifav';
import BaseSection from '../components/BaseSection';
import HeroSection from '../components/home-page/sections/HeroSection';
import AppHeader from '../components/navigation/AppHeader';
import useMovie from '../hooks/useMovie';
import { MOCK_NAV_LINKS } from '../mocks/mock-nav-links';

export default function HomePage() {
  const idMovie = 748783;
  const movie = useMovie(idMovie);
  console.log('🚀 ~ HomePage ~ movie:', movie);

  return (
    <main>
      <AppHeader navLinks={MOCK_NAV_LINKS} />
      <HeroSection />
      <BaseSection>
        <h1>Holas!</h1>
        <p>
          <LogoMuvifav />
          <Icon44x44ArrowLeft />
          <Icon44x44ArrowRight />
        </p>
      </BaseSection>
    </main>
  );
}
