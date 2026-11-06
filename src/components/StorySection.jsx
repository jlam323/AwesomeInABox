import React from 'react';
import { BRAND_INFO } from '../data/bakeryData';
import './StorySection.css';

export default function StorySection() {
  return (
    <section id="story" className="story-section">
      <div className="container story-grid">
        <div className="story-visual">
          <div className="story-image-collage">
            <img
              src="/profile.jpg"
              alt="Sophia, Founder of Awesome In A Box on CTV's Cross Country Cake Off"
              className="story-image-main"
            />
          </div>
        </div>

        <div className="story-content">
          <h2 className="section-title">Our Story</h2>

          {BRAND_INFO.story.map((paragraph, idx) => {
            const parts = paragraph.split(/(Style Me Pretty|Catch My Party|Cross Country Cake Off)/g);
            return (
              <p key={idx} className="story-paragraph">
                {parts.map((part, i) =>
                  part === 'Style Me Pretty' ||
                  part === 'Catch My Party' ||
                  part === 'Cross Country Cake Off' ? (
                    <em key={i}>{part}</em>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
