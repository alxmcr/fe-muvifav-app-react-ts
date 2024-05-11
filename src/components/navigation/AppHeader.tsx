import { NavLinkData } from '../../@types/appTypes';
import LogoMuvifav from '../@logos/48x48/LogoMuvifav';
import AppNavigation from './AppNavigation';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppHeader({ navLinks = [] }: Props) {
  return (
    <header className="border border-golden-300">
      <LogoMuvifav />
      <AppNavigation navLinks={navLinks} />
    </header>
  );
}
