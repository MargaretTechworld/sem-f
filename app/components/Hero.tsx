'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: '/assets/images/hero1.jpg',
    title: 'Welcome to Our Church',
    description: 'A place of worship, community, and spiritual growth'
  },
  {
    image: '/assets/images/hero2.jpg',
    title: 'Join Our Community',
    description: 'Experience faith, fellowship, and friendship'
  },
  {
    image: '/assets/images/hero3.jpg',
    title: 'Spread the Love',
    description: 'Share the message of hope and compassion'
  }
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[calc(100vh-5rem)] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Image */}
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-5xl font-bold transition-transform duration-1000 ease-out"
                style={{
                  transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                  opacity: index === currentSlide ? 1 : 0,
                }}>
              {slide.title}
            </h1>
            <p className="max-w-2xl text-xl transition-transform duration-1000 delay-200 ease-out"
               style={{
                 transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)',
                 opacity: index === currentSlide ? 1 : 0,
               }}>
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Fixed Buttons */}
      <div className="absolute bottom-32 left-0 right-0 flex justify-center space-x-6">
        <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
          Be Part of Us
        </button>
        <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-300">
          Explore More
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 
              ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero 