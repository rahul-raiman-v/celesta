import { CircleCheck } from 'lucide-react'
import React from 'react'

export const ComboPackCard = ({ onOpen }) => {
  return (
    <div className=' rounded-xl shadow-md p-8 flex flex-col backdrop-blur-3xl bg-white/10 border border-gray-400 max-w-sm '>
        <p className="text-3xl leading-relaxed font-bold text-center mb-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Student Pass</p>
        <p className="text-center text-4xl font-bold mb-6 leading-relaxed text-white">₹499</p>
        <ul className="space-y-3 text-gray-500 mb-8 flex-grow">
            <li className="flex items-center gap-1.5 "><CircleCheck className='size-5 text-green-400' /> 1-Day General Access</li>
            <li className="flex items-center gap-1.5 "><CircleCheck className='size-5 text-green-400' /> Access to All Events</li>
            <li className="flex items-center gap-1.5 "><CircleCheck className='size-5 text-green-400' /> Food Coupons</li>
        </ul>
        <button onClick={() => onOpen(true)} className="mt-auto cursor-pointer text-center w-full bg-amber-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-amber-200 transition duration-300 shadow-lg text-lg">Buy Now</button>
    </div>
  )
}

