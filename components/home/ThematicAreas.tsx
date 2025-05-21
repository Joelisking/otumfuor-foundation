'use client';

import React from 'react';
import { thematicData } from '@/lib/data';
import ThematicCard from '../shared/ThematicCard';
import Heading from '../shared/heading';
import { useRouter } from 'next/navigation';

// Map thematic areas to their corresponding tag slugs
const thematicToTagMap: { [key: string]: string } = {
  'Water & Sanitation': 'water-sanitation',
  Health: 'health',
  'Culture & Heritage': 'culture-heritage',
  Education: 'education',
  Entrepreneurship: 'entrepreneurship',
};

function ThematicAreas() {
  const router = useRouter();

  const handleCardClick = (title: string) => {
    const tagSlug = thematicToTagMap[title];
    if (tagSlug) {
      router.push(`/stories?tag=${tagSlug}`);
    }
  };

  return (
    <section className="mt-16 md:mt-24 lg:mt-36">
      <div>
        <Heading title="Thematic Areas" />
        <p className="mt-3">
          The foundation is working under five broad thematic areas,
          which are in line with the achievement of aspects of
          Sustainable Development Goals (SDGs), GPRS II and NEPAD
          goals respectively. These development agendas have the
          ultimate aim of empowering and building the capabilities of
          the people to sustain their livelihoods and also enhance
          their well-being.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
        {thematicData.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.title)}
            className="cursor-pointer">
            <ThematicCard
              id={String(card.id)}
              title={card.title}
              description={card.description}
              imgUrl={card.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThematicAreas;
