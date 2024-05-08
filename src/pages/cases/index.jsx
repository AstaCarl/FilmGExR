import React from 'react';
import WorkSection from '../../components/WorkSection';
import Title from '../../components/ui/Title';
import { fetcher } from '../../../lib/api';

export async function getStaticProps() {
  const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cases-pages?populate=cases.thumbnail`);
  console.log('response id', response.data.id);
  const casesData = response.data.map((item) => item);
  return {
    props: {
      casesData: casesData,
    },
  };
}

export default function Cases({ casesData, caseId }) {
  return (
    <main className="v-space-xl">
      <section className="bg-off-white rounded-t-xl pt-10 flex flex-col gap-6">
        <div className="page-content-container">
          <Title title="Recent work" variant="pageTitle" />
        </div>
        {casesData.map((caseItem, index) => {
          return (
            <div className="sticky top-0">
              <WorkSection
                key={index}
                subtitle={caseItem.attributes.cases.title}
                label1={caseItem.attributes.cases.label}
                label2={caseItem.attributes.cases.label2}
                image={`http://localhost:1337${caseItem.attributes.cases.thumbnail.data.attributes.url}`}
                href={`/cases/${caseItem.id}`}
                link="Read more"
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}
