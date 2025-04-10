import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import RecentStories from '@/components/home/RecentStories';
import StatsBanner from '@/components/home/StatsBanner';
import TextBanner from '@/components/home/TextBanner';
import ThematicAreas from '@/components/home/ThematicAreas';

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsBanner />
      <ThematicAreas />
      <TextBanner />
      <RecentStories />
      <Partners />
    </div>
  );
}
