import React from 'react'

export default function ProductCard({prd}) {
  return (
    <div onClick={()=>window.location = `detail/${prd.id}`}  className='hover:border-indigo-600 w-1/5 max-h-96 border rounded-lg m-2 flex flex-col items-center p-1 space-y-2'>
      <div className='flex justify-center items-center'><img className='object-cover h-40' src={prd?.image} alt="" /></div>
        <div className='font-bold h-20 text-center max-h-10'>{(prd.title).substring(0,45)} ...</div>
        <div className='text-center opacity-50 text-sm  max-h-10'>{(prd.description).substring(0 ,50)} ...</div>
        <div className='font-bold text-lg  max-h-10'>{prd.price} &euro;</div>
        <button className='bg-indigo-600 w-full p-2 rounded-lg text-white  max-h-10'>Add to cart </button>
    </div>
  )
}
