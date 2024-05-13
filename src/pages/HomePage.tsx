import AppFooter from '../components/AppFooter';
import MainContent from '../components/home-page/MainContent';
import PopularMoviesSection from '../components/home-page/sections/PopularMoviesSection';
import TopRatedMoviesSection from '../components/home-page/sections/TopRatedMoviesSection';
import UpcomingMoviesSection from '../components/home-page/sections/UpcomingMoviesSection';
import usePopularMovies from '../hooks/usePopularMovies';
import HomePageProviders from '../providers/HomePageProviders';

export default function HomePage() {
  const { popularMovies } = usePopularMovies(1);
  console.log('🚀 ~ HomePage ~ popularMovies:', popularMovies);

  return (
    <HomePageProviders>
      <div className="h-screen bg-light-950">
        <MainContent />
        <PopularMoviesSection />
        <TopRatedMoviesSection />
        <UpcomingMoviesSection />
        <AppFooter />
      </div>
    </HomePageProviders>
  );
}
