import React from 'react';

const CategoryCard = ({category}) => {
    return (
        <div>
            <button>
                    <div className="card w-96 shadow-xl my-2">
                        <figure><img className='w-60 h-60' src={category.img} alt="Shoes" /></figure>
                        <div className="card-body text-left">
                            <h2 className="card-title">{category.category}</h2>
                        </div>
                    </div>
                </button>
        </div>
    );
};

export default CategoryCard;