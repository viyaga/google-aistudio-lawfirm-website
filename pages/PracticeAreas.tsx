
import React, { useState } from 'react';

const PageHeader: React.FC<{ title: string; subtitle:string }> = ({ title, subtitle }) => (
    <div className="bg-brand-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold font-serif text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-4 text-xl text-gray-300">{subtitle}</p>
      </div>
    </div>
);
  
const practiceAreasData = [
    {
      title: 'Corporate & Commercial Law',
      description: 'We provide comprehensive legal services to businesses of all sizes, from startups to established corporations. Our expertise includes mergers and acquisitions, corporate governance, contract negotiation, and commercial litigation. We act as strategic partners to help our clients navigate the complexities of the business world.',
      image: 'https://picsum.photos/800/600?image=20'
    },
    {
      title: 'Family Law',
      description: 'Our compassionate and experienced family law attorneys handle sensitive matters with the utmost discretion and care. We represent clients in divorce proceedings, child custody disputes, adoptions, and prenuptial agreements, always prioritizing the well-being of the families involved.',
      image: 'https://picsum.photos/800/600?image=30'
    },
    {
      title: 'Criminal Defense',
      description: 'Facing criminal charges can be a daunting experience. Our tenacious criminal defense team is dedicated to protecting your rights and ensuring a fair legal process. We have a proven track record of successfully defending clients against a wide range of charges, from misdemeanors to serious felonies.',
      image: 'https://picsum.photos/800/600?image=40'
    },
    {
      title: 'Real Estate Law',
      description: 'Our real estate practice covers all aspects of property law, including residential and commercial transactions, zoning and land use issues, leasing, and property disputes. We work with developers, investors, and individuals to ensure their real estate interests are protected.',
      image: 'https://picsum.photos/800/600?image=50'
    },
    {
      title: 'Intellectual Property',
      description: 'In today\'s innovation-driven economy, protecting your intellectual property is crucial. Our IP attorneys assist clients with trademark and copyright registration, patent applications, trade secret protection, and litigation to defend their valuable intangible assets.',
      image: 'https://picsum.photos/800/600?image=60'
    },
    {
      title: 'Estate Planning & Probate',
      description: 'We help individuals and families plan for the future with comprehensive estate planning services, including wills, trusts, and powers of attorney. Our team also guides clients through the probate process with efficiency and sensitivity during difficult times.',
      image: 'https://picsum.photos/800/600?image=70'
    }
];

const PracticeAreas: React.FC = () => {
    const [selectedArea, setSelectedArea] = useState(practiceAreasData[0]);

    return (
        <div>
            <PageHeader title="Practice Areas" subtitle="Comprehensive Legal Expertise for Diverse Needs" />

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    {/* Sidebar with list of areas */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold font-serif text-brand-dark mb-4">Our Expertise</h2>
                        <ul className="space-y-1">
                            {practiceAreasData.map((area, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => setSelectedArea(area)}
                                        className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 text-lg ${selectedArea.title === area.title ? 'bg-brand-accent text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200 text-brand-primary'}`}
                                    >
                                        {area.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Content area */}
                    <div className="mt-8 lg:mt-0 lg:col-span-2">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <img src={selectedArea.image} alt={selectedArea.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                            <h3 className="text-3xl font-bold font-serif text-brand-dark mb-4">{selectedArea.title}</h3>
                            <p className="text-brand-secondary text-lg leading-relaxed">{selectedArea.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeAreas;
