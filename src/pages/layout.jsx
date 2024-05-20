import Navigation from '../components/Navigation';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { fetcher } from '../../lib/api';
import { useEffect, useState } from 'react';
import CookieBanner from '@/components/CookieBanner';
import CookieModal from '@/components/CookieModal';

export default function Layout({ children }) {
  const [navigationData, setNavigationData] = useState([]);

  const [footerData, setFooterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [learnMore, setLearnMore] = useState(false);

  // const router = useRouter();
  useEffect(() => {
    const fetchNavigationData = async () => {
      setIsLoading(true);
      try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=logo.logo,navLink`);
        const navData = await response;
        setNavigationData(navData.data.attributes);

        const footerResponse = await fetcher(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=footerLink,logo,socials.icon`
        );
        const footerData = await footerResponse;
        setFooterData(footerData.data.attributes);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching navigation data:', error);
      }
    };
    fetchNavigationData();
  }, []);

  const handleButtonClick = () => {
    setShowCookieBanner(false);
  };

  const handleLearnMore = () => {
    setLearnMore(true);
    setShowCookieBanner(false);
  };

  if (isLoading) {
    return <div className=""></div>;
  }
  return (
    <div className={`bg-off-white h-screen relative z-0 `}>
      <main className="">
        <div className={`${learnMore ? 'blur-sm' : 'blur-none'}`}>
          <Navigation navigationData={navigationData} />
          {children}
        </div>
        <CookieBanner
          showCookieBanner={showCookieBanner}
          learnMore={learnMore}
          onClick={handleButtonClick}
          onClick2={handleLearnMore}
        />

        <div
          className={`fixed top-0 -z-1 h-screen w-screen flex items-center justify-center p-6 ${
            learnMore ? 'block' : 'hidden'
          }`}
        >
          <CookieModal learnMore={learnMore} setLearnMore={setLearnMore} onClick={handleButtonClick} />
        </div>
        <div className={`${learnMore ? 'blur-sm' : 'blur-none'}`}>
          <Footer footerData={footerData} />
        </div>
      </main>
    </div>
  );
}
