'use client';

import React, { useState, useEffect } from 'react';
import StoryCard from '../shared/StoryCard';
import { INewsList, ITag } from '@/lib/types';
import Heading from '../shared/heading';
import { useSearchParams } from 'next/navigation';

interface AllStoriesClientProps {
  tags: ITag[];
  stories: INewsList[];
}

export default function AllStoriesClient({
  tags,
  stories,
}: AllStoriesClientProps) {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get('tag');
  const [selectedTag, setSelectedTag] = useState<string | null>(
    initialTag
  );

  useEffect(() => {
    // Update selected tag when URL changes
    const tag = searchParams.get('tag');
    setSelectedTag(tag);
  }, [searchParams]);

  const filteredStories = selectedTag
    ? stories.filter(
        (story) =>
          story.tags &&
          story.tags.some((tag) => tag.slug === selectedTag)
      )
    : stories;

  return (
    <section className="my-16 md:my-24 lg:my-36">
      <Heading title="all stories" />
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 my-6">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedTag === null
                ? 'bg-primary text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}>
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag._id}
              onClick={() => setSelectedTag(tag.slug)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedTag === tag.slug
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}>
              {tag.name}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredStories.map((n) => (
          <StoryCard
            key={n.currentSlug}
            id={n.currentSlug}
            title={n.title}
            description={n.smallDescription}
            imgUrl={n.titleImage}
            date={n.date}
          />
        ))}
      </div>
    </section>
  );
}
