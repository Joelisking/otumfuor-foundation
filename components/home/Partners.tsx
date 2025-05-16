'use client';
import { partnersData } from '@/lib/data';
import React from 'react';
import Image from 'next/image';
import Heading from '../shared/heading';

function Partners() {
  return (
    <section className="my-16 md:my-24 lg:my-36">
      <Heading title="Partners" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {partnersData.map((data) => (
          <div
            key={data.id}
            className="shrink-0 px-4 md:px-6 lg:px-8 flex justify-center items-center">
            <Image
              src={data.image}
              alt={data.alt}
              width={120}
              height={48}
              className="opacity-90 hover:opacity-100 transition duration-200 w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
