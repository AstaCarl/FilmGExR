import Anchor from './ui/Anchor';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Footer({ footerData }) {
  const router = useRouter();

  const activePathname = router.pathname;

  return (
    <footer className="page-content-container v-space-xl space-y-8 pb-8 relative z-[-1] bg-off-white">
      <ul className="md:flex md:justify-between items-center md:space-y-0">
        <div className="hidden md:block">
          {footerData.logo && <Anchor variant="logo" href={footerData.logo.url} title={footerData.logo.brandName} />}
        </div>
        <div className="space-y-2 md:flex md:justify-end md:space-y-0">
          {footerData.footerLink.map((item, index) => {
            if (item && item.url) {
              const isActive = item.url === activePathname;
              return (
                <li className={`md:ml-4 ${isActive ? 'text-red' : ''}`} key={index}>
                  <Anchor variant="footer" href={item.url} title={item.title} />
                </li>
              );
            }
            return null;
          })}
        </div>
      </ul>
      <div className="space-y-8 md:space-y-0 md:flex md:items-center md:justify-between">
        <ul className="flex md:justify-end">
          {footerData.socials.map((item, index) => (
            <li className="" key={index}>
              {item.icon && (
                <Anchor href={item.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    width={30}
                    height={30}
                    className="w-8 mr-4 md:mr-0 md:ml-4"
                    src={`http://localhost:1337${item.icon.data.attributes.url}`}
                    alt={item.icon.data.attributes.alternativeText}
                  />
                </Anchor>
              )}
            </li>
          ))}
        </ul>
        <p className="md:order-first">{footerData.copyright}</p>
      </div>
    </footer>
  );
}
