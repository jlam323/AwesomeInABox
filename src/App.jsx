import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstagramGrid from './components/InstagramGrid';
import StorySection from './components/StorySection';
import MenuSection from './components/MenuSection';
import FaqSection from './components/FaqSection';
import ConnectSection from './components/ConnectSection';

export default function App() {
  const [selectedOrderItem, setSelectedOrderItem] = useState('');

  const handleSelectOrderItem = (itemLabel) => {
    setSelectedOrderItem(itemLabel);
    const connectEl = document.getElementById('connect');
    if (connectEl) {
      connectEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <InstagramGrid onInquireFromPost={handleSelectOrderItem} />
        <StorySection />
        <MenuSection />
        <FaqSection />
        <ConnectSection prefilledItem={selectedOrderItem} />
      </main>
    </div>
  );
}
