import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Articles = () => {
    const [cards,setCards]=useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/articles')
        .then(res=>res.json())
        .then(data=>setCards(data))
    })
    return (
        <div className='m-10'>
            <div className='bg-slate-50 shadow rounded-xl'>
                <div className='m-8'>
                    <div className='rounded-xl bg-gray-100 text-black border shadow-2xl p-6'>
                        {
                            cards && cards?.map(card=><div className="w-full mt-10 card bg-base-100 shadow-xl">
                            <figure><img src={card.image} alt="Shoes" /></figure>
                            <div className='flex justify-between'>
                            <p className='font-bold text-xl ml-8'>Author: {card.name}</p>
                            <button className="btn btn-primary mr-8 hover:bg-blue-500">Edit</button>
                            </div>
                            <div className="card-body">
                              <h2 className="card-title">{card.title}</h2>
                              <p>{card.post}</p>
                              
                            </div>
                          </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;