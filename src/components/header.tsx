import Link from 'next/link'
import React from 'react'

const Navbar
 = () => {
  return (
    <div>
      <header className="flex bg-red-700 gap-80  ">
           
      <div className="flex justify-start">
                     {/* logo img */}
               
                <img src="/picturesss/logo.jfif" alt="logo" height={30} width={30}/>
                <p className="text-2xl font-bold text-white">CRAVINGO <span>.com</span></p> 
                </div>
               
               
              
                <nav className="flex py-1 font-semibold gap-14 justify-items-center">
                
                <Link href="/main" className="text-white text-black-700 hover:text-blue-900">Home</Link>
            
            <Link href="/about" className="text-white text-black-700 hover:text-blue-900">About</Link>
            <Link href="/offers" className="text-white text-black-700 hover:text-blue-900">Price</Link>
            <Link href="/team" className="text-white text-black-700 hover:text-blue-900">Team</Link>
            <Link href="/prducts" className="text-white text-black-700 hover:text-blue-900">Products</Link>
            
           
         
          </nav>
         
         
            </header>
    </div>
  )
}

export default Navbar

