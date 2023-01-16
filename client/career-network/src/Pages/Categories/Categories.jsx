import React from 'react';
import categoriesData from '../../CategoriesData/CategoriesData';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const categories = categoriesData;
    
    return (
        <div className='py-7'>
            <div className='text-center my-4'> 
                <h2 className='text-4xl font-bold font-mono'>Categories</h2>
                <p className='font-medium'>Easy-to-use, HR platform with highly <br />
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