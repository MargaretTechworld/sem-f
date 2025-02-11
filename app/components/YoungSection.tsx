const YoungSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">Got younglings?</h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg">
            We place a high value on kids and youth ministry. All our volunteers are background-checked, equipped to teach the Bible in an age-appropriate way, and love working with younglings.
          </p>

          <p className="text-gray-700 text-lg">
            On Sunday mornings, we offer City Kids ministry for children 1-12 years old. All our volunteers are background checked, equipped to teach the Bible in an age-appropriate way, and do their best to keep it fun!
          </p>

          <p className="text-gray-700 text-lg">
            We also offer youth ministry for tweens/teens 12-18 years old called "Rev Crew." Tap below for times/dates.
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
              CITY KIDS
            </button>
            <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
              REV CREW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YoungSection 