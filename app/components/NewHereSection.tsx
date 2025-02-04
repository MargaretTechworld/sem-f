'use client'

import { useState } from 'react'
import Image from 'next/image'

const NewHereSection = () => {
  const [openStep, setOpenStep] = useState<number | null>(null)

  const steps = [
    {
      number: 1,
      title: 'PLAN YOUR VISIT',
      content: 'We would love to meet you! Choose a Sunday service time that works best for you and your family. Our services typically last about 90 minutes and include worship, prayer, and teaching from the Bible. We have programs for children of all ages during each service.'
    },
    {
      number: 2,
      title: 'PIZZA W/THE PASTORS',
      content: 'Join us for a casual meal with our pastoral team! This is a great opportunity to learn more about our church, ask questions, and connect with church leadership. We host these gatherings monthly and provide free pizza for everyone.'
    },
    {
      number: 3,
      title: 'DISCOVERING CITY CHURCH',
      content: 'This is our introductory class where you\'ll learn about our mission, values, and beliefs. You\'ll also discover opportunities to get involved and learn how to become a member. The class is offered monthly and includes lunch.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">NEW HERE?</h2>
            <p className="text-xl font-medium mb-8 text-black">START HERE!</p>

            {/* Accordion Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => setOpenStep(openStep === step.number ? null : step.number)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left text-black"
                  >
                    <span className="font-medium">
                      STEP {step.number}: {step.title}
                    </span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-200 ${
                        openStep === step.number ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openStep === step.number && (
                    <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                      {step.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* What is a typical service like button */}
            <button className="mt-8 px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-all duration-300">
              WHAT IS A TYPICAL SERVICE LIKE?
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/assets/images/church-service.jpg"
              alt="Church Service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewHereSection 