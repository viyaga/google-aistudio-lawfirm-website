
import React from 'react';
import type { Page } from '../types';
import { BriefcaseIcon, UsersIcon, ShieldCheckIcon, ChevronRightIcon } from '../components/icons/Icons';

interface HomeProps {
    setCurrentPage: (page: Page) => void;
}

const HeroSection: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => (
    <div className="relative bg-brand-primary text-white">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight">
                <span className="block">Expert Legal Counsel</span>
                <span className="block text-brand-accent">For Your Peace of Mind</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
                Juris Chambers provides unparalleled legal services across a wide range of practice areas. Our commitment to excellence ensures your case is in the best hands.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                    onClick={(e) => { e.preventDefault(); setCurrentPage('Contact'); }}
                    href="#"
                    className="inline-block bg-brand-accent text-white font-semibold py-3 px-8 rounded-md hover:bg-yellow-600 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                    Free Consultation
                </a>
                <a
                    onClick={(e) => { e.preventDefault(); setCurrentPage('Practice Areas'); }}
                    href="#"
                    className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-brand-primary transition duration-300"
                >
                    Our Expertise
                </a>
            </div>
        </div>
    </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent text-white mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-serif text-brand-dark mb-2">{title}</h3>
        <p className="text-brand-secondary">{description}</p>
    </div>
);

const FeaturesSection: React.FC = () => (
    <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold font-serif text-brand-dark">Why Choose Juris Chambers?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-secondary">
                    We combine deep legal knowledge with a client-first approach to deliver exceptional results.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                <FeatureCard 
                    icon={<ShieldCheckIcon className="h-8 w-8" />} 
                    title="Proven Track Record" 
                    description="Decades of combined experience and a history of successful outcomes for our clients." 
                />
                <FeatureCard 
                    icon={<UsersIcon className="h-8 w-8" />} 
                    title="Client-Centric Approach" 
                    description="We listen to your needs and tailor our strategies to achieve your specific goals." 
                />
                <FeatureCard 
                    icon={<BriefcaseIcon className="h-8 w-8" />} 
                    title="Comprehensive Expertise" 
                    description="Our team possesses a broad range of legal expertise to handle complex cases." 
                />
            </div>
        </div>
    </div>
);

const PracticeAreasPreview: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
    const areas = [
        { name: 'Corporate Law', description: 'Guiding businesses through complex legal landscapes.' },
        { name: 'Family Law', description: 'Compassionate and firm representation in family matters.' },
        { name: 'Criminal Defense', description: 'Protecting your rights with a vigorous defense.' },
        { name: 'Real Estate Law', description: 'Expertise in both commercial and residential property law.' },
    ];
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold font-serif text-brand-dark">Our Practice Areas</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-secondary">
                        Specialized knowledge for every legal challenge you face.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {areas.map(area => (
                        <div key={area.name} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-lg font-bold font-serif text-brand-primary">{area.name}</h3>
                            <p className="mt-2 text-brand-secondary">{area.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <a
                        onClick={(e) => { e.preventDefault(); setCurrentPage('Practice Areas'); }}
                        href="#"
                        className="inline-flex items-center text-brand-accent font-semibold hover:underline"
                    >
                        Explore All Areas <ChevronRightIcon className="ml-1" />
                    </a>
                </div>
            </div>
        </div>
    );
};


const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
    return (
        <div>
            <HeroSection setCurrentPage={setCurrentPage} />
            <FeaturesSection />
            <PracticeAreasPreview setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default Home;
