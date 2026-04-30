export const getCategories = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  // console.log(data)
  return data.data.news_category
 
}

export const getNewsByCategoryId = async (id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
  const data = await res.json()
  console.log(data.data , "id category")
  return data.data
 
}