import React from 'react';
import SectionHeading from '../shared/heading';
import { Card, CardContent, CardHeader } from '../ui/card';

import { contactDetails } from '@/lib/data';

function GetInTouch() {
  const renderDescription = (description: string) => {
    // Split the description by newlines and map each line
    return description.split('\n').map((line, index) => {
      // Check if the line contains an email address
      if (line.includes('@')) {
        // Split by spaces to handle multiple emails
        return line.split(' ').map((part, partIndex) => {
          if (part.includes('@')) {
            return (
              <React.Fragment key={`${index}-${partIndex}`}>
                <a
                  href={`mailto:${part.trim()}`}
                  className="text-primary hover:underline">
                  {part.trim()}
                </a>
                {partIndex < line.split(' ').length - 1 ? ' ' : ''}
              </React.Fragment>
            );
          }
          return (
            part + (partIndex < line.split(' ').length - 1 ? ' ' : '')
          );
        });
      }
      return line;
    });
  };

  return (
    <section className="my-12 md:my-24 lg:my-36">
      <SectionHeading title="get in touch" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {contactDetails.map((detail) => (
          <Card
            key={detail.number}
            className="bg-neutral-50 rounded-3xl flex flex-col pb-8 md:pb-10 lg:pb-14">
            <CardHeader className="h-10 lg:h-14 flex items-center">
              <div className="bg-primary py-2 px-4 rounded-lg">
                <span className="text-xl md:text-2xl text-white">
                  {detail.number}
                </span>
              </div>
            </CardHeader>
            <CardContent className="text-foreground flex-1">
              <span className="capitalize text-lg md:text-xl lg:text-2xl font-bold block">
                {detail.title}
              </span>
              <p className="mt-4 md:mt-6 text-base lg:text-xl whitespace-pre-line">
                {renderDescription(detail.description)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default GetInTouch;
