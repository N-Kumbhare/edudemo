import React from 'react'
import Image from 'next/image' 
import Ellipse from './Ellipse'

function PopularTeachers() {

    const EllipseImages = [
        {
            personImage: "https://raajratna.com/wp-content/uploads/2019/01/person3.jpg" 
        },
        {
            personImage: "http://italpresion.com/wp-content/uploads/2019/01/person2.jpg" 
        },
        {
            personImage: "http://italpresion.com/wp-content/uploads/2019/01/person4.jpg" 
        },
    ]
    return (
        <div className='container  w-full mx-auto flex flex-col items-center gap-6'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-center font-Lobster font-bold text-5xl text-[#103741]'>Popular Teachers</h1>
                <p className='text-center text-wrap text-2xl font-Heebo text-[#6c757d]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel, voluptatibus, tempora laborum alias aperiam nulla unde perferendis nostrum ad ducimus veritatis dicta!</p>
            </div>
            <div className='container flex gap-5 items-center justify-center'>
                {
                    EllipseImages.map((item, index) => {
                        return <Ellipse key={index} image={item.personImage} />
                    })
                }



            </div>

        </div>
    )
}

export default PopularTeachers
