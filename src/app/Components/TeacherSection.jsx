import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TeacherSection() {
  return (
    <div className='grid grid-cols-2 m-10 bg-[#FFF5F3] mx-10 gap-9'>
        <div className='w-1/2'>
            <img className="rounded-lg" src="https://img.freepik.com/free-photo/happy-teacher-with-students-background_1098-2917.jpg?w=826&t=st=1711102990~exp=1711103590~hmac=ddd1d863ed03b3f2fbc81fbb9adefe2c1a92d8060b797c448573154f61a05829" alt="" />
        </div>
        <div className='flex flex-col  justify-center text-wrap w-1/2 p-20 gap-6'>
            <h3 className='text-[#103741] text-4xl font-bold font-Lobster'>Become a Teacher</h3>
            <p className='text-[#6c757d] text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores voluptatum officia tempora, saepe repudiandae, nobis quae illum blanditiis magnam incidunt hic exercitationem?</p>
            <div className='h-12 bg-[#FE5D37] flex items-center justify-center p-8 rounded-xl gap-3 text-white font-bold'>
                   <span className='text-xl'>Get Started Now</span> 
                    <FontAwesomeIcon icon={faArrowRight} className='w-6'></FontAwesomeIcon>
            </div>
        </div>
       
    </div>
  )
}

export default TeacherSection
