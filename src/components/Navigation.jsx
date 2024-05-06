import Anchor from '../components/ui/Anchor';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

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
      className={`page-content-container fixed top-0 z-[1] flex justify-between w-full pt-4 transition-all duration-300 ease-in-out${
        isOpen ? 'z-[999] bg-off-white' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-1 h-10">
        {navigationData.map((item, index) => (
          <Anchor key={index} variant="logo" href={item.url} title={item.brandName} />
        ))}
      </div>
      <div className={`flex flex-col items-end pt-4 ${isOpen ? 'justify-between h-screen' : 'justify-center'}`}>
        <button onClick={handleMenuToggle} className="md:hidden flex items-center flex-col gap-1 duration-300">
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
        <nav
          className={`transition-all delay-100 duration-700 ease-in-out flex flex-col pb-10 items-end justify-end md:h-full md:justify-center ${
            isOpen
              ? 'translate-x-0 h-screen'
              : 'translate-x-full opacity-0 h-0 overflow-hidden md:translate-x-0 md:opacity-100'
          }`}
        >
          <ul className={` space-y-6 text-right md:space-y-0 md:flex md:gap-4`}>
            {navigationData.map((item, index) => {
              const isActive = item.url === activePathname;
              return (
                <li
                  className={`${isOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'} text-black ${
                    isActive ? 'underline text-red underline-offset-4' : ''
                  }`}
                  key={index}
                >
                  <Anchor variant="nav" href={item.url} title={item.title} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
