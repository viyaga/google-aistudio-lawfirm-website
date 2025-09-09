
import React from 'react';
import type { AttorneyProfile } from '../types';

const PageHeader: React.FC<{ title: string; subtitle:string }> = ({ title, subtitle }) => (
    <div className="bg-brand-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold font-serif text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-4 text-xl text-gray-300">{subtitle}</p>
      </div>
    </div>
);

const attorneys: AttorneyProfile[] = [
  {
    name: 'Eleanor Vance',
    title: 'Managing Partner',
    imageUrl: 'https://picsum.photos/500/500?image=1027',
    bio: 'Eleanor founded Juris Chambers with a vision to create a law firm that combines legal prowess with a deep sense of client commitment. With over 30 years of experience, she is a formidable presence in the courtroom and a trusted advisor in the boardroom.',
    specialties: ['Corporate Litigation', 'Mergers & Acquisitions'],
  },
  {
    name: 'Marcus Thorne',
    title: 'Senior Partner, Criminal Defense',
    imageUrl: 'https://picsum.photos/500/500?image=1005',
    bio: 'Marcus is a renowned criminal defense attorney known for his sharp intellect and unwavering dedication to justice. He has successfully defended clients in numerous high-profile cases, earning a reputation as a fierce advocate for the accused.',
    specialties: ['White-Collar Crime', 'Federal Cases'],
  },
  {
    name: 'Isabella Rossi',
    title: 'Partner, Family Law',
    imageUrl: 'https://picsum.photos/500/500?image=1025',
    bio: 'Isabella leads our family law division with compassion and strength. She is dedicated to helping families navigate difficult transitions with dignity, specializing in complex custody disputes and high-asset divorce cases.',
    specialties: ['Family Law', 'Child Custody'],
  },
  {
    name: 'Julian Croft',
    title: 'Associate, Real Estate Law',
    imageUrl: 'https://picsum.photos/500/500?image=1011',
    bio: 'Julian is a rising star in real estate law, adept at handling everything from complex commercial transactions to residential closings. His meticulous approach ensures that every detail is covered, protecting his clients\' investments.',
    specialties: ['Commercial Real Estate', 'Zoning & Land Use'],
  },
];

const AttorneyCard: React.FC<{ attorney: AttorneyProfile }> = ({ attorney }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img className="h-64 w-full object-cover" src={attorney.imageUrl} alt={attorney.name} />
        <div className="p-6">
            <h3 className="text-2xl font-bold font-serif text-brand-dark">{attorney.name}</h3>
            <p className="text-brand-accent font-semibold mt-1">{attorney.title}</p>
            <p className="text-brand-secondary mt-4">{attorney.bio}</p>
            <div className="mt-4">
                <h4 className="font-semibold text-brand-primary">Specialties:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {attorney.specialties.map((spec, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{spec}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);


const Attorneys: React.FC = () => {
  return (
    <div>
        <PageHeader title="Our Attorneys" subtitle="Meet the Dedicated Professionals Behind Our Success" />

        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {attorneys.map((attorney) => (
                        <AttorneyCard key={attorney.name} attorney={attorney} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Attorneys;
