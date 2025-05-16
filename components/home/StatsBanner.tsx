'use client';
import React from 'react';
import CountUp from 'react-countup';
import { statsData } from '@/lib/data';

// Custom easing function for smooth animation
const easeOutExpo = (t: number, b: number, c: number, d: number) => {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
};

// Simple animated number component
const AnimatedNumber = ({ to }: { to: number }) => {
  return (
    <CountUp
      end={to}
      duration={2.5}
      easingFn={easeOutExpo}
      className="font-bold"
    />
  );
};

function StatsBanner() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="bg-primary rounded-xl shadow-md overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px p-4 md:p-6 bg-white/10">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center p-4 text-center text-white">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <AnimatedNumber to={stat.number} />
                <span>+</span>
              </p>
              <p className="text-sm mt-2 text-white/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsBanner;
