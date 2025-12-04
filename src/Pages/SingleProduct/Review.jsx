import React, { useState } from 'react'

export default function Review( {openedProduct}) {
    const [Toggle,setToggle]=useState(false)
   
  return (
<div className="border-t flex flex-col items-center justify-center group">
          <ul className="flex space-x-4 py-1 ">
            <li onClick={()=>setToggle(false)}
            className={`${!Toggle ? "border-b":"border-none"}`} >Description
             
            </li>
            <li onClick={()=>setToggle(!Toggle)} className={`${Toggle ? "border-b":"border-none"}`} > Reviews</li>
          </ul>
         {
          !Toggle&&  <p className='w-[80%] flex items-center justify-center p-2 rounded bg-amber-50 '>
            {openedProduct.description}
          </p>
         }
{
Toggle && <p className='w-[80%]  flex items-center justify-center p-2 rounded bg-amber-50'><p className=''>{openedProduct.title} </p></p>
}
        </div>  )
}
