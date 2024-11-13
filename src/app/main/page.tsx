import React from 'react'

const Herosection = () => {
  return (
    <div className='bg-red-900' >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center text-white bg-no-repeat bg-cover" style={{backgroundImage:"url('/picturesss/back.jpeg') "}}>
        <h1 className="mb-4 text-5xl font-bold">WE ARE PROVIDING YOU BEST FOOD FOR BEAT THE CRAVINGS</h1>
        <p className="mb-6 text-lg">BEST JUNK FOOD ACCORDING TO YOUR TASTE..</p>
        <button className="px-6 py-2 font-bold text-blue-600 transition bg-white rounded hover:bg-blue-500 hover:text-white"><a href="#about" className="text-black-700 hover:text-blue-900">Get Started</a></button>
      </section>
    </div>
  )
}

export default Herosection
