import { NavLink } from 'react-router-dom';
import BaseSection from '../../BaseSection';

const CardHeroInfo = () => {
  return (
    <article className="flex flex-col gap-12 md:w-[478px]">
      <div className="flex flex-col justify-center gap-7">
        <h1 className="text-[40px] text-golden-300 md:text-[48px]">Muvifav</h1>
        <p className="text-[24px] text-light-50 md:text-[28px]">
          Find information about your favorite movies in our amazing, unique catalogue
        </p>
      </div>
      <NavLink
        to="/sign-up"
        className="flex h-[48px] w-full items-center justify-center rounded-lg bg-golden-300 text-[16px] md:w-[152px]"
      >
        Sign up
      </NavLink>
    </article>
  );
};

export default function HeroSection() {
  return (
    <BaseSection id="hero" isWidthFull>
      <div className="w-full bg-[url('/assets/backgrounds/bg-hero.png')] bg-center px-4 md:h-[580px]">
        <div className="mx-auto flex flex-col justify-center border border-pink-400 md:h-[580px] md:px-10 lg:w-[1028px]">
          <CardHeroInfo />
        </div>
      </div>
    </BaseSection>
  );
}
