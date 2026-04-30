import React from 'react';

const LeftSideBar = ({categories, isActive}) => {
    return (
        <div className='col-span-3'>
           <h2 className='font-bold text-lg text-zinc-700'>All Categories</h2>

          <ul className='flex flex-col mt-4'>
             {
                categories.map(category => <li key={category.category_id}
                    className={`${isActive === category.category_id && 'bg-zinc-200'} py-2 pl-8 text-md  hover:bg-zinc-100`}>{category.category_name}</li>)
            }
          </ul>
        </div>
    );
};

export default LeftSideBar;