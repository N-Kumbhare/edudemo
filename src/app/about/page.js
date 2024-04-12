'use client';
import React from 'react';
import Navbar from '../Components/Navbar';
import FooterSection from '../Components/FooterSection';
import Link from 'next/link';
import SchoolClasses from '../Components/SchoolClasses';

// import {Typography, Button } from "@material-tailwind/react";



function About(props) {
    const MoreAboutUs = ()=>{
        console.log("I am clicking")
        
    }
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <div className="relative w-full h-svh my-2">
        <img
          src="https://img.freepik.com/premium-photo/cute-child-boy-doing-homework-clever-kid-drawing-desk-schoolboy-elementary-school-student-drawing-workplace_130265-4387.jpg?w=826"
          alt="image 2"
          className="h-svh w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <h1
              
              className="mb-4 
              text-3xl
              md:text-4xl 
              lg:text-5xl 
              font-Lobster
              text-white"
            >
              
              About Us
            </h1>
            <p
             
              className="mb-12 opacity-80
              text-base md:text-xl lg:text-2xl text-white"
            >
              
              Joy School ERP is integrated  solution for all activities related to school management. 


            </p>
            <div className="flex gap-2">
            <button size="lg" color="white" className="rounded-2xl bg-[#FE5D37] text-white
            text-xs md:text-sm lg:text-base p-2"
            onClick={()=>MoreAboutUs()}>
               <Link href="#footerSection">Learn More</Link> 
              </button>
              <button size="lg" color="white" variant="text" className="rounded-2xl bg-[#343a40] text-white text-xs md:text-sm lg:text-base p-2"> 
                Our Classes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id='footerSection'>
      <div className='flex flex-col mt-0 w-full items-center justify-center p-20 relative'>
        <div className='container grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#103741] font-bold text-xl md:text-3xl lg:text-5xl font-Lobster'>Learn More About Our Work </h1>
                <p className='text-sm md:text-md lg:text-xl'>Joy school ERP Software is a Cloud based ERP software with all the facilities to manage and automate day to day activities like Admission, Fees, HR & Payroll, Transport, Examination, Inventory, Accounts, Library, Infirmary, Shop Reception, Hostel, Class teacher, time table, Attendance, Message etc.</p>
                <p className='text-sm md:text-md lg:text-xl'>This is single cost effective solutions for all teams like Admin, teachers, accountant, librarian, Hotels Staff , Transportation Staff and Parents/Students. You have liberty to customizes  as per your needs and requirement.  </p>
                <p className='text-sm md:text-md lg:text-xl'>Our ERP is capable for providing solutions for fee management, online Payment acceptance,  send overdue fee reminders, and manages fee concession/discount and waiver  approval process. The application may also provide easy solution for homework and assignments management for the students. The application capable to manage school various inventory products including books, stationary and fixed asset etc.</p>
            </div>
            <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center relative'>
                            <div className='bg-[#FFF5F3] w-96 h-96 flex rounded-full hover:bg-[#FE5D37]'>
                                <img className ="rounded-full p-6 items-center justify-center"
                                src="https://www.parents.com/thmb/QEB1bYFTlsqbFAOskckHWTKpk1Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-901208614-2000-9d4cdf4d1ad94fcb97ca78d67836a9d8.jpg" alt="" />
                            </div>
                            <div className='flex absolute bottom-0 gap-4'>
                            <div className='bg-[#FFF5F3] w-48 h-48 flex rounded-full hover:bg-[#FE5D37]'> 
                                <img className ="rounded-full p-4 items-center justify-center" src="https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/06/Weekly_Taking-Turns_Hero-e1592411399738.jpg?w=1000&ssl=1" alt="" />
                            </div>
                            <div className='bg-[#FFF5F3] w-48 h-48 flex rounded-full hover:bg-[#FE5D37]'> 
                                <img className ="rounded-full p-4 items-center justify-center" src="https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/06/Weekly_Taking-Turns_Hero-e1592411399738.jpg?w=1000&ssl=1" alt="" />
                            </div>
                            </div>
                            
                        </div>
            </div>
        </div>
    </div>
      </div>
      <SchoolClasses></SchoolClasses>
      <FooterSection></FooterSection>
            
        </div>
    );
}

export default About;