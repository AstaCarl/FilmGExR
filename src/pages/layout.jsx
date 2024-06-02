import Navigation from '../components/Navigation';
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

  // Fetch navigation and footer data on component mount
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
        console.error('Error fetching navigation data:', error); // Log any errors during fetch
      }
    };
    fetchNavigationData();
  }, []);

  // Handle click event to hide the cookie banner
  const handleButtonClick = () => {
    setShowCookieBanner(false);
  };

  // Handle click event to show the cookie modal and hide the cookie banner
  const handleLearnMore = () => {
    setLearnMore(true);
    setShowCookieBanner(false);
  };

  // Render a loading state if data is still being fetched
  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <div className="bg-off-white h-screen relative z-0">
      {/* Render the navigation bar with fetched data */}
      <Navigation navigationData={navigationData} />
      {/* Render the main content */}
      <main className="">{children}</main>
      {/* Render the footer with fetched data */}
      <Footer footerData={footerData} />
      {/* Render the cookie banner with control handlers */}
      <CookieBanner
        showCookieBanner={showCookieBanner}
        learnMore={learnMore}
        onClick={handleButtonClick}
        onClick2={handleLearnMore}
      />
      {/* Render the cookie modal if 'learn more' is clicked */}
      <div
        className={`fixed top-0 z-[3000] h-screen w-screen flex items-center justify-center p-6 backdrop-blur-sm ${
          learnMore ? 'block' : 'hidden'
        }`}
      >
        <CookieModal learnMore={learnMore} setLearnMore={setLearnMore} onClick={handleButtonClick} />
      </div>
    </div>
  );
}
