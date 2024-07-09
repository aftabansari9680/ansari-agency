import React from 'react'
import Clients from './Clients'

const Grahak = () => {
  return (
    <div>
    <div className="flex flex-col items-center gap-5 p-8 bg-black">
      <h1>
        <span className="bg-gradient-to-b from-purple-400  to-black text-transparent bg-clip-text font-bold text-5xl md:text-7xl">
          Testimonials
        </span>
      </h1>
      <div className="text-white font-bold text-xl md:text-2xl">
        What Our <span className="text-purple-500">Clients</span> Says
      </div>
    </div>

    <Clients />
  </div>
  )
}

export default Grahak