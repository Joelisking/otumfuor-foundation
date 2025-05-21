import GetInTouch from '@/components/contact/GetInTouch';
import Socials from '@/components/contact/Socials';
import Hero from '@/components/shared/hero';
import img from '@/public/contact-hero.jpg';
export const revalidate = 60;
function Contact() {
  return (
    <main>
      <Hero
        title="We are only a message away, contact us now"
        description="We are here to help you. Whether you have questions, feedback, or need assistance, our team is ready to assist you. Reach out to us today and let's discuss how we can support you."
        imageSrc={img}
        primaryButtonText="Donate Now"
        primaryButtonUrl="/donate"
      />
      <div className="px-8 lg:px-0 max-w-7xl mx-auto mt-16">
        <Socials />
        <GetInTouch />
      </div>
    </main>
  );
}

export default Contact;
