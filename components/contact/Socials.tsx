import React from 'react';
import SectionHeading from '../shared/heading';
import { socials } from '@/lib/data';
import Link from 'next/link';

function Socials() {
  return (
    <section className="px-4 md:px-6 lg:px-8">
      <SectionHeading title="connect with us" />
      <p className="mt-2 mb-8 text-gray-600">
        Follow us on social media to stay updated with our latest
        initiatives and events
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socials.map((s) => (
          <Link
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col items-center hover:scale-105">
              <div className="bg-primary p-4 rounded-full mb-4 transition-colors duration-300">
                <img
                  src={s.img.src || s.img}
                  alt={`${s.name} Logo`}
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-lg font-medium">{s.name}</h3>
              {/* <p className="text-sm text-gray-500 mt-1">
                  @otumfuofdn
                </p> */}
              <div className="mt-4 inline-flex items-center text-primary font-medium">
                Follow us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Socials;
