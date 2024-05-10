import { NavLink } from 'react-router-dom';

export default function CardHeroInfo() {
  return (
    <article className="font-groteskspace flex flex-col gap-12 border border-golden-300 md:w-[478px]">
      <div className="flex flex-col justify-center gap-7">
        <h1 className="font-rowdies text-[40px] font-bold text-golden-300 md:text-[48px]">Muvifav</h1>
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
}
