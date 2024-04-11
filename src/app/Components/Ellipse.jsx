import React from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faFacebookF} from '@fortawesome/fontawesome-free-solid'

export default function Ellipse(props) {
    return (
        <div className="flex p-10 relative w-1/3" >
            <img className= "w-[300px] h-[500px] rounded-[50%] z-0" src={props.image} alt="" />
            <div className='w-80 h-80 rounded-full bg-[#FFF5F3] hover:bg-[#FE5D37]  flex flex-col items-center justify-center z-10 absolute left-40 bottom-0'>
                <div className='w-72 h-72 rounded-full bg-white flex flex-col items-center justify-center gap-4'>
                    <h2 className='text-3xl font-bold font-Lobster text-[#103741] '>Full Name</h2>
                        <h4 className='text-xl text-[#6c757d] font-Heebo'>Designation</h4>
                        <div className='flex gap-3'>
                            <div className='w-12 h-12 rounded-full bg-[#FE5D37]'>
                                {/* <FontAwesomeIcon className='w-6 h-6 text-white' icon={faFacebookF}/> */}
                            </div>
                            <div className='w-12 h-12 rounded-full bg-[#FE5D37]'>
                            </div>
                            <div className='w-12 h-12 rounded-full bg-[#FE5D37]'>
                            </div>

                        </div>


                </div>
            </div>
        </div>
            
        
    )
}


