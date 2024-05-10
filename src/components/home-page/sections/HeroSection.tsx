import BaseSection from '../../BaseSection';

export default function HeroSection() {
  return (
    <BaseSection id="hero" isWidthFull>
      <div className="flex h-full flex-col items-center justify-center gap-4 bg-[url('/assets/backgrounds/bg-hero.png')] bg-auto bg-center bg-no-repeat px-2 py-3 md:h-[500px]">
        <h1>Hola!</h1>
      </div>
    </BaseSection>
  );
}
