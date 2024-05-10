import BaseSection from '../../BaseSection';
import CardHeroInfo from '../cards/CardHeroInfo';

export default function HeroSection() {
  return (
    <BaseSection id="hero" isWidthFull>
      <div className="flex h-screen flex-col items-center bg-[url('/assets/backgrounds/bg-hero.png')] bg-center md:h-[580px]">
        <div className="flex h-screen flex-col items-start justify-center px-4 md:h-[580px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px]">
          <CardHeroInfo />
        </div>
      </div>
    </BaseSection>
  );
}
