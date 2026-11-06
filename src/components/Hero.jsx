import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const HERO_PHOTOS = [
  {
    id: 'hero-1',
    category: 'Custom Sculpted & Celebration Cakes',
    title: 'Handcrafted 3D & Theme Cakes',
    caption: 'Every detail sculpted and hand-finished to match your celebration',
    image: '/aib-hero1.avif',
  },
  {
    id: 'hero-2',
    category: 'Bespoke Wedding & Milestone Cakes',
    title: 'Tiered Wedding Cakes',
    caption: 'Made for your special day.',
    image: '/aib-hero2.avif',
  },
  {
    id: 'hero-3',
    category: 'Asian-Fusion Patisserie',
    title: 'French Macaron Boxes',
    caption: 'Featuring unique flavours like Thai Milk Tea, White Rabbit, Vietnamese Coffee, and more.',
    image: '/aib-hero3.avif',
  },
  {
    id: 'hero-4',
    category: 'Bespoke Event Favours',
    title: 'Classic and Custom Cookies',
    caption: 'Intricately designed or go with the classics.',
    image: '/aib-hero4.avif',
  },
  {
    id: 'hero-6',
    category: 'Party-Ready Dozens',
    title: 'Artisanal Buttercream Cupcakes',
    caption: 'Perfect for both formal and casual events.',
    image: '/aib-hero6.avif',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_PHOTOS.length) % HERO_PHOTOS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_PHOTOS.length);
  };

  const activePhoto = HERO_PHOTOS[activeIndex];

  return (
    <section
      id="home"
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-Width Background Photo Carousel */}
      <div className="hero-carousel">
        <div className="hero-carousel__viewport">
          {HERO_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              className={`hero-carousel__slide ${
                index === activeIndex ? 'hero-carousel__slide--active' : ''
              }`}
              aria-hidden={index !== activeIndex}
            >
              <img src={photo.image} alt={photo.title} className="hero-carousel__img" />
            </div>
          ))}

          {/* Left-Side Fade to Background */}
          <div className="hero-carousel__left-fade" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-ambient hero-ambient--one" aria-hidden="true" />
      <div className="hero-ambient hero-ambient--two" aria-hidden="true" />

      {/* Foreground Content: Left Logo & Text in front of the faded carousel + Right Controls */}
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-logo-wrap">
            <img
              src="/aib-logo.png"
              alt="Awesome In A Box"
              className="hero-logo-img"
            />
          </div>

          <span className="section-eyebrow">
            <span>Aurora &amp; THE GTA • Est. 2011</span>
          </span>

          <p className="hero-lead">
            Bespoke celebration cakes, wedding tiers, gourmet cupcakes, and Asian-fusion macarons
            handcrafted from scratch by Sophia. Featured on <em>CTV&apos;s Cross Country Cake Off</em>{' '}
            and <em>Style Me Pretty</em>.
          </p>
        </div>

        {/* Right Side Overlay Controls & Active Slide Caption */}
        <div className="hero-carousel__controls-area">
          <div className="hero-carousel__nav-arrows">
            <button
              type="button"
              className="hero-carousel__arrow hero-carousel__arrow--prev"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="hero-carousel__arrow hero-carousel__arrow--next"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="hero-carousel__bottom-bar">
            <div className="hero-carousel__caption">
              <div>
                <span className="hero-carousel__eyebrow">{activePhoto.category}</span>
                <h2 className="hero-carousel__title">{activePhoto.title}</h2>
                <p className="hero-carousel__subtitle">{activePhoto.caption}</p>
              </div>
            </div>

            <div className="hero-carousel__dots" role="tablist" aria-label="Choose featured photo">
              {HERO_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Show ${photo.title}`}
                  className={`hero-carousel__dot ${
                    idx === activeIndex ? 'hero-carousel__dot--active' : ''
                  }`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
