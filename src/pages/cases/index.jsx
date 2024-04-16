import Link from 'next/link';

export default function Cases() {
    // Assuming you have an array of case IDs
    const caseIds = [1, 2, 3]; // Example case IDs

    return (
        <main className=''>
            <h1>Case Studies</h1>
            <ul>
                {caseIds.map(caseId => (
                    <li key={caseId}>
                        <Link href={`/cases/${caseId}`}>
                            Case {caseId}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}