import { NavLinkData } from '../@types/appTypes';

export const homeLink: NavLinkData = {
  id: 'nav-link-001',
  text: 'Muvifav',
  href: '/',
};

export const signUpLink: NavLinkData = {
  id: 'nav-link-002',
  text: 'Sign up',
  href: '/sign-up',
};

export const signInLink: NavLinkData = {
  id: 'nav-link-003',
  text: 'Sign in',
  href: '/sign-in',
};

export const MOCK_NAV_LINKS: NavLinkData[] = [signInLink];
