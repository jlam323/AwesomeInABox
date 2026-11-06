import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const heroEl = document.getElementById('home');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setPastHero(rect.bottom <= 80);
      } else {
        setPastHero(window.scrollY > 500);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : ''}`}>
      <div className="container site-navbar__inner">
        <div className="site-navbar__left">
          <a
            href="#home"
            className={`site-navbar__logo ${pastHero ? 'site-navbar__logo--visible' : ''}`}
            aria-label="Awesome In A Box Home"
          >
            <img src="/aib-logo.png" alt="Awesome In A Box" />
          </a>

          <nav className="site-navbar__links" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="site-navbar__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="site-navbar__actions">
          <a href="#connect" className="btn-primary btn-primary--sm">
            <span>Contact Us</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu__inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu__link"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
