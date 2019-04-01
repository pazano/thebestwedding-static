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
      target: '/',
    },
    {
      label: 'Our Day',
      target: '/our-day'
    },
    {
      label: 'When & Where',
      target: '/when-where'
    },
    {
      label: 'FAQs',
      target: '/faqs'
    },
    {
      label: 'Registry',
      target: '/'
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