'use client';
import * as React from 'react';
import Hero from '../shared/home-hero';
import { homeData } from '@/lib/data';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="w-full relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {homeData.map((home) => (
            <CarouselItem key={home.id}>
              <div className="w-full">
                <Hero
                  title={home.title}
                  description={home.description}
                  imageSrc={home.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-6 right-10 flex gap-2 z-20">
          <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 opacity-70 hover:opacity-100" />
          <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 opacity-70 hover:opacity-100" />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
