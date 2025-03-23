import React from 'react'
import { Link } from 'react-router-dom'
import bob from '../assets/Others/bob.jpg'
import coc from '../assets/Others/coc.jpg'
import w_ses from '../assets/Others/w_ses.jpg'
import cp_ses from '../assets/Others/cp_ses.jpg'

const Events = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className="py-15 px-5 w-full lg:w-[85%]">
            <h2 className='text-center text-2xl text-slate-950 font-semibold px-5 mb-8'>Upcoming Events</h2>
            <div className='mt-10 flex flex-col lg:flex-row items-center justify-center flex-wrap gap-5'>
                <div className='w-[260px] border rounded-sm overflow-hidden'>
                    <img className='w-full' src={coc} alt="" />
                    <div className='p-2'>
                        <p className='text-sm'>17 April 2025 | Tue</p>
                        <h3 className='text-xl font-semibold'>Clash of Codes 2025</h3>
                        <Link className='px-5 py-1 inline-block mt-2 text-sm rounded-xs bg-orange-500'>Register</Link>
                    </div>
                </div>
                <div className='w-[260px] border rounded-xs overflow-hidden'>
                    <img className='w-full' src={bob} alt="" />
                    <div className='p-2'>
                        <p className='text-sm'>28 April 2025 | Fri</p>
                        <h3 className='text-xl font-semibold'>Battles of Brain 2025</h3>
                        <Link className='px-5 py-1 inline-block mt-2 text-sm rounded-xs bg-orange-500'>Register</Link>
                    </div>
                </div>
                <div className='w-[260px] border rounded-xs overflow-hidden'>
                    <img className='w-full' src={w_ses} alt="" />
                    <div className='p-2'>
                        <p className='text-sm'>13 Feb 2025 | Tue</p>
                        <h3 className='text-xl font-semibold'>Empowering Girls in CP</h3>
                        <button disabled className='px-5 py-1 inline-block mt-2 text-sm rounded-xs bg-orange-500 opacity-50'>Register</button>
                    </div>
                </div>
                <div className='w-[260px] border rounded-xs overflow-hidden'>
                    <img className='w-full' src={cp_ses} alt="" />
                    <div className='p-2'>
                        <p className='text-sm'>4 Feb 2025 | Tue</p>
                        <h3 className='text-xl font-semibold'>Session on CP</h3>
                        <button disabled className='px-5 py-1 inline-block mt-2 text-sm rounded-xs bg-orange-500 opacity-50'>Register</button>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex'>
                <Link className='mx-auto px-5 py-1.5 bg-gray-300 rounded-full'>See More</Link>
            </div>
        </div>
    </div>
  )
}

export default Events