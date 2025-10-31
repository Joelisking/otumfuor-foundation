'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { urlFor } from '@/lib/sanity';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string | any;
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
  imageAlt = 'Hero image',
  showButtons = true,
  primaryButtonText = 'Read More',
  primaryButtonUrl = '/donate',
}: HeroProps) {
  const [imageLoading, setImageLoading] = useState(true);

  const HeroContent = () => {
    const router = useRouter();
    return (
      <div className="space-y-4 md:space-y-6 md:w-2/3 lg:w-4/5 text-white z-10 w-screen px-8 lg:px-0">
        <h1 className="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold line-clamp-2">
          {title}
        </h1>
        <p className="text-sm md:text-base lg:text-xl line-clamp-3 md:line-clamp-4">
          {description}
        </p>
        {showButtons && (
          <div className="flex flex-row gap-5">
            <Button
              size={'lg'}
              onClick={() => router.push(primaryButtonUrl)}
              className="capitalize">
              {primaryButtonText}
            </Button>
          </div>
        )}
      </div>
    );
  };

  // Get the appropriate image URL
  const getImageUrl = () => {
    if (
      imageSrc &&
      typeof imageSrc === 'object' &&
      '_type' in imageSrc
    ) {
      return urlFor(imageSrc).url();
    }
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  };

  return (
    <div className="flex items-center h-[50vh] lg:h-[80vh] w-full relative overflow-hidden">
      {/* Loading indicator */}
      {imageLoading && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Pulsating circle animation */}
              <div className="w-12 h-12 rounded-full border-4 border-primary opacity-60 animate-ping absolute"></div>
              <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-primary animate-spin"></div>
            </div>
          </div>
        </div>
      )}

      {/* Image as background */}
      <div className="absolute inset-0">
        <img
          src={getImageUrl()}
          alt={imageAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onLoad={() => setImageLoading(false)}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content */}
      <div className="max-w-7xl mx-auto h-full flex items-center">
        <HeroContent />
      </div>
    </div>
  );
}

export default Hero;
