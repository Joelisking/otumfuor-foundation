import Hero from '@/components/shared/hero';
import UpcomingEvents from '@/components/stories/UpcomingEvents';

import AllStories from '@/components/stories/AllStories';
import img from '@/public/stories2.jpg';
import RecentStories2 from '@/components/stories/RecentStories';

export const revalidate = 60;

function Stories() {
  return (
    <main>
      <Hero
        title="stories"
        description="Discover the inspiring stories and transformative projects undertaken by the Otumfuo Osei Tutu II
        Foundation. From education and healthcare to cultural preservation and community development, explore how
        we're making lasting impact across Ghana."
        imageSrc={img}
        primaryButtonText="Donate Now"
        primaryButtonUrl={'/donate'}
      />
      <div className="px-8 lg:px-0 max-w-7xl mx-auto mt-16 lg:mt-24">
        <UpcomingEvents />
        <RecentStories2 />
        <AllStories />
      </div>
    </main>
  );
}

export default Stories;
