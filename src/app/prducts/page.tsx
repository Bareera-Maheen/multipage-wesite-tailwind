import Link from 'next/link'
import React from 'react';

const Products = () => {
  return (
    <div className='bg-red-900'>
       <section  id="prducts" className="container py-20 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-white">FOOD</h2>
        {/* 1-4 */}
        <div className="flex items-center justify-center gap-3 ">
          
       
        <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
          <img src="/picturesss/s1.jpeg"  />
          <h2 className="mb-10 text-4xl font-bold text-center">PATTIE BUGUR</h2>
            <p className="text-gray-600"><del>2000 </del> <em>Rs</em>  <b>1750</b></p>
            
            <br />
            <button  id="j" className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"><Link href="/order" className="text-black-700 hover:text-blue-900">Order Now</Link></button>
          
          
           
          </div>
          
         </div>
         <br />
         <div className="flex justify-center ">
          
       
        <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
          <img src="/picturesss/s2.jpeg"  />
          <h2 className="mb-10 text-4xl font-bold text-center">SUPER PACK</h2>
            <p className="text-gray-600"><del>2000 </del> <em>Rs</em>  <b>1750</b></p>
            <br />
            <button  id="j" className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"><Link href="/order" className="text-black-700 hover:text-blue-900">Order Now</Link></button>
          
          
          </div>
          
         </div>
         </div>
         <br /><br />
         
         
         <div className="flex items-center justify-center gap-3 ">
          
          
          <div className="flex space-x-4 ">
            <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
            <img src="/picturesss/s3.jpeg" />
            <h2 className="mb-10 text-4xl font-bold text-center">DAILY BURGUR</h2>
              <p className="text-gray-600"><del>2000 </del> <em>Rs</em>  <b>1750</b></p>
              <br />
              <button  id="j" className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"><Link href="/order" className="text-black-700 hover:text-blue-900">Order Now</Link></button>
          
            
            </div>
            
           </div>
           <br />
           <div className="flex justify-center ">
            
          
          <div className="flex space-x-4 ">
            <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
            <img src="/picturesss/s4.jpeg"  />
            <h2 className="mb-10 text-4xl font-bold text-center">PARTY PACK</h2>
              <p className="text-gray-600"><del>2000 </del> <em>Rs</em>  <b>1750</b></p>
              <br />
              <button  id="j" className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"><Link href="/order" className="text-black-700 hover:text-blue-900">Order Now</Link></button>
          </div>
           </div>
           </div>
           </div>
        
          </div>
          <br /><br />
         
            {/* 5-8 */}
            <div className="flex items-center justify-center gap-3 ">
          
          
          <div className="flex space-x-4 ">
            <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
            <img src="/picturesss/pic 5.jpeg"  />
            <h2 className="mb-10 text-4xl font-bold text-center">ZINGER BURGUR</h2>
              <p className="text-gray-600"><del>2000 </del> <em>Rs</em>  <b>1750</b></p>
              <br />
              
              <button  id="j" className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"><Link href="/order" className="text-black-700 hover:text-blue-900">Order Now</Link></button>
          
            
            </div>
            
           </div>
           <br />
           <div className="flex justify-center ">
            
         
          <div className="flex gap-1 space-x-4 ">
            <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
            <img src="/picturesss/s6.jpeg"  />
            <h2 className="mb-10 text-4xl font-bold text-center">MIX  PIZZA</h2>
              <p className="text-gray-600"><del>2000 </del> <em>Rs</em>  <b>1750</b></p>
              <br />
              <button  id="j" className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"><Link href="/order" className="text-black-700 hover:text-blue-900">Order Now</Link></button>
          
             
              
            
            
            </div>
            
           </div>
           </div>
           
           <br /><br />
           
           <div className="flex items-center justify-center gap-3 ">
            
           
            <div className="flex space-x-4 ">
              <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
              <img src="/picturesss/s7.jpeg"  />
              <h2 className="mb-10 text-4xl font-bold text-center">FRENCH PIZZA</h2>
                <p className="text-gray-600"><del>2000 </del> <em>Rs</em>  <b>1750</b></p>
                
                <br />
               <button  id="j" className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"><Link href="/order" className="text-black-700 hover:text-blue-900">Order Now</Link></button>
          
              
              </div>
              
             </div>
              <br />
             <div className="flex justify-center ">
              
           
            <div className="flex gap-1 space-x-4 ">
              <div className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 w-60">
              <img src="/picturesss/s8.jpeg"   />
              <h2 className="mb-10 text-4xl font-bold text-center">FRIES BOTTIES</h2>
                <p className="text-gray-600"> <del>2000 </del> <em>Rs</em>  <b>1750</b></p>
                <br />
                <br />
                <button  id="j" className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"><Link href="/order" className="text-black-700 hover:text-blue-900">Order Now</Link></button>
                </div>
             </div>
             </div>
             </div>
          
            </div>
      </section>
    </div>
  )
}

export default Products
