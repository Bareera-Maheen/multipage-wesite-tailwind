import React from 'react'

const Offers = () => {
  return (
    <div className='bg-red-900'>
       <section id="pricing" className="container py-20 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-white">Our Pricing</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105">
            <h3  className="text-2xl font-bold">DAILY PACK</h3>
            <p className="text-xl font-semibold">25,00 rupees</p>
            <button className="px-4 py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700"><a href="/order" className="text-black-700 hover:text-blue-900">Order</a></button><br />
            <button className="px-4 py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700">❤️ Love</button>
          </div>
          <div   className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105">
            <h3 className="text-2xl font-bold"> PARTY PACK</h3>
            <p className="text-xl font-semibold">5,000 rupees</p>
            <button className="px-4 py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700"><a href="/order" className="text-black-700 hover:text-blue-900">Order</a></button><br />
            <button className="px-4 py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700">❤️ Love</button>
          </div>
          <div  className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105">
            <h3 className="text-2xl font-bold">SUPER DUPER PACK</h3>
            <p className="text-xl font-semibold">7,000 rupees</p>
            <button className="px-4 py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700"><a href="/order" className="text-black-700 hover:text-blue-900">Order</a></button><br />
            <button className="px-4 py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700">❤️ Love</button>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Offers
