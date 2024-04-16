
import { useRouter } from 'next/router';

export default function CaseDetails() {
  const router = useRouter();
  const { caseId } = router.query;

  return (
    <div>
      <h1>Case ID: {caseId}</h1>
    </div>
  );
}