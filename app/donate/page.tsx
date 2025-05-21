import PaymentBanner from '@/components/donate/PaymentBanner';
import img from '@/public/donate-hero.jpg';
import Hero from '@/components/shared/hero';
import React from 'react';
export const revalidate = 60;
function Donate() {
  return (
    <main>
      <Hero
        title="make a donation"
        description="Your acts of generosity make it possible to touch and transform the lives of many across the country. Every donation, no matter the size, contributes to our mission of creating lasting positive change in communities throughout Ghana. Together, we can build a brighter future through education, healthcare, and sustainable development initiatives."
        imageSrc={img}
        primaryButtonText="Learn More"
        primaryButtonUrl="/about"
      />
      <div className="px-8 lg:px-0 max-w-7xl mx-auto mt-16">
        <PaymentBanner />
      </div>
    </main>
  );
}

export default Donate;
