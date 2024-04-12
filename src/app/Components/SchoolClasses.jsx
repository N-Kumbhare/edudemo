import React from 'react'
import Card from './Card'

function SchoolClasses() {

    const CardClasses = [
        {
            image:"https://cdn.create.vista.com/api/media/medium/12568141/stock-photo-touch-screen?token=",
            title: "Single Solution ",
            description:"A One Stop Solution for school Management in under one roof."
        },
        {
            image:"https://cdn.firstcry.com/education/2023/01/21171428/Teaching-Primary-Colors-to-Preschoolers.jpg",
            title: "Financial ",
            description:"Integrated Fee Management system , Accounting , Expenses Management and Payroll ."
        },
        {
            image:"https://www.baby-chick.com/wp-content/uploads/2019/11/Cute-little-boy-playing-with-wooden-train-1043157552_2125x1416.jpeg",
            title: "Analytics and Reporting ",
            description:"system generate various user specific drill drown report and dashboard based on system captured data."
        },
        {
            image:"https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/06/Weekly_Turn-Taking-Games_Body-1.jpg?w=1000&ssl=1",
            title: "Role Based Management ",
            description:"User can define custom roles based activates and right management "
        },
        {
            image:"https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/06/Weekly_Taking-Turns_Hero-e1592411399738.jpg?w=1000&ssl=1",
            title: "Admission Suite",
            description:"Increase and  manage admissions using admission online portal and walk-in and digital enquires.."
        },
        {
            image:"https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/05/Share_Hero-e1594921131731.jpg?w=1263&ssl=1",
            title: "Third Party Integrations",
            description:"Payment Gateway, SMS , WhatsApp etc."
        },
    ]
  return (
    <div className='container mx-auto flex flex-col items-center justify-center pl-8 relative gap-6 text-[#103741] my-5'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-center font-Lobster font-bold text-3xl md:text-4xl lg:text-5xl'>Why Us</h1>
            {/* <p className='text-center text-wrap text-md md:text-xl lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente eligendi culpa ad aut reprehenderit deleniti dignissimos repellat accusamus, facere a quod quasi.</p> */}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full flex-wrap gap-6'>
            {
                CardClasses.map((item)=>{
                    return <Card key = {item.title} title ={item.title} image={item.image} description={item.description}/>
                })
            }
        </div>  
      
    </div>
  )
}

export default SchoolClasses
