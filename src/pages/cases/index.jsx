import React from 'react'
import Link from 'next/link';
import WorkSection from '../../components/WorkSection'; 
import Title from '../../components/ui/Title';
import CarmenImage from '../../../public/assets/placeholder.jpeg';
import ValdeImage from '../../../public/assets/grab1.jpg';


export default function Cases(title, subtitle, label) {
    // Assuming you have an array of case IDs
    const caseIds = [1, 2, 3]; // Example case IDs

    return (
        <main className='v-space-xl' >
            <section className='bg-dark rounded-t-xl pt-10 flex flex-col gap-6'>
                <div className='page-content-container'>
            <Title title="Our work" variant='pageTitle' />
            </div>
            <WorkSection
            subtitle='Carmen Curlers'
            label1='VP supervison'
            label2='Custom LED'
            link="Read more"
            image={CarmenImage}
            />
                        <WorkSection
            subtitle='Valdes Jul'
            label1='VP supervison'
            label2='LED Volume'
            link="Read more"
            image={ValdeImage}
            />
            </section>
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