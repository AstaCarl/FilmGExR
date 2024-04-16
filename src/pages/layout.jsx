import Navigation from '../components/Navigation';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { fetcher } from "../../lib/api";
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';


export default function Layout({ children }) {
    const [navigationData, setNavigationData] = useState([]);
    const [footerData, setFooterData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const router = useRouter();
    useEffect(() => {
        const fetchNavigationData = async () => {
          setIsLoading(true);
          try {
            const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/navigation-link?populate[0]=navigationItems`);
            const navData = await response;
            setNavigationData(navData.data.attributes.navigationItems);

            const footerResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=FooterItems.icon`);
            const data = await footerResponse;
            setFooterData(data.data.attributes);
            setIsLoading(false);

          } catch (error) {
            console.error("Error fetching navigation data:", error)
          }
        };
        // setTimeout(fetchNavigationData, 2000);
        fetchNavigationData();

      }, []);

      // useEffect(() => {
      //   const timer = setTimeout(() => {
      //     setIsLoading(false);
      //   }, 2500); // Change this to the amount of time you want the loading animation to show
      
      //   return () => clearTimeout(timer); // This will clear the timeout if the component unmounts before the timeout finishes
      // }, []);

      if (isLoading) {
        return (
          // <Loader/>
          <div className=""></div>
        );
      } 
  return (
    <div className='bg-off-white h-screen relative z-0'>
            <Navigation navigationData={navigationData}/>

        <main className=''>
            {children}
      </main>
            <Footer footerData={footerData}/>

    </div>
  );
}

// import { useRouter } from 'next/router';
// import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';
// import { fetcher } from "../../lib/api";
// import { useEffect, useState } from 'react';
// import Loader from '@/components/Loader';

// export default function Layout({ children }) {
//   const router = useRouter();
//   const [navigationData, setNavigationData] = useState([]);
//   const [footerData, setFooterData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchNavigationData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/navigation-link?populate[0]=navigationItems`);
//         const navData = await response;
//         setNavigationData(navData.data.attributes.navigationItems);

//         const footerResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=FooterItems.icon`);
//         const data = await footerResponse;
//         console.log("footerData", data)
//         setFooterData(data.data.attributes);
//         console.log("Foooooter", footerData)

//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching navigation data:", error)
//         setIsLoading(false);
//       }
//     };
//     setTimeout(fetchNavigationData, 2000);
//     // fetchNavigationData();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2500); // Change this to the amount of time you want the loading animation to show
  
//     return () => clearTimeout(timer); // This will clear the timeout if the component unmounts before the timeout finishes
//   }, []);

//   if (isLoading && router.pathname === '/') {
//     return (
//       <Loader/>
//     );
//   } else {
//     // console.log("footerData in Layout", footerData);
//     return (
//       <div>
//         <Navigation navigationData={navigationData}/>
//         <main className=''>
//           {children}
//         </main>
//         {/* <Footer footerData={footerData}/> */}
//         {footerData && <Footer footerData={footerData}/>}
//       </div>
//     );
//   }
// }