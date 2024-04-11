import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBus, faFutbol, faHouseChimney, faHouseLaptop} from '@fortawesome/free-solid-svg-icons'

function Facilities() {
  return (
    <div className=' flex flex-col mt-0 w-full items-center justify-center'>
        <div className="container flex flex-col items-center">
            <div className='mx-auto w-600px p-10 flex flex-col items-center justify-center gap-8' >
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold font-Lobster'>School Facilities</h1>
                <p className='flex justify-center text-gray-500 text-md md:text-xl lg:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dgshfhjsdv dvsdhfvsdhvf fhjsgfhjsdgf hjgafhsgfhsdgf.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div>
                    <div className='flex flex-col items-center'>
                        <div className='bg-red-100 hover:bg-red-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                            <span>
                                
                            </span>
                            <FontAwesomeIcon icon={faBus} className='w-16 text-red-500 hover:text-white m-5'/>
                            <span>

                            </span>

                        </div>
                        <div className='bg-red-100 hover:bg-red-500 text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                            <h3 className='text-2xl  text-red-500 hover:text-white font-Lobster'>
                            School Bus
                            </h3>
                            <p className='text-wrap text-center text-gray-600 text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                            </p>

                        </div>
                    </div>

                </div>
                <div>
                <div className='flex flex-col items-center'>
                        <div className='bg-green-100 hover:bg-green-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                            <span>
                                
                            </span>
                            <FontAwesomeIcon icon={faFutbol} className='w-16 text-green-500 hover:text-white m-5'/>
                            <span>

                            </span>

                        </div>
                        <div className='bg-green-100 hover:bg-green-500 text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                            <h3 className='text-2xl  text-green-500 hover:text-white font-Lobster'>
                            Playground
                            </h3>
                            <p className='text-wrap text-center text-gray-600 text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                            </p>

                        </div>
                    </div>
                </div>
                <div>
                <div className='flex flex-col items-center '>
                        <div className='bg-yellow-100 hover:bg-yellow-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                            <span>
                                
                            </span>
                            <FontAwesomeIcon icon={faHouseChimney} className='w-16 text-yellow-500 hover:text-white m-5'/>
                            <span>

                            </span>

                        </div>
                        <div className='bg-yellow-100 hover:bg-yellow-500  text-yellow-500  hover:text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                            <h3 className='text-2xl font-Lobster'>
                            Canteen
                            </h3>
                            <p className='text-wrap text-center text-gray-600 text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                            </p>

                        </div>
                    </div>
                </div>
                <div>
                <div className='flex flex-col items-center'>
                        <div className='bg-blue-100 hover:bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                            <span>
                                
                            </span>
                            <FontAwesomeIcon icon={faHouseLaptop} className='w-16 text-blue-500 hover:text-white m-5'/>
                            <span>

                            </span>

                        </div>
                        <div className='bg-blue-100 hover:bg-blue-500 text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                            <h3 className='text-2xl  text-blue-500 hover:text-white font-Lobster'>
                            Learning
                            </h3>
                            <p className='text-wrap text-center text-gray-600 text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                            </p>

                        </div>
                </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Facilities
