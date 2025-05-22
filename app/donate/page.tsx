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
        description="We believe that, among its many benefits, giving has the power to liberate the soul of the giver"
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
