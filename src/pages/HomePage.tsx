import Icon44x44ArrowLeft from '../components/@icons/44x44/Icon44x44ArrowLeft';
import Icon44x44ArrowRight from '../components/@icons/44x44/Icon44x44ArrowRight';
import LogoMuvifav from '../components/@logos/48x48/LogoMuvifav';
import BaseSection from '../components/BaseSection';
import MainContent from '../components/home-page/MainContent';
import useMovie from '../hooks/useMovie';

export default function HomePage() {
  const idMovie = 748783;
  const movie = useMovie(idMovie);
  console.log('🚀 ~ HomePage ~ movie:', movie);

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
