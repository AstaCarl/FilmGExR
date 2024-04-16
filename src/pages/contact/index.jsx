import Title from "@/components/ui/Title";
import { fetcher } from "../../../lib/api";

export default function Contact({contactData}) {


  return (
    <div className="page-content-container flex flex-col min-h-screen w-full justify-center gap-12">
      {contactData && (
        <div className="space-y-2 md:space-y-0">
          <Title variant="pageTitle" title={contactData.title}/>
          <Title variant="subTitle" title={contactData.subtitle}/>
        </div>
      )
      }
      <div className="flex flex-col gap-10">
      {contactData.Address && contactData.Address.length > 0 && (
        <div className="flex items-center gap-4">
          <img
            src={`http://localhost:1337${contactData.Address[0].icon.data.attributes.url}`}
            alt={contactData.Address[0].icon.alternativeText}
          />
          <p className="">{contactData.Address[0].title}</p>
        </div>
          )}
          {contactData.Phone && contactData.Phone.length > 0 && (
            <div className="flex items-center gap-4">
              <img
                src={`http://localhost:1337${contactData.Phone[0].icon.data.attributes.url}`}
                alt={contactData.Phone[0].icon.alternativeText}
              />
              <p>{contactData.Phone[0].title}</p>
            </div>
          )}
          {contactData.Email && contactData.Email.length > 0 && (
            <div className="flex items-center gap-4">
              <img
                src={`http://localhost:1337${contactData.Email[0].icon.data.attributes.url}`}
                alt={contactData.Email[0].icon.alternativeText}
              />
              <p>{contactData.Email[0].title}</p>
            </div>
          )}
          </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-pages/1?populate=Address.icon,Phone.icon,Email.icon`)
  const contactData = response.data.attributes
  return {
    props: {
      contactData: contactData
    }

  }
}
