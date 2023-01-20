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
        <div className='py-7'>
            <div className='text-center w-8/12 mx-auto my-4'> 
                <h2 className='text-4xl font-bold font-secondaryFont'>Categories</h2>
                <p className='mt-4 font-besicFont font-bold text-lg'>Easy-to-use, HR platform with highly 
                    responsive stellar customer support.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 px-10 gap-7'>
               {
                categories.map(category =><CategoryCard key={category.id} category={category}></CategoryCard>)
               }
            </div>
        </div>
    );
};

export default Categories;