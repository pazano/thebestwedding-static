import Navigation from './components/Navigation';
import Link from 'next/link';

import './Header.scss';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <h1>Paul + Danielle</h1>
    </Link>
  </div>
)

const Header = () => {
  const fakeMenu = [
    {
      label: 'Our Story',
      target: '/how-we-met',
      key: 'menu-our-story'
    },
    {
      label: 'Our Day',
      target: '/our-day',
      key: 'menu-our-day'
    },
    {
      label: 'Honeymoon',
      target: '/our-honeymoon',
      key: 'menu-honeymoon'
    },
    {
      label: 'Peep the Pics',
      target: '/peep-the-pics',
      key: 'menu-pics'
    },
    {
      label: 'Registry',
      target: '/registry',
      key: 'menu-registry'
    }
  ];

  return(
    <div className="header">
      <Navigation
        menuItems={fakeMenu}
      />
      <Logo />
    </div>
  )
}

export default Header;