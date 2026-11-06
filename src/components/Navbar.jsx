import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/bakeryData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu & Flavours', href: '#menu' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : ''}`}>
      <div className="container site-navbar__inner">
        <nav className="site-navbar__links" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-navbar__actions">
          <a href="#connect" className="btn-primary btn-primary--sm">
            <span>Contact</span>
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
            <div className="mobile-menu__footer">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Follow @awesomeinabox
              </a>
              <a href="#connect" className="btn-primary" onClick={handleNavClick}>
                <Sparkles size={16} />
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
