import { useState } from 'react';
import Title from '@/components/ui/Title';
import { fetcher } from '../../../lib/api';
import { useIntersectionObserver } from '../../../lib/interSectionObserver';
import Head from 'next/head';

export default function Contact({ contactData }) {
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

  return (
    <div className="page-content-container flex flex-col min-h-screen w-full justify-center gap-14">
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your Page Description" />
      </Head>
      {contactData && (
        <div className="space-y-2 md:w-[90%]">
          <div ref={ref} className={`${isVisible ? 'appear-on-scroll' : 'before-scroll'} space-y-2 md:w-[70%]`}>
            <Title variant="pageTitle" title={contactData.title} />
          </div>
          <div
            ref={ref2}
            className={`${
              isVisible ? 'appear-on-scroll delay-200' : 'before-scroll translate-y-5'
            } space-y-2 md:w-[70%]`}
          >
            <Title variant="subtitle" title={contactData.subtitle} />
          </div>
        </div>
      )}
      <div
        ref={ref3}
        className={`${isVisible ? 'appear-on-scroll delay-300' : 'before-scroll translate-y-5'} flex flex-col gap-14`}
      >
        {contactData.Address && contactData.Address.length > 0 && (
          <div className="flex items-center gap-4">
            <img
              src={`http://localhost:1337${contactData.Address[0].icon.data.attributes.url}`}
              alt={contactData.Address[0].icon.data.attributes.alternativeText}
            />
            <p className="text-lg">{contactData.Address[0].title}</p>
          </div>
        )}
        {contactData.Phone && contactData.Phone.length > 0 && (
          <div className="flex items-center gap-4">
            <img
              src={`http://localhost:1337${contactData.Phone[0].icon.data.attributes.url}`}
              alt={contactData.Phone[0].icon.data.attributes.alternativeText}
            />
            <p className="text-lg">{contactData.Phone[0].title}</p>
          </div>
        )}
        {contactData.Email && contactData.Email.length > 0 && (
          <div className="flex items-center gap-4">
            <img
              src={`http://localhost:1337${contactData.Email[0].icon.data.attributes.url}`}
              alt={contactData.Email[0].icon.data.attributes.alternativeText}
            />
            <p className="text-lg">{contactData.Email[0].title}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-pages/1?populate=Address.icon,Phone.icon,Email.icon`
  );
  const contactData = response.data.attributes;
  return {
    props: {
      contactData: contactData,
    },
  };
}
