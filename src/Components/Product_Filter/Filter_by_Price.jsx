// import React, { useState } from 'react'

// export default function Filter_by_Price() {
//     const [MinPrice,setMinPrice]=useState(0);
//     const[MaxPrice,setMaxPrice]=useState(5000)
//   return (
//     <div>
//         <h1 className='text-2xl font-semibold py-1'>Select Price</h1>
//    <form className='py-2'>
//     <div>
//         <label className='text-xl'>MinPrice: </label>
//         <input type="number" value={MinPrice} className='text-xl ' />
//     </div>
//      <div className='flex space-x-2'>
//         <label className='text-xl'>MaxPrice: </label>
//         <input type="number" value={MaxPrice} className='text-xl' />
//     </div>
//    </form>
//     </div>
//   )
// }
import React, { useContext, useState } from 'react'
import { Product_Context } from '../ContextApi/ContextApi'

export default function Filter_by_Price() {

const {MinPrice,setMinPrice,MaxPrice,setMaxPrice}=useContext(Product_Context)

  return (
    <div className="max-w-md mx-auto  rounded-lg">
      <h1 className="text-2xl font-bold  mb-4">💰 Select Price</h1>
      
      <form className="space-y-4">
        {/* Min Price */}
        <div className="flex flex-col">
          <label className="text-xl font-medium  mb-1">Minimum Price</label>
          <input 
            type="number" 
            value={MinPrice} 
            onChange={(e) => setMinPrice(Number(e.target.value))} 
            className="w-[70%] px-3 py-1 border text-2xl rounded-md focus:outline-none"
          />
        </div>

        {/* Max Price */}
        <div className="flex flex-col">
          <label className="text-xl font-medium  mb-1">Maximum Price</label>
          <input 
            type="number" 
            value={MaxPrice} 
            onChange={(e) => setMaxPrice(Number(e.target.value))} 
            className="w-[70%] px-3 py-1 border text-2xl rounded-md focus:outline-none  "
          />
        </div>

      </form>
    </div>
  )
}
