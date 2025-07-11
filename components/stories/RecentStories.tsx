import React from 'react';
import { client } from '@/lib/sanity';
import { INewsList } from '@/lib/types';
import StoryCard from '../shared/StoryCard';
import Heading from '../shared/heading';

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'stories' && recentStory == true] | order(date desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    secondaryImage,
    date
  }`;

  const data = await client.fetch(query);
  return data;
}

async function RecentStories() {
  const data: INewsList[] = await getData();

  if (data.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 lg:mt-24">
      <Heading title="Recent Stories" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6 md:gap-8">
        {data.map((story) => (
          <StoryCard
            key={story.currentSlug}
            id={story.currentSlug}
            title={story.title}
            description={story.smallDescription}
            imgUrl={story.titleImage}
            secondaryImgUrl={story.secondaryImage}
            date={story.date}
          />
        ))}
      </div>
    </section>
  );
}

export default RecentStories;
