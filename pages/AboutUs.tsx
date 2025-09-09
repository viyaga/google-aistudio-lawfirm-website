
import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-brand-primary">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold font-serif text-white sm:text-5xl lg:text-6xl">{title}</h1>
      <p className="mt-4 text-xl text-gray-300">{subtitle}</p>
    </div>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <div>
      <PageHeader title="About Juris Chambers" subtitle="A Legacy of Excellence and Integrity in Law" />
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold font-serif text-brand-dark">Our Firm's History</h2>
              <p className="mt-4 text-lg text-brand-secondary">
                Founded in 1985, Juris Chambers began as a small practice with a singular vision: to provide exceptional legal representation with a personal touch. Over the decades, we have grown into a multi-disciplinary firm, but our founding principles remain the cornerstone of our practice.
              </p>
              <p className="mt-4 text-lg text-brand-secondary">
                Our journey has been marked by landmark cases and a steadfast commitment to our clients' success. We have built a reputation for tackling complex legal challenges with innovative strategies and unwavering dedication.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                className="rounded-lg shadow-xl"
                src="https://picsum.photos/600/400?image=1074" 
                alt="Law firm office building"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-accent font-semibold tracking-wide uppercase">Our Philosophy</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold font-serif tracking-tight text-brand-dark sm:text-4xl">
              Our Mission, Vision, and Values
            </p>
            <p className="mt-4 max-w-2xl text-xl text-brand-secondary lg:mx-auto">
              These principles guide every action we take and every piece of advice we give.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium font-serif text-brand-dark">Our Mission</p>
                </dt>
                <dd className="mt-2 text-base text-brand-secondary">
                  To provide our clients with sophisticated legal advice and representation in a timely and efficient manner. We strive to handle each matter with accountability and responsiveness, as if we were representing ourselves.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium font-serif text-brand-dark">Our Vision</p>
                </dt>
                <dd className="mt-2 text-base text-brand-secondary">
                  To be the leading law firm recognized for our professionalism, integrity, and dedication to client success. We aim to be the firm of choice for clients seeking resolution of their most challenging legal issues.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <p className="text-lg leading-6 font-medium font-serif text-brand-dark">Our Values</p>
                </dt>
                <dd className="mt-2 text-base text-brand-secondary">
                  Excellence, Integrity, Teamwork, and Commitment. These values are the foundation of our firm and define who we are as legal professionals and as a team.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
