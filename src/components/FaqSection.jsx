import React, { useState } from 'react';
import {
  ChevronDown,
  Clock,
  CreditCard,
  Van,
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/bakeryData';
import './FaqSection.css';

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about lead times, custom designs, Aurora pick-up, and
            York Region / GTA delivery.
          </p>
        </div>

        {/* Quick Policy Highlights */}
        <div className="policy-cards-row">
          <div className="policy-mini-card">
            <Van size={20} />
            <div>
              <h4>Aurora Pick-Up &amp; GTA Delivery</h4>
              <p>Pick up in Aurora, ON or request delivery across York Region &amp; the GTA.</p>
            </div>
          </div>
          <div className="policy-mini-card">
            <Clock size={20} />
            <div>
              <h4>2+ Weeks Lead Time</h4>
              <p>Book at least 2 weeks ahead to secure your date (rush orders subject to availability).</p>
            </div>
          </div>
          <div className="policy-mini-card">
            <CreditCard size={20} />
            <div>
              <h4>E-Transfer Booking</h4>
              <p>Orders under $200 paid in full; orders $200+ require a 50% deposit to lock in your date.</p>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={item.question}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-item__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} className="faq-item__chevron" />
                </button>
                {isOpen && (
                  <div className="faq-item__answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
