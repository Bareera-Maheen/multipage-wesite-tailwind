import React from 'react'

const Order = () => {
  return (
    <div className='bg-red-900'>
       <section id="order" className="container py-20 mx-auto text-center">
        <h2 className="mb-10 text-4xl font-bold text-white">Place Your Order</h2>
        <form className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-left text-gray-700" htmlFor="name">Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-left text-gray-700" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-left text-gray-700" htmlFor="plan">Choose a Plan</label>
            <select id="plan" className="w-full p-2 border border-gray-300 rounded">
            <option >daily food</option>
            <option> party pack</option>
            <option> super duper pack</option>
            <option> other</option>
           
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit Order
          </button>
        </form>
      </section>

    </div>
  )
}

export default Order
