import PaymentBanner from '@/components/donate/PaymentBanner';
import img from '@/public/donate-hero.jpg';
import Hero from '@/components/shared/hero';
import React from 'react';

function Donate() {
  return (
    <main className="px-8 lg:px-0 max-w-7xl mx-auto">
      <Hero
        title="make a donation"
        description="Your acts of generosity make it possible to touch and transform the lives of many across the country."
        imageSrc={img}
        showButtons={false}
      />
      <PaymentBanner />
    </main>
  );
}

export default Donate;
