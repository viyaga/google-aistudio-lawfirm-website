
import React, { useState } from 'react';
import type { Page } from '../types';
import { ScaleIcon, MenuIcon, XIcon } from './icons/Icons';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, setCurrentPage, children, isMobile = false }) => {
  const isActive = currentPage === page;
  const baseClasses = "cursor-pointer font-medium transition-colors duration-300";
  const activeClasses = "text-brand-accent";
  const inactiveClasses = "text-white hover:text-brand-accent";
  const mobileClasses = "block py-2 px-4 text-sm";
  
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        setCurrentPage(page);
      }}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${isMobile ? mobileClasses : 'px-4 py-2'}`}
    >
      {children}
    </a>
  );
};


const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pages: Page[] = ['Home', 'About Us', 'Practice Areas', 'Our Attorneys', 'Contact'];

  return (
    <nav className="bg-brand-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <a
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('Home');
              }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <ScaleIcon className="h-8 w-8 text-brand-accent" />
              <span className="text-white text-2xl font-serif font-bold">Juris Chambers</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {pages.map((page) => (
                <NavLink key={page} page={page} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                  {page}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-brand-secondary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {pages.map((page) => (
                <NavLink key={page} page={page} currentPage={currentPage} setCurrentPage={(p) => {setCurrentPage(p); setIsMobileMenuOpen(false);}} isMobile>
                  {page}
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
