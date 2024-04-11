import React from 'react'
import Navbar from './Components/Navbar'
import CarouselWithContent from './Components/CarouselWithContent'
import Facilities from './Components/Facilities'
import AboutStart from './Components/AboutStart'
import TeacherSection from './Components/TeacherSection'
import SchoolClasses from './Components/SchoolClasses'
import MakeAppointment from './Components/MakeAppointment'
import PopularTeachers from './Components/PopularTeachers'
import WhatClientSay from './Components/WhatClientSay'
import FooterSection from './Components/FooterSection' 

export default function HomePage() {
  return (
    <div className='relative'>
      <Navbar></Navbar>
      <CarouselWithContent></CarouselWithContent>
      <Facilities></Facilities>
      <AboutStart></AboutStart>
      {/* <TeacherSection></TeacherSection> */}
      <SchoolClasses></SchoolClasses>
      <MakeAppointment></MakeAppointment>
      {/* <PopularTeachers></PopularTeachers> */}
      <WhatClientSay></WhatClientSay>
      <FooterSection></FooterSection>
    </div>
  )
}


