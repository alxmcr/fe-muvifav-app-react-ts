import { NavLink } from 'react-router-dom';
import { NavLinkData } from '../../../@types/appTypes';

type Props = {
  navLink: NavLinkData;
};

export default function NavigationListItem({ navLink }: Props) {
  return (
    <li>
      <NavLink to={navLink.href}>{navLink.text}</NavLink>
    </li>
  );
}
