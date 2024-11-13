import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="py-4 text-white bg-gray-800">
        <div className="container mx-auto text-center">
          <div>
          <div className="container flex flex-col items-center mx-auto">
        <div className="flex mb-4 space-x-4">
          <a href="https://twitter.com"  rel="noopener noreferrer" className="hover:text-blue-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.643 4.937c-.835.37-1.73.615-2.675.725a4.673 4.673 0 002.034-2.573 9.327 9.327 0 01-2.918 1.118A4.649 4.649 0 0016.35 3c-2.583 0-4.67 2.087-4.67 4.654 0 .365.04.72.118 1.063-3.88-.195-7.33-2.05-9.634-4.865-.404.695-.634 1.5-.634 2.37 0 1.64.838 3.086 2.11 3.925a4.612 4.612 0 01-2.112-.582v.058c0 2.286 1.626 4.188 3.785 4.626-.394.108-.81.166-1.238.166-.303 0-.596-.029-.884-.085.596 1.857 2.325 3.209 4.378 3.25a9.308 9.308 0 01-5.757 1.986c-.373 0-.743-.022-1.106-.065 2.051 1.316 4.493 2.085 7.112 2.085 8.533 0 13.2-7.067 13.2-13.185 0-.2 0-.394-.014-.586.91-.66 1.7-1.48 2.33-2.41z" />
            </svg>
          </a>
          <a href="https://instagram.com"  rel="noopener noreferrer" className="hover:text-pink-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22c-5.528 0-10-4.472-10-10s4.472-10 10-10 10 4.472 10 10-4.472 10-10 10zm5-14c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1zm-5 1c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 5c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1z" />
            </svg>
          </a>
          <a href="https://facebook.com"  rel="noopener noreferrer" className="hover:text-blue-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.925 0-1.675.75-1.675 1.675v21.35c0 .925.75 1.675 1.675 1.675h21.35c.925 0 1.675-.75 1.675-1.675v-21.35c0-.925-.75-1.675-1.675-1.675zm-1.675 23h-4.425v-9.5h3.175l.475-3.675h-3.65v-2.35c0-1.075.3-1.8 1.85-1.8h2v-3h-3c-3.075 0-4.375 1.425-4.375 4v2.325h-2.5v3.675h2.5v9.5h-9.5v-23h18.5v23z" />
            </svg>
          </a>
        </div>
        <div className="flex space-x-4">
          <button  className="px-4 py-2 transition bg-blue-600 rounded hover:bg-blue-700">
           <a href="#up" className="text-black-700 hover:text-blue-900">UP</a>
          </button>
          
        </div>
      </div>
      
          </div>
          <p>&copy; 2024 cravingo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
