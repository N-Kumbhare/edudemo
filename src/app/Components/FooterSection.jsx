
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBacteria, faCamera, faCameraRetro, faCoffee, faDownLeftAndUpRightToCenter, faEnvelope, faGreaterThan, faLocationPin, faPhone, faTShirt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Link from 'next/link'

function FooterSection() {
  return (
    <div className=' bg-[#103741] text-white mx-auto w-full flex flex-col items-center justify-center p-20 relative'>
        <div className="container py-5">
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
                <div className='grid-cols-3 flex flex-col gap-4'>
                    <h3 className='text-white mb-4 font-Lobster font-bold text-4xl'>Get In Touch</h3>
                    <div className='flex gap-4 text-[#6c757d] font-Heebo text-xl font-medium'>
                        <FontAwesomeIcon className="w-6 h-6 rounded-s" icon={faLocationPin}/>
                        <span>123 Street, New York, USA</span>
                    </div>
                    <div className='flex gap-4 text-[#6c757d] font-Heebo text-xl font-medium'>
                        <FontAwesomeIcon className="w-6 h-6 rounded-s" icon={faPhone}/>
                        <span>+012 345 67890</span>
                    </div>
                    <div className='flex gap-4 text-[#6c757d] font-Heebo text-xl font-medium'>
                        <FontAwesomeIcon className="w-6 h-6 rounded-s" icon={faEnvelope}/>
                        <span>info@example.com</span>
                    </div>
                    
                    <div className='flex gap-2'>
                        <a href="" className='w-12 h-12 border-2 border-inherit flex items-center justify-center bg-transparent rounded-full hover:bg-deep-orange-500 '><FontAwesomeIcon className='w-6 h-6' icon={faBacteria}/></a>
                        <a href="" className='w-12 h-12 border-2 border-inherit flex items-center justify-center bg-transparent rounded-full hover:bg-deep-orange-500 '><FontAwesomeIcon className='w-6 h-6' icon={faCamera}/></a>
                        <a href="" className='w-12 h-12 border-2 border-inherit flex items-center justify-center bg-transparent rounded-full hover:bg-deep-orange-500 '><FontAwesomeIcon className='w-6 h-6' icon={faCoffee}/></a>
                        <a href="" className='w-12 h-12 border-2 border-inherit flex items-center justify-center bg-transparent rounded-full hover:bg-deep-orange-500 '><FontAwesomeIcon className='w-6 h-6' icon={faTShirt}/></a>
                    </div>
                </div>
                <div className='grid-cols-3 flex flex-col gap-1' >
                    <h3 className='text-white mb-4 font-Lobster font-bold text-4xl'>Quick Links</h3>
                    <Link href="/about" className='text-[#6c757d] font-Heebo text-xl font-medium items-center gap-2 flex hover:text-[#FE5D37]'> <FontAwesomeIcon className='w-3 h-3' icon={faGreaterThan}/> About Us</Link>
                    <a href="" className='text-[#6c757d] font-Heebo text-xl font-medium items-center gap-2 flex hover:text-[#FE5D37]'><FontAwesomeIcon className='w-3 h-3' icon={faGreaterThan}/>Contact Us</a>
                    <a href="" className='text-[#6c757d] font-Heebo text-xl font-medium items-center gap-2 flex hover:text-[#FE5D37]'><FontAwesomeIcon className='w-3 h-3' icon={faGreaterThan}/>Our Services</a>
                    <a href="" className='text-[#6c757d] font-Heebo text-xl font-medium items-center gap-2 flex hover:text-[#FE5D37]'><FontAwesomeIcon className='w-3 h-3' icon={faGreaterThan}/>Privacy Policy</a>
                    <a href="" className='text-[#6c757d] font-Heebo text-xl font-medium items-center gap-2 flex hover:text-[#FE5D37]'><FontAwesomeIcon className='w-3 h-3' icon={faGreaterThan}/>Terms & Conditions</a>
                </div>
                <div className='grid-cols-3 flex flex-col gap-1'>
                    <h3 className='text-white mb-4 font-Lobster font-bold text-4xl'>Photo Gallery</h3>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='bg-white rounded-md w-18 h-18 flex items-Center'><img className="rounded-lg border-4 border-white" src="https://www.weareteachers.com/wp-content/uploads/Directed-Drawing-Art-Projects-For-Kids-2.jpg" alt="" /></div>
                        <div className='bg-white rounded-md w-18 h-18 flex items-Center'><img className="rounded-lg border-4 border-white" src="https://www.baby-chick.com/wp-content/uploads/2019/11/Cute-little-boy-playing-with-wooden-train-1043157552_2125x1416.jpeg" alt="" /></div>
                        <div className='bg-white rounded-md w-18 h-18 flex items-Center'><img className="rounded-lg border-4 border-white" src="https://www.baby-chick.com/wp-content/uploads/2019/11/Cute-little-boy-playing-with-wooden-train-1043157552_2125x1416.jpeg" alt="" /></div>
                        <div className='bg-white rounded-md w-18 h-18 flex items-Center'><img className="rounded-lg border-4 border-white" src="https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/06/Weekly_Turn-Taking-Games_Body-1.jpg?w=1000&ssl=1" alt="" /></div>
                        <div className='bg-white rounded-md w-18 h-18 flex items-Center'><img className="rounded-lg border-4 border-white" src="https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/06/Weekly_Taking-Turns_Hero-e1592411399738.jpg?w=1000&ssl=1" alt="" /></div>
                        <div className='bg-white rounded-md w-18 h-18 flex items-Center'><img className="rounded-lg border-4 border-white" src="https://i0.wp.com/lovevery-blog.com/wp-content/uploads/2020/05/Share_Hero-e1594921131731.jpg?w=1263&ssl=1" alt="" /></div>    
                    </div>
                </div>
                <div className="grid-cols-3 flex flex-col gap-1">
                        <h3 className="text-white mb-4 font-Lobster font-bold text-4xl">Newsletter</h3>
                        <p className='text-[#6c757d] font-Heebo text-xl font-medium'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="flex relative border-2 border-inherit rounded-lg gap-2 p-3 ">
                            <input className=" bg-transparent py-3 ps-4 pe-5 w-3/4 border-none focus:outline-none" type="text" placeholder="Your Email"/>
                            <button type="button" className="font-Heebo text-xl text-[#FFFFFF] p-2 bg-[#FE5D37] rounded-md flex items-center ">SignUp</button>
                        </div>
                    </div>
            </div>
        </div>
        <div className='container mt-2'>
            <div className='px-6 text-lg border-t-2 border-[#6c757d]'>
                <div className='flex justify-between mt-7'>
                <div className="flex text-center mb-3">
                            {/* &copy; <a className="border-b-2 hover:text-[#FE5D37]" href="#">Your Site Name</a><span className='text-[#6c757d]'>&nbsp; All Right Reserved. &nbsp;All Right Reserved. &nbsp;Designed by &nbsp;</span>
                            
							<a className="border-b-2 hover:text-[#FE5D37]" href="https://htmlcodex.com">HTML Codex</a> */}
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="flex">
                                <a className='mr-4 pr-4  hover:text-[#FE5D37]' href="/">Home</a>
                                {/* <a className='mr-4 pr-4 border-r-2 border-[#6c757d] hover:text-[#FE5D37]' href="">Cookies</a>
                                <a className='mr-4 pr-4 border-r-2 border-[#6c757d] hover:text-[#FE5D37]' href="">Help</a>
                                <a className='mr-4 pr-4 border-r-2 border-[#6c757d] hover:text-[#FE5D37]' href="">FQAs</a> */}
                            </div>
                        </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default FooterSection
