'use client';
import { partnersData } from '@/lib/data';
import React from 'react';
import Image from 'next/image';
import Heading from '../shared/heading';

function Partners() {
  return (
    <section className="mt-20 ">
      <Heading title="Partners" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 space-x-8 lg:space-x-1">
        {partnersData.map((data) => (
          <div
            key={data.id}
            className="shrink-0 px-4 md:px-6 lg:px-1 flex justify-center items-center space-x-0 space-y-0">
            <Image
              src={data.image}
              alt={data.alt}
              width={150}
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
