import Icon44x44ArrowLeft from '../components/@icons/44x44/Icon44x44ArrowLeft';
import Icon44x44ArrowRight from '../components/@icons/44x44/Icon44x44ArrowRight';
import LogoMuvifav from '../components/@logos/48x48/LogoMuvifav';
import BaseSection from '../components/BaseSection';
import MainContent from '../components/home-page/MainContent';
import usePopularMovies from '../hooks/usePopularMovies';

export default function HomePage() {
  const { popularMovies } = usePopularMovies(1);
  console.log('🚀 ~ HomePage ~ popularMovies:', popularMovies);

  return (
    <div>
      <MainContent />
      <BaseSection>
        <h1>Holas!</h1>
        <p>
          <LogoMuvifav />
          <Icon44x44ArrowLeft />
          <Icon44x44ArrowRight />
        </p>
      </BaseSection>
    </div>
  );
}
