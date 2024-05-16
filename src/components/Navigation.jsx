import Anchor from '../components/ui/Anchor';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation({ navigationData }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const activePathname = router.pathname;

  const handleMenuToggle = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${isOpen ? '' : ''}fixed h-20 top-0 z-20 w-screen lg:flex lg:justify-between lg:items-center lg:h-20`}
    >
      <div>
        <div className={` flex justify-between items-center ${isOpen ? ' relative z-[999]' : ''}`}>
          {/* {navigationData.logo && (
      <Anchor variant="logo" href={navigationData.logo.url} title={navigationData.logo.brandName} />
    )} */}
          {navigationData.logo && (
            <Link href={navigationData.logo.url}>
              <Image
                width={100}
                height={100}
                src={navigationData.logo.logo.data.attributes.url}
                alt={navigationData.logo.logo.data.attributes.alternativeText}
                className="h-[40px] w-auto left-content-container"
              />
            </Link>
          )}
          <button
            onClick={handleMenuToggle}
            className={`lg:hidden h-20 flex justify-center flex-col gap-1 duration-300 right-content-container ${
              isOpen ? '' : ''
            }`}
          >
            <div
              className={`h-0.5 bg-black w-6 rounded-full transition-transform duration-300 ease-linear ${
                isOpen ? 'translate-y-[4px] rotate-45 bg-red' : ' translate-x-0 rotate-0'
              }`}
            ></div>
            <div className={`h-0.5 bg-black w-6 rounded-full ${isOpen ? 'opacity-0' : 'opacity-1'}`}></div>
            <div
              className={`h-0.5 bg-black w-6 rounded-full transition-transform duration-300 ease-linear ${
                isOpen ? '-translate-y-[8px] -rotate-45 bg-red' : ' translate-x-0 rotate-0'
              }`}
            ></div>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? ' bg-off-white sticky z-10  translate-x-0 blur-none' : ' translate-x-full overflow-hidden blur-lg'
        } transition-all delay-100 duration-700 ease-in-out -translate-y-20 pb-10 lg:pb-0 h-screen flex justify-end items-end lg:translate-x-0 lg:blur-none lg:justify-start lg:items-center lg:h-20 lg:translate-y-0`}
      >
        <ul
          className={` space-y-6 text-right lg:space-y-0 lg:flex lg:gap-6 right-content-container transition-all duration-700 ease-in-out `}
        >
          {navigationData.navLink.map((item, index) => {
            if (item && item.url) {
              const isActive = item.url === activePathname;
              return (
                <li
                  className={` transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'opacity-100 transition-all duration-700 delay-100 ease-in-out'
                      : 'opacity-0 lg:opacity-100 transition-all delay-100 duration-700 ease-in-out'
                  } text-black ${isActive ? 'text-red' : ''}
               lg:opacity-100`}
                  key={index}
                >
                  <Anchor variant="nav" href={item.url} title={item.title} />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>
    </header>
  );
}
