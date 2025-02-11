'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100/80 transition-all duration-300">
              Home
            </Link>
            <Link href="/sermons" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100/80 transition-all duration-300">
              Sermons
            </Link>
            <Link href="/events" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100/80 transition-all duration-300">
              Events
            </Link>
            
            {/* Branches Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100/80 transition-all duration-300 flex items-center space-x-1">
                <span>Branches</span>
                <svg 
                  className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-1">
                  <Link href="/branches/central" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Central Branch
                  </Link>
                  <Link href="/branches/north" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    North Branch
                  </Link>
                  <Link href="/branches/south" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    South Branch
                  </Link>
                  <Link href="/branches/east" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    East Branch
                  </Link>
                  <Link href="/branches/west" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    West Branch
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pastor" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100/80 transition-all duration-300">
              Pastor
            </Link>
            <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100/80 transition-all duration-300">
              About
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100/80 transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Donate Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          {isMounted && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative group p-2 w-8 h-8 flex justify-center items-center"
                aria-label="Toggle menu"
              >
                <div className="relative flex overflow-hidden items-center justify-center w-8 h-8">
                  <span 
                    className={`absolute h-[2px] w-7 bg-gray-800 transform transition-all duration-300 ease-in-out
                      ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}
                  />
                  <span 
                    className={`absolute h-[2px] w-5 bg-gray-800 transform transition-all duration-200 ease-in-out
                      ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <span 
                    className={`absolute h-[2px] w-6 bg-gray-800 transform transition-all duration-300 ease-in-out
                      ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}
                  />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu avec animation améliorée */}
      {isMounted && (
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
      )}
    </nav>
  )
}

export default Navbar 