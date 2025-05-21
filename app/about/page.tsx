import BoardOfTrustees from '@/components/about/BoardOfTrustees';
import CoreValues from '@/components/about/CoreValues';
import MissionVision from '@/components/about/MissionVision';
import ThematicAccordion from '@/components/about/ThematicAccordion';
import Hero from '@/components/shared/hero';
import img from '@/public/about-hero.jpg';
export const revalidate = 60;
function About() {
  return (
    <main>
      <Hero
        title="who we are"
        description="Through this charity foundation, the Otumfuo Osei Tutu II
        Foundation, he pushes the bounds to promote this goal of
        change and transformation not only in Asanteman but the whole
        of Ghana."
        imageSrc={img}
        primaryButtonText="Get In Touch"
        primaryButtonUrl={'/contact'}
      />
      <div className="px-8 lg:px-0 max-w-7xl mx-auto mt-16">
        <CoreValues />
        <MissionVision />
        <ThematicAccordion />
        <BoardOfTrustees />
      </div>
    </main>
  );
}

export default About;
