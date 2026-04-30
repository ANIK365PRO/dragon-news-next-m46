import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center flex-col space-y-4 mt-40'>
            <h2 className='text-orange-400 text-5xl'>This page is not found!</h2>
            
            <Link href={'/'}><button className='btn bg-orange-400 text-white'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;