import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[30vh] space-y-4'>
            <h2 className='text-orange-400'>This page is not found!</h2>
            
            <Link href={'/'}><button className='bg-orange-400 text-white'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;