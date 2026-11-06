import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';
import { CAKE_CATEGORIES, CUPCAKE_TIERS, COOKIES_AND_MACARONS } from '../data/bakeryData';
import './MenuSection.css';

const MENU_CARDS = [
  {
    id: 'cakes',
    title: 'Cakes',
    subtitle: 'Custom Celebration & Wedding Cakes',
    image: '/menu-option1.jpg',
  },
  {
    id: 'cupcakes',
    title: 'Cupcakes',
    subtitle: 'Regular & Minis by the Dozen',
    image: '/menu-option2.jpg',
  },
  {
    id: 'cookies',
    title: 'Cookies & Macarons',
    subtitle: 'By the Dozen',
    image: '/menu-option3.jpg',
  },
];

export default function MenuSection() {
  const [activeCard, setActiveCard] = useState(null);

  const renderBackContent = (id) => {
    if (id === 'cakes') {
      return (
        <div className="menu-flip-back__sections">
          {CAKE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="menu-flip-back__group">
              <h4>{cat.title}</h4>
              {cat.subtitle && <p className="menu-flip-back__group-sub">{cat.subtitle}</p>}
              <ul className="menu-flip-back__list">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong> - {item.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (id === 'cupcakes') {
      return (
        <div className="menu-flip-back__sections">
          {CUPCAKE_TIERS.map((tier) => (
            <div key={tier.tier} className="menu-flip-back__group">
              <h4>{tier.tier}</h4>
              <p className="menu-flip-back__pricing">{tier.pricing}</p>
              <ul className="menu-flip-back__list">
                {tier.flavors.map((flavor) => (
                  <li key={flavor.name}>
                    <strong>{flavor.name}</strong> - {flavor.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="menu-flip-back__sections">
        <div className="menu-flip-back__group">
          <h4>{COOKIES_AND_MACARONS.cookies.title}</h4>
          <p className="menu-flip-back__pricing">{COOKIES_AND_MACARONS.cookies.pricing}</p>
          <ul className="menu-flip-back__list">
            {COOKIES_AND_MACARONS.cookies.flavors.map((flavor) => (
              <li key={flavor}>{flavor}</li>
            ))}
          </ul>
          <div className="menu-flip-back__platter">
            <p>
              <strong>{COOKIES_AND_MACARONS.cookies.platter}</strong>
            </p>
            <p className="menu-flip-back__platter-note">
              {COOKIES_AND_MACARONS.cookies.platterNote}
            </p>
          </div>
        </div>

        <div className="menu-flip-back__group">
          <h4>{COOKIES_AND_MACARONS.macarons.title}</h4>
          <p className="menu-flip-back__pricing">{COOKIES_AND_MACARONS.macarons.pricing}</p>
          <ul className="menu-flip-back__list menu-flip-back__list--two-col">
            {COOKIES_AND_MACARONS.macarons.flavors.map((flavor) => (
              <li key={flavor}>{flavor}</li>
            ))}
          </ul>
        </div>

        <div className="menu-flip-back__group">
          <h4>{COOKIES_AND_MACARONS.customSugarCookies.title}</h4>
          <p className="menu-flip-back__pricing">
            {COOKIES_AND_MACARONS.customSugarCookies.pricing}
          </p>
          <div className="menu-flip-back__lines">
            {COOKIES_AND_MACARONS.customSugarCookies.lines.map((line) => (
              <p key={line} className="menu-flip-back__text">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Menu</h2>
        </div>

        <div
          className={`menu-flip-grid ${
            activeCard ? `menu-flip-grid--has-active menu-flip-grid--active-${activeCard}` : ''
          }`}
        >
          {MENU_CARDS.map((card) => {
            const isFlipped = activeCard === card.id;
            return (
              <div
                key={card.id}
                className={`menu-flip-card ${isFlipped ? 'menu-flip-card--flipped' : ''}`}
                onClick={() => setActiveCard((prev) => (prev === card.id ? null : card.id))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCard((prev) => (prev === card.id ? null : card.id));
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isFlipped}
                aria-label={card.title}
              >
                <div className="menu-flip-card__inner">
                  {/* FRONT FACE: Image + Title */}
                  <div className="menu-flip-card__front">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="menu-flip-card__img"
                    />
                    <div className="menu-flip-card__scrim" />
                    <div className="menu-flip-card__front-content">
                      <h3 className="menu-flip-card__title">{card.title}</h3>
                      <p className="menu-flip-card__subtitle">{card.subtitle}</p>
                      <span className="menu-flip-card__hint">
                        <RotateCw size={14} />
                        <span>Click to View Menu</span>
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE: Expanded Text Description & Flavours */}
                  <div className="menu-flip-card__back">
                    <div className="menu-flip-back__header">
                      <div>
                        <span className="menu-flip-back__eyebrow">Awesome In A Box Menu</span>
                        <h3 className="menu-flip-back__title">{card.title}</h3>
                      </div>
                    </div>

                    <div className="menu-flip-back__body">
                      {renderBackContent(card.id)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
