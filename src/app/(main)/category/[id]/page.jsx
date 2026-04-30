import LeftSideBar from '@/components/homePage/news/LeftSideBar/LeftSideBar';
import NewsCard from '@/components/homePage/news/NewsCard';
import RightSideBar from '@/components/homePage/news/RightSideBar/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';






const NewsCategoryPage = async({params}) => {
    const {id} = await (params)


    const categories = await getCategories()
    const news = await getNewsByCategoryId(id)
    console.log(news)

    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 border my-8">

        {/* left side bar  */}
        <LeftSideBar categories={categories} isActive={id}></LeftSideBar>


        {/* meddle new by category  */}
        <div className='col-span-6'>

            <h2 className='font-bold text-lg text-zinc-700 mb-4'>Dragon News Home</h2>

            <ul className='flex flex-col gap-4'>
                {
                  news.length > 0 ?   news.map(n => <NewsCard key={n._id} news={n} className="border p-5">
                        </NewsCard>) :
                            <div className='text-4xl text-center my-20'>no news found !</div>
                }
            </ul>

        </div>

        {/* rite Social links */}
        <RightSideBar></RightSideBar>
        
        </div>
    );
};

export default NewsCategoryPage;