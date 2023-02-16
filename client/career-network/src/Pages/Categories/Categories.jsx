import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>{
            setCategories(data)
        })
    },[])

    return (
        <div className=' py-14 bg-home '>
            <div className='text-center w-8/12 mx-auto mb-10'> 
                <h2 className='text-4xl font-bold text-sky-800 '>Categories</h2>
                <p className='mt-2 text-lg'>Easy-to-use, HR platform with highly 
                    responsive stellar customer support.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 px-10 gap-7'>
               {
                categories.map(category =><CategoryCard key={category._id} category={category}></CategoryCard>)
               }
            </div>
        </div>
    );
};

export default Categories;