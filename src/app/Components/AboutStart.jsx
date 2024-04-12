import React from 'react'


function AboutStart() {
  return (

    <div className='flex flex-col mt-0 w-full items-center justify-center p-20 relative'>
        <div className='container grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#103741] font-bold text-3xl md:text-4xl lg:text-5xl font-Lobster'>Learn More About Our Work And Our Cultural Activities</h1>
                <p className='text-md md:text-xl lg:text-2xl'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <p className='text-md md:text-xl lg:text-2xl'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div>
                    <div className='grid grid-cols-2 gap-2 my-8'>
                        <div className='bg-[#FE5D37] text-base md:text-lg lg:text-xl text-white rounded-full w-1/2 h-16 flex justify-center items-center '>
                            <a href="">Read More</a>
                        </div>
                        <div>
                            <div className='flex gap-5 justify-center items-center'>
                                <img className='w-16 h-16 rounded-full'
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div >
                                <h6 className=' text-base md:text-lg lg:text-xl text-[#FE5D37] font-bold'>Jhon Doe</h6>
                                        <small className='text-[#74787C] text-sm md:text-base lg:text-lg my-4'>CEO & Founder</small>

                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
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
    
  )
}

export default AboutStart
