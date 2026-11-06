import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
} from 'lucide-react';
import Instagram from './InstagramIcon';
import { BRAND_INFO } from '../data/bakeryData';
import './ConnectSection.css';

export default function ConnectSection({ prefilledItem }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: 'Birthday / Milestone',
    fulfillment: 'Pick-up in Aurora',
    selectedItem: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledItem) {
      setFormData((prev) => ({
        ...prev,
        selectedItem: prefilledItem,
      }));
      setSubmitted(false);
    }
  }, [prefilledItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="connect" className="connect-section">
      <div className="container">
        <div className="connect-card">
          <div className="connect-card__info">
            <span className="section-eyebrow">
              <span>Let&apos;s Create Something Awesome</span>
            </span>
            <h2 className="connect-title">We Would Love to Be Part of Your Celebration!</h2>

            <div className="connect-shoe-showcase">
              <img
                src="/aib-shoe.jpg"
                alt="Custom sculpted sneaker cake by Awesome In A Box"
                className="connect-shoe-showcase__img connect-shoe-showcase__img--base"
              />
              <img
                src="/aib-shoe2.jpg"
                onError={(e) => {
                  if (!e.currentTarget.src.endsWith('/aib-shoe2.png')) {
                    e.currentTarget.src = '/aib-shoe2.png';
                  }
                }}
                alt="Custom sculpted sneaker cake alternate view"
                className="connect-shoe-showcase__img connect-shoe-showcase__img--hover"
              />
            </div>
          </div>

          <div className="connect-card__form-wrap">
            {submitted ? (
              <div className="connect-success">
                <div className="connect-success__icon">
                  <CheckCircle2 size={36} />
                </div>
                <h3>Success! Your Inquiry Has Been Prepared</h3>
                <p>
                  Thank you, <strong>{formData.name || 'Friend'}</strong>! We&apos;ve captured your
                  request for{' '}
                  <strong>{formData.selectedItem || 'your custom dessert order'}</strong>.
                </p>
                <div className="connect-success__summary">
                  <p>
                    <strong>Event:</strong> {formData.eventType} ({formData.eventDate || 'Date TBD'})
                  </p>
                  <p>
                    <strong>Fulfillment:</strong> {formData.fulfillment}
                  </p>
                  {formData.details && (
                    <p>
                      <strong>Design Notes:</strong> {formData.details}
                    </p>
                  )}
                </div>
                <div className="connect-success__actions">
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Instagram size={17} />
                    <span>Message @awesomeinabox on Instagram</span>
                  </a>
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Edit Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="connect-form" onSubmit={handleSubmit}>
                <div className="form-row-two">
                  <label className="form-field">
                    <span>Your Name *</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="form-field">
                    <span>Email Address *</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-row-two">
                  <label className="form-field">
                    <span>Celebration Type</span>
                    <select name="eventType" value={formData.eventType} onChange={handleChange}>
                      <option>Birthday / Milestone</option>
                      <option>Wedding / Bridal Shower</option>
                      <option>Baby Shower / 100th Day</option>
                      <option>Corporate / Event Platter</option>
                      <option>Just Because!</option>
                    </select>
                  </label>
                  <label className="form-field">
                    <span>Delivery/Pick Up Date *</span>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="form-row-two">
                  <label className="form-field">
                    <span>Pick-Up or Delivery</span>
                    <select name="fulfillment" value={formData.fulfillment} onChange={handleChange}>
                      <option>Pick-up in Aurora</option>
                      <option>Delivery in York Region</option>
                      <option>Delivery in GTA</option>
                    </select>
                  </label>
                </div>

                <label className="form-field">
                  <span>Message *</span>
                  <textarea
                    name="details"
                    rows={4}
                    required
                    placeholder="Tell us more about what you're looking for - flavours, customizations, etc."
                    value={formData.details}
                    onChange={handleChange}
                  />
                </label>

                <button type="submit" className="btn-primary btn-primary--full">
                  <Send size={17} />
                  <span>Submit</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} Awesome In A Box. Founded by Sophia in 2011.
          </p>
        </div>
      </footer>
    </section>
  );
}
