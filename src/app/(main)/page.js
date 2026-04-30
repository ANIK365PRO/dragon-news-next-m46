import LeftSideBar from "@/components/homePage/news/LeftSideBar/LeftSideBar";

const getCategories = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  // console.log(data)
  return data.data.news_category
 
}

export default async function Home() {
  const categories = await getCategories()
  // console.log(categories)
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 border my-8">
      <LeftSideBar categories={categories} isActive={'04'}></LeftSideBar>
      <div className='col-span-6 bg-sky-300'>meddle news</div>
      <section className='col-span-3 bg-amber-200'>socile bar</section>
    </div>
  );
}
