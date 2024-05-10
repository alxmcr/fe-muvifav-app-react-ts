import BaseSection from '../../BaseSection';

export default function HeroSection() {
  return (
    <BaseSection id="hero" isWidthFull>
      <div className="flex h-[500px] flex-col items-center justify-center gap-4 bg-[url('/assets/backgrounds/bg-hero.jpg')] bg-cover bg-center bg-no-repeat px-2 py-3">
        <h1>Hola!</h1>
      </div>
    </BaseSection>
  );
}
