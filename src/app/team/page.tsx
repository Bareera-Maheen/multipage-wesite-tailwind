import React from 'react'

const Team = () => {
  return (
    <div className='bg-red-900'>
      <section id="members" >
        <h2 className="mb-10 text-4xl font-bold text-center text-white">Our Team Members </h2>
        <div className="flex gap-12 space-x-4">
          <br /><br /><br />
        <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
          <img src="/picturesss/m4.webp"  />
            <h3 className="text-xl font-semibold">RESTAURANT OWNER</h3>
            <p className="text-gray-600">Role: ALL RIDER</p>
            
          </div>
          
          <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
          <img src="/picturesss/m1.webp"  />
            <h3 className="text-xl font-semibold">RIGHT HAND</h3>
            <p className="text-gray-600">Role: chef manager</p>
            
          </div>
          <br />
          <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
          <img src="/picturesss/m2.webp"  />
            <h3 className="text-xl font-semibold">ASSISTANT</h3>
            <p className="text-gray-600">Role: counter manager</p>
            
          </div>
          
           <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
          <img src="/picturesss/m3.webp"  />
            <h3 className="text-xl font-semibold">LEFT HAND</h3>
            <p className="text-gray-600">Role: servings manager</p>
            
          </div>
         
        </div>
      </section> 
    </div>
  )
}

export default Team
