// Import necessary libraries and components
import { useState } from 'react';
import Heading from '@/components/ui/Heading';
import { fetcher } from '../../../lib/api';
import { useIntersectionObserver } from '../../../lib/interSectionObserver';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Fetch data at build time
export async function getStaticProps() {
  // Fetch data from the API
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-pages?populate=Address.icon,Phone.icon,Email.icon`
  );
  // Extract the data from the response
  const contactData = response.data[0].attributes;
  // Return the data as props
  return {
    props: {
      contactData: contactData,
    },
  };
}

// Contact component
export default function Contact({ contactData }) {
  // State and refs for visibility
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
  });
  const ref2 = useIntersectionObserver(() => {
    setIsVisible(true);
  });
  const ref3 = useIntersectionObserver(() => {
    setIsVisible(true);
  });
  const ref4 = useIntersectionObserver(() => {
    setIsVisible(true);
  });

  return (
    <main className="flex flex-col  min-h-screen w-full justify-center gap-14">
      {/* Set the page title and description in the head */}
      <Head>
        <title>Contact FilmGExR - Virtual Production Studio</title>
        <meta
          name="description"
          content="Contact FilmGExR, your virtual production studio at Mileparken 14, 2740 Skovlunde. Call +45 70220302 or email filmgear@filmgear.dk."
          key="desc"
        />
      </Head>
      {contactData && (
        <section className="space-y-2 md:w-[90%] page-content-container ">
          <div ref={ref} className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} space-y-2 md:w-[70%]`}>
            <Heading title={contactData.title} />
          </div>
          <div
            ref={ref2}
            className={`${
              isVisible ? 'appear-on-scroll delay-200' : 'before-scroll translate-y-5'
            } space-y-2 md:w-[70%]`}
          >
            <h2 className="text-lg lg:text-xl">{contactData.subtitle}</h2>
          </div>
        </section>
      )}
      <section
        ref={ref3}
        className={`${
          isVisible ? 'appear-on-scroll delay-300' : 'before-scroll translate-y-5'
        } flex flex-col gap-14 page-content-container `}
      >
        {/* phone information */}
        {contactData.Phone && (
          <div className="flex items-center gap-4">
            <Image
              width={30}
              height={30}
              src={contactData.Phone.icon.data.attributes.url}
              alt={contactData.Phone.icon.data.attributes.alternativeText || 'Phone icon'}
            />
            <Link href={`tel:{contactData.Phone.title}`}>
              <p className="text-md md:text-lg">{contactData.Phone.title}</p>
            </Link>
          </div>
        )}
        {/* email information */}
        {contactData.Email && (
          <Link
            href={`mailto:${contactData.Email.title}`}
            aria-label={`Send email to ${contactData.Email.title}`}
            className="flex items-center gap-4"
          >
            <Image
              width={30}
              height={30}
              src={contactData.Email.icon.data.attributes.url}
              alt={contactData.Email.icon.data.attributes.alternativeText || 'Email icon'}
            />
            <p className="text-md md:text-lg">{contactData.Email.title}</p>
          </Link>
        )}
        {/* address information */}
        {contactData.Address && (
          <Link
            href={contactData.Address.url}
            target="_blank"
            className="flex items-center gap-4"
            aria-label="Navigate to address"
          >
            <Image
              width={30}
              height={30}
              src={contactData.Address.icon.data.attributes.url}
              alt={contactData.Address.icon.data.attributes.alternativeText || 'Address icon'}
            />
            <p className="text-md md:text-lg">{contactData.Address.title}</p>
          </Link>
        )}
      </section>
      <section ref={ref4} className={`${isVisible ? 'appear-on-scroll delay-500' : 'before-scroll translate-y-5'}`}>
        <iframe
          className="w-full h-60 md:h-[400px] lg:h-[450px] bg-off-white"
          width={2000}
          height={2000}
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GMAPS_API_KEY}&q=Skovlunde+2740+Mileparken+14`}
        ></iframe>
      </section>
    </main>
  );
}
