import HeroCarousel from '@/components/home/HeroCarousel';
import Partners from '@/components/home/Partners';
import StatsBanner from '@/components/home/StatsBanner';
import TextBanner from '@/components/home/TextBanner';
import ThematicAreas from '@/components/home/ThematicAreas';
import RecentStories from '@/components/stories/RecentStories';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <div className="px-8 lg:px-0 max-w-7xl mx-auto">
        <StatsBanner />
        <ThematicAreas />
        <TextBanner />
        <RecentStories />
        <Partners />
      </div>
    </>
  );
}
