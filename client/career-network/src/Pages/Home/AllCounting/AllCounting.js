import React from 'react'
import { AiOutlineFileSearch, AiOutlineUser } from 'react-icons/ai';
import { FaRegNewspaper } from 'react-icons/fa';

function AllCounting() {
  return (
    <div className='md:h-60 h-full bg-secondary text-white md:py-0 py-10'>
        <div className='grid md:grid-cols-3 place-items-center h-full gap-7'>
            <div className='text-center'>
                <div className='flex items-center justify-center text-7xl gap-2'>
                    <AiOutlineUser></AiOutlineUser>
                    <h2 className=''>8k</h2>
                </div>
                <p>8 thousand daily active users</p>
            </div>
            <div className='text-center'>
                <div className='flex items-center justify-center text-7xl gap-2'>
                   <FaRegNewspaper></FaRegNewspaper>
                    <h2 className=''>7k</h2>
                </div>
                <p>Over 7 thousand stories shared </p>
            </div>
            <div className='text-center'>
                <div className='flex items-center justify-center text-7xl gap-2'>
                    <AiOutlineFileSearch></AiOutlineFileSearch>
                    <h2>5k</h2>
                </div>
                <p>Over 5k open job positions</p>
            </div>
        </div>
    </div>
  )
}

export default AllCounting