import { NavLink } from 'react-router-dom';
import BaseSection from '../../BaseSection';

export default function HeroSection() {
  return (
    <BaseSection id="hero" isWidthFull>
      <div className="flex h-full items-center bg-[url('/assets/backgrounds/bg-hero.png')] bg-auto bg-center bg-no-repeat px-4 md:h-[580px]">
        <div className="flex flex-col justify-center gap-12 md:px-10 lg:w-[1028px]">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-[40px] text-golden-300 md:text-[48px]">Muvifav</h1>
            <p className="text-[24px] text-light-50 md:text-[28px]">
              Find information about your favorite movies in our amazing, unique catalogue
            </p>
          </div>
          <NavLink
            to="/register"
            className="flex h-[48px] w-full items-center justify-center rounded-lg bg-golden-300 text-[16px] md:w-[152px]"
          >
            Sign out
          </NavLink>
        </div>
      </div>
    </BaseSection>
  );
}
