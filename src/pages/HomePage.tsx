import AppFooter from '../components/AppFooter';
import MainContent from '../components/home-page/MainContent';
import PopularMoviesSection from '../components/home-page/sections/PopularMoviesSection';
import TopRatedMoviesSection from '../components/home-page/sections/TopRatedMoviesSection';
import UpcomingMoviesSection from '../components/home-page/sections/UpcomingMoviesSection';
import HomePageProviders from '../providers/HomePageProviders';

export default function HomePage() {

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
