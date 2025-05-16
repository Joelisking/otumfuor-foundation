'use client';
import React from 'react';
import { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
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
  primaryButtonText = 'Donate Now',
  secondaryButtonText = 'Get In Touch',
  primaryButtonUrl = '/donate',
  secondaryButtonUrl = '/contact',
}: HeroProps) {
  const HeroContent = () => {
    const router = useRouter();
    return (
      <div className="space-y-4 md:space-y-6 w-full md:w-2/3 text-white z-10">
        <h1 className="capitalize text-2xl md:text-3xl lg:text-4xl font-bold line-clamp-2">
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
            <Button
              onClick={() => router.push(secondaryButtonUrl)}
              className="capitalize bg-white text-primary hover:bg-gray-100">
              {secondaryButtonText}
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className="flex items-center h-96 md:h-80 lg:h-96 xl:h-112 w-full relative mt-10 lg:mt-20 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="w-full h-full flex items-center px-6 md:px-12">
        <HeroContent />
      </div>
    </div>
  );
}

export default Hero;
