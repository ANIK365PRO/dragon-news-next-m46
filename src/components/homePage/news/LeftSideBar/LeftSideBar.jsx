import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, isActive}) => {
    return (
        <div className='col-span-3'>
           <h2 className='font-bold text-lg text-zinc-700 mb-4'>All Categories</h2>

          <ul className='flex flex-col'>
             {
                categories.map(category => <li key={category.category_id}
                    className={`${isActive === category.category_id && 'bg-pink-500 text-white'}`}>

                        <Link className='border/70 block py-2 pl-8 text-md' href={`/category/${category.category_id}`}>{category.category_name}</Link>

                    </li>)
            }
          </ul>
        </div>
    );
};

export default LeftSideBar;