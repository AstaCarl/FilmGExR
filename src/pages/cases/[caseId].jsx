import React, { useState, useEffect } from 'react';
import Title from '@/components/ui/Title';
import { useRouter } from 'next/router';
import { fetcher } from '../../../lib/api';
import Paragraf from '@/components/Paragraf';

export default function CaseDetails({ casesData }) {
  const router = useRouter();
  const { caseId } = router.query;
  const [caseData, setCaseData] = useState({});

  useEffect(() => {
    const fetchCasesData = async () => {
      try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cases-pages/${caseId}?populate=cases`);
        const casesData = await response;
        setCaseData(casesData);
      } catch (error) {
        console.error('Error fetching navigation data:', error);
      }
    };
    if (caseId) {
      fetchCasesData();
    }
  }, [caseId]);

  return (
    <div className="page-content-container">
      <Title title={caseData?.data?.attributes?.cases?.title} variant="pageTitle" />
      <Paragraf paragrafText={caseData?.data?.attributes?.cases?.description} />
    </div>
  );
}
