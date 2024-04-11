import React from 'react'
import Card from './Card'

function SchoolClasses() {

    const CardClasses = [
        {
            image:"https://www.weareteachers.com/wp-content/uploads/Directed-Drawing-Art-Projects-For-Kids-2.jpg",
            title: "Art & Drawing",
        },
        {
            image:"https://cdn.firstcry.com/education/2023/01/21171428/Teaching-Primary-Colors-to-Preschoolers.jpg",
            title: "Color Management",
        },
        {
            image:"https://www.baby-chick.com/wp-content/uploads/2019/11/Cute-little-boy-playing-with-wooden-train-1043157552_2125x1416.jpeg",
            title: "Athletic & Dance",
        },
        {
            image:"https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/06/Weekly_Turn-Taking-Games_Body-1.jpg?w=1000&ssl=1",
            title: "Language & Speaking",
        },
        {
            image:"https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/06/Weekly_Taking-Turns_Hero-e1592411399738.jpg?w=1000&ssl=1",
            title: "Religion & History",
        },
        {
            image:"https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/05/Share_Hero-e1594921131731.jpg?w=1263&ssl=1",
            title: "General Knowledge",
        },
    ]
  return (
    <div className='container mx-auto flex flex-col items-center gap-6 text-[#103741]'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-center font-Lobster font-bold text-5xl'>School Classes</h1>
            <p className='text-center text-wrap text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente eligendi culpa ad aut reprehenderit deleniti dignissimos repellat accusamus, facere a quod quasi.</p>
        </div>
        <div className=' place-content-center grid grid-cols-3 w-full flex-wrap gap-2'>
            {
                CardClasses.map((item)=>{
                    return <Card key = {item.title} title ={item.title} image={item.image}/>
                })
            }
        </div>  
      
    </div>
  )
}

export default SchoolClasses
