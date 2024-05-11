import { NavLinkData } from '../../@types/appTypes';
import AppNavigation from './AppNavigation';

type Props = {
  navLinks: NavLinkData[];
};

export default function AppHeader({ navLinks = [] }: Props) {
  return (
    <header>
      <AppNavigation navLinks={navLinks} />
    </header>
  );
}
