'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Hero from '../shared/home-hero';
import Autoplay from 'embla-carousel-autoplay';
import { client } from '@/lib/sanity';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface HeroStory {
  _id: string;
  title: string;
  smallDescription: string;
  titleImage: any; // Allow for Sanity image reference format
  currentSlug: string;
}

function HeroCarousel() {
  const [heroStories, setHeroStories] = useState<HeroStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroStories = async () => {
      const query = `
        *[_type == 'stories' && showInHeroCarousel == true] | order(carouselPriority asc) {
          _id,
          title,
          smallDescription,
          titleImage,
          "currentSlug": slug.current
        }
      `;

      try {
        const data = await client.fetch(query);
        console.log('Data', data);
        setHeroStories(data);
      } catch (error) {
        console.error('Error fetching hero stories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroStories();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] lg:h-[80vh] bg-gray-200 animate-pulse"></div>
    );
  }

  if (heroStories.length === 0) {
    return null;
  }

  return (
    <div className="w-full relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {heroStories.map((story) => (
            <CarouselItem key={story._id}>
              <div className="w-full">
                <Hero
                  title={story.title}
                  description={story.smallDescription}
                  imageSrc={story.titleImage}
                  primaryButtonUrl={`/stories/${story.currentSlug}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-y-0 left-12 flex items-center">
          <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 opacity-70 hover:opacity-100" />
        </div>
        <div className="absolute inset-y-0 right-12 flex items-center">
          <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 opacity-70 hover:opacity-100" />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
