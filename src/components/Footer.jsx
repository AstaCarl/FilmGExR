import Anchor from './ui/Anchor';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Footer component
export default function Footer({ footerData }) {
  // Using Next.js useRouter hook to get the current path
  const router = useRouter();
  const activePathname = router.pathname;

  return (
    <footer className="page-content-container v-space-xl space-y-8 pb-8 relative z-[-1] bg-off-white">
      <div className="md:flex md:justify-between items-center md:space-y-0">
        <div className="hidden md:flex flex-col items-center">
          {/* Rendering the logo if it exists in footerData */}
          {footerData.logo && (
            <Anchor
              aria="Go to home page"
              variant="logo"
              href={footerData.logo.url}
              title={footerData.logo.brandName}
            />
          )}
          <p className="uppercase text-[11px] -mt-1 font-syntax">Virtual Production Studio</p>
        </div>
        <ul className="space-y-2 md:flex md:justify-end md:space-y-0">
          {/* Rendering the footer links */}
          {footerData.footerLink.map((item, index) => {
            if (item && item.url) {
              const isActive = item.url === activePathname;
              return (
                <li className={`md:ml-4 ${isActive ? 'text-red' : ''}`} key={index}>
                  <Anchor aria={`go to ${item.title} page`} variant="footer" href={item.url} title={item.title} />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <div className="space-y-8 md:space-y-0 md:flex md:items-center md:justify-between">
        <ul className="flex md:justify-end">
          {/* Rendering the social media links */}
          {footerData.socials.map((item, index) => (
            <li className="" key={index}>
              {item.icon && (
                <Anchor aria={`Go to FilmGExR's ${item.title} site`} href={item.url} target="_blank">
                  <Image
                    width={30}
                    height={30}
                    className="w-8 mr-4 md:mr-0 md:ml-4"
                    src={item.icon.data.attributes.url}
                    alt={item.icon.data.attributes.alternativeText}
                  />
                </Anchor>
              )}
            </li>
          ))}
        </ul>
        {/* Rendering the copyright notice */}
        <p className="md:order-first">{footerData.copyright}</p>
      </div>
    </footer>
  );
}
