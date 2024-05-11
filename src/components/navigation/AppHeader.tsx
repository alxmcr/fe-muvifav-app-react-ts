import { NavLinkData } from '../../@types/appTypes';
import LogoMuvifav from '../@logos/48x48/LogoMuvifav';
import AppNavigation from './AppNavigation';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppHeader({ navLinks = [] }: Props) {
  return (
    <header className="flex justify-center border border-golden-300">
      <div className="border border-pink-400 lg:w-[1028px]">
        <LogoMuvifav />
        <AppNavigation navLinks={navLinks} />
      </div>
    </header>
  );
}
