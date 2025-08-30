import React from 'react'

export const ComboModal = ({onClose}) => {
  return (
    <div className='inset-0 fixed bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-lg p-6 max-w-sm w-full'>
        <h2 className='text-2xl font-bold mb-4'>Purchase Combo Pack</h2>
        <p className='mb-4'>Are you sure you want to purchase the Combo Pack?</p>
        <div className='flex justify-end'>
          <button className='bg-red-500 text-white px-4 py-2 rounded-lg mr-2'>Cancel</button>
          <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

