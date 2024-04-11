import React from 'react'

function Card(props) {

  return (
    <div className='container flex flex-col relative justify-between'>
        <div className='bg-[#FFF5F3] w-80 h-80 rounded-full p-4 flex items-center justify-center'>
            <img className="rounded-full w-64 h-64 "
            src={props.image} alt="" />
        </div>
        <div className=' flex flex-col items-center justify-centern w-96 h-80 rounded-lg bg-[#FFF5F3] py-8 gap-8'>
            <h1 className='font-Lobster font-bold text-3xl hover:text-[#fd7e14]'> {props.title}</h1>
            <div className='flex justify-between gap-10'>
                <div className='flex gap-4'>
                <img className='w-12 h-12 rounded-full'
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                
                <div className='flex flex-col'>
                    <span className='text-xl text-[#FE5D37]'> John Doe</span>
                    <span className='text-xl text-[#6c757d]'>Teacher</span>
                </div>
                </div>
                <div className='w-20 h-12 bg-[#FE5D37] 
                flex items-center justify-center rounded-3xl'>
                    $99
                </div>
            </div>
            <div>
                <div className='flex gap-3 box-border'>
                    <div className="pt-2 border-t-4 border-[#FE5D37] w-1/3">
                        <h6 className="text-xl font-bold text-[#FE5D37]">Age:</h6>
                        <small className="text-base text-[#6c757d]">3-5 Years</small>
                    </div>
                    <div className="pt-2 border-t-4 border-[#198754] w-1/3">
                        <h6 className="text-xl font-bold text-[#198754]">Time:</h6>
                        <small className="text-base text-[#6c757d]">9-10 AM</small>
                    </div>
                    <div className="pt-2 border-t-4 border-[#ffc107] w-1/3">
                        <h6 className="text-xl font-bold text-[#ffc107]">Capacity:</h6>
                        <small className="text-base text-[#6c757d]">30  Kids</small>
                    </div>
                </div>
            

            </div>

        </div>
      
    </div>
  )
}

export default Card
