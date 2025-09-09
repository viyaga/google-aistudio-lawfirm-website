
import React from 'react';
import type { Page } from '../types';
import { ScaleIcon } from './icons/Icons';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({setCurrentPage}) => {
  const quickLinks: Page[] = ['Home', 'About Us', 'Practice Areas', 'Our Attorneys', 'Contact'];
  const practiceLinks = ['Corporate Law', 'Family Law', 'Criminal Defense', 'Real Estate', 'Intellectual Property'];

  const handleLinkClick = (page: Page) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setCurrentPage(page);
      window.scrollTo(0, 0);
  }

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <a onClick={handleLinkClick('Home')} className="flex items-center space-x-2 cursor-pointer">
                <ScaleIcon className="h-8 w-8 text-brand-accent" />
                <span className="text-2xl font-serif font-bold">Juris Chambers</span>
            </a>
            <p className="text-gray-400 text-sm">Providing expert legal solutions with integrity and dedication. Your trusted partner in law.</p>
            <p className="text-gray-400 text-sm">123 Justice Avenue, Suite 500<br/>Metropolis, USA 10001</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-brand-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" onClick={handleLinkClick(link)} className="text-base text-gray-300 hover:text-white transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-brand-accent">Practice Areas</h3>
            <ul className="mt-4 space-y-2">
              {practiceLinks.map(link => (
                <li key={link}>
                  <a href="#" onClick={handleLinkClick('Practice Areas')} className="text-base text-gray-300 hover:text-white transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase text-brand-accent">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Phone: (555) 123-4567</li>
              <li>Email: contact@jurischambers.com</li>
            </ul>
            {/* Social media icons would go here */}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Juris Chambers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
