import Anchor from "./ui/Anchor";
import { useRouter } from 'next/router';

export default function Footer({ footerData }) {

  const router = useRouter();

  const activePathname = router.pathname;




  return (
    <footer className="page-content-container space-y-8 py-8 relative z-0 bg-off-white">


        <ul className="md:flex md:justify-between items-center md:space-y-0">
        {footerData.FooterItems.map((item, index) => (
          <div className="hidden md:block" key={index}>
            <Anchor  variant="logo" href={item.url} title={item.brandName} />
          </div>
            ))}
            <div className="space-y-2 md:flex md:justify-end md:space-y-0">
            {Array.isArray(footerData.FooterItems) && footerData.FooterItems.filter(item => item.__component === 'menu.menu-link').map((item, index) => {
  const isActive = item.url === activePathname;
  return (
    <li className={`md:ml-4 ${isActive ? "underline text-red underline-offset-4" : ""}`} key={index}>
      <Anchor variant="footer" href={item.url} title={item.title} />
    </li>
  );
})}
        </div>
        </ul>
        <div className="space-y-8 md:space-y-0 md:flex md:items-center md:justify-between">
        <ul className="flex md:justify-end">
        {footerData.FooterItems.map((item, index) => (
          <li className="" key={index}>
      {item.icon && (
        <Anchor href={item.url} target="_blank" rel="noopener noreferrer">
          <img className="w-8 mr-4 md:mr-0 md:ml-4" src={`http://localhost:1337${item.icon.data.attributes.url}`} alt={item.icon.data.attributes.alternativeText} />
        </Anchor>
      )}
          </li>
        ))} 

        </ul>
                <p className="md:order-first">{footerData.Copyright}</p>
        </div>

    </footer>
      
  );
}
