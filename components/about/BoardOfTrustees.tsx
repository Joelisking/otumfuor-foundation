import React from 'react';
import SectionHeading from '../shared/heading';
import BoardCard from './BoardCard';
import { IBoard } from '@/lib/types';
import { client, urlFor } from '@/lib/sanity';

async function getData() {
  const query = `
    *[_type == 'board'] | order(priority asc) {
      name,
      role,
      image,
      priority
    }`;

  const data = await client.fetch(query);
  return data;
}

async function BoardOfTrustees() {
  const data: IBoard[] = await getData();
  return (
    <section className="my-16 md:my-24 lg:my-36">
      <SectionHeading title="board of trustees" />
      <p className="text-base lg:text-xl mt-3 lg:mt-6">
        The selfless efforts and commitment of these people make the
        realisation of the dreams of the foundation possible
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {data.map((b) => (
          <BoardCard
            key={b.name}
            image={urlFor(b.image).url()}
            name={b.name}
            role={b.role}
          />
        ))}
      </div>
    </section>
  );
}

export default BoardOfTrustees;
