import MainContent from '../components/home-page/MainContent';
import PopularMoviesSection from '../components/home-page/sections/PopularMoviesSection';
import TopRatedMoviesSection from '../components/home-page/sections/TopRatedMoviesSection';
import usePopularMovies from '../hooks/usePopularMovies';

export default function HomePage() {
  const { popularMovies } = usePopularMovies(1);
  console.log('🚀 ~ HomePage ~ popularMovies:', popularMovies);

  return (
    <div>
      <MainContent />
      <PopularMoviesSection />
      <TopRatedMoviesSection />
    </div>
  );
}
