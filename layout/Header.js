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
    },
    {
      label: 'Our Day',
      target: '/our-day'
    },
    {
      label: 'Honeymoon',
      target: '/our-honeymoon'
    },
    {
      label: 'Peep the Pics',
      target: '/peep-the-pics'
    },
    {
      label: 'Registry',
      target: '/registry'
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