'use client';
import React from 'react';
import { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { urlFor } from '@/lib/sanity';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData | any; // Allow Sanity image reference
  imageAlt?: string;
  showButtons?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonUrl?: string;
}

function Hero({
  title,
  description,
  imageSrc,
  showButtons = true,
  primaryButtonText = 'Read More',
  primaryButtonUrl = '/donate',
}: HeroProps) {
  const HeroContent = () => {
    const router = useRouter();
    return (
      <div className="space-y-4 md:space-y-6 md:w-2/3 lg:w-4/5 text-white z-10 w-screen">
        <h1 className="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold line-clamp-2">
          {title}
        </h1>
        <p className="text-sm md:text-base lg:text-xl line-clamp-3 md:line-clamp-4">
          {description}
        </p>
        {showButtons && (
          <div className="flex flex-row gap-5">
            <Button
              onClick={() => router.push(primaryButtonUrl)}
              className="capitalize">
              {primaryButtonText}
            </Button>
          </div>
        )}
      </div>
    );
  };

  // Process image URL based on type
  const getImageUrl = () => {
    // Check if it's a Sanity image reference (has _type property)
    if (
      imageSrc &&
      typeof imageSrc === 'object' &&
      '_type' in imageSrc
    ) {
      return urlFor(imageSrc).url();
    }
    // It's already a URL string or StaticImageData
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  };

  return (
    <div
      className="flex items-center h-[50vh] lg:h-[80vh] w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${getImageUrl()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="max-w-7xl mx-auto h-full flex items-center">
        <HeroContent />
      </div>
    </div>
  );
}

export default Hero;
