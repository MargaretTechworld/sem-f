'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/images/logo.png"
                alt="Church Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="text-xl font-semibold text-gray-800"></span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/sermons', label: 'Sermons' },
              { href: '/events', label: 'Events' },
              { href: '/pastor', label: 'Pastor' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact Us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100/80 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Donate Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group p-2 w-10 h-10 flex justify-center items-center"
              aria-label="Toggle menu"
            >
              <div className="relative flex overflow-hidden items-center justify-center w-[20px] h-[20px]">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-[42deg] translate-x-px' : ''}`} />
                  <div className={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 ${isMenuOpen ? 'translate-x-10' : ''}`} />
                  <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-[42deg] translate-x-px' : ''}`} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu avec animation améliorée */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out absolute top-full left-0 w-full transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg shadow-xl">
          <div className="px-4 py-3 space-y-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/sermons', label: 'Sermons' },
              { href: '/events', label: 'Events' },
              { href: '/pastor', label: 'Pastor' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact Us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50/80 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 