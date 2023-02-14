import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {id, category_name, img} = category
    return (
        <Link to={`/category/${category_name}`} className=''>
            <div key={id} className='shadow-md shadow-slate-200 rounded-lg bg-white hover:bg-sky-900 hover:text-white  duration-700 transition-colors'>
                <div className="w-full p-3 flex justify-start gap-4 items-center">
                    <img className='w-32 h-32 rounded-lg' src={img} alt="Shoes" />
                    <div className="">
                        <h2 className="card-title font-besicFont text-sky-500 text-2xl ">{category_name}</h2>
                        <p className='ml-2'>30 post available</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;