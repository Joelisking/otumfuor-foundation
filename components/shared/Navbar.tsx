'use client';

import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activePath = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => activePath === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl flex items-center justify-between mx-auto py-4 px-8 xl:px-0">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-36">
            <Image
              src={logo}
              alt="OTIIF Logo"
              className="object-contain"
              fill
            />
          </div>
        </Link>

        {!isMenuOpen && (
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        )}

        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}>
            <span className="sr-only">Close main menu</span>
            <X className="w-5 h-5" />
          </button>
        )}

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto absolute md:static top-16 left-0 right-0 md:top-auto`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 shadow-md md:shadow-none">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:bg-blue-50 md:hover:bg-transparent md:hover:text-primary md:p-0 relative ${
                  isActive('/')
                    ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-gray-900'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 relative ${
                  isActive('/about')
                    ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-gray-900'
                }`}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/stories"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 relative ${
                  isActive('/stories')
                    ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-gray-900'
                }`}>
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 relative ${
                  isActive('/contact')
                    ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-gray-900'
                }`}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://manhyiapalace.org/"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 relative ${
                  isActive('')
                    ? 'text-primary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                    : 'text-gray-900'
                }`}>
                Manhyia Palace
              </Link>
            </li>
            <li className="bg-primary py-1.5 px-4 rounded-md cursor-pointer hover:bg-primary/90 hover:scale-105 transition-all">
              <Link
                href="/donate"
                onClick={closeMenu}
                className={`py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent text-white md:border-0 md:p-0 ${
                  isActive('/donate')
                    ? 'text-primary font-bold'
                    : 'text-gray-900'
                }`}>
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
