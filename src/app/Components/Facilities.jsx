import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faFutbol, faHouseChimney, faHouseLaptop } from '@fortawesome/free-solid-svg-icons'

function Facilities() {
    return (
        <div className=' flex flex-col mt-0 w-full items-center justify-center p-20'>
            <div className="container flex flex-col items-center">
                <div className='mx-auto w-600px p-10 flex flex-col items-center justify-center gap-8' >
                    <h1 className='text-center font-Lobster font-bold text-3xl md:text-4xl lg:text-5xl'>School Facilities</h1>
                    {/* <p className='flex justify-center text-gray-500 text-md md:text-xl lg:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dgshfhjsdv dvsdhfvsdhvf fhjsgfhjsdgf hjgafhsgfhsdgf.</p> */}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-red-100 hover:bg-red-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                                <FontAwesomeIcon icon={faBus} className='w-16 text-red-500 hover:text-white m-5' />
                            </div>
                            <div className='group bg-red-100 hover:bg-red-500 text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                                <h3 className='text-2xl  text-red-500 group-hover:text-white font-Lobster text-center'>
                                    Academic Management
                                </h3>
                                <div className='text-wrap text-center text-red-600 text-xl group-hover:text-white'>
                                    <ul>
                                        <li>Session Management</li>
                                        <li>Admission Management</li>
                                        <li>Class and Section</li>
                                        <li>Syllabus and Timetable</li>
                                        <li>Certificate</li>
                                        <li>Circular</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-green-100 hover:bg-green-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                                <FontAwesomeIcon icon={faFutbol} className='w-16 text-green-500 hover:text-white m-5' />
                            </div>
                            <div className='group bg-green-100 hover:bg-green-500 text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                                <h3 className='text-2xl text-center text-green-500 group-hover:text-white font-Lobster'>
                                    Student Management
                                </h3>
                                <div className='text-wrap text-center text-green-600 text-xl group-hover:text-white'>
                                    <ul>
                                        <li>Student Information</li>
                                        <li>Attendance Management</li>
                                        <li>Student Tracking</li>
                                        <li>Email and Notifications</li>
                                        <li>Report Card Management</li>
                                        <li>Scholarship Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-yellow-100 hover:bg-yellow-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                                <FontAwesomeIcon icon={faHouseLaptop} className='w-16 text-blue-500 hover:text-white m-5' />

                            </div>
                            <div className='group bg-yellow-100 hover:bg-yellow-500 text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                                <h3 className='text-2xl  text-blue-500 font-Lobster pt-4 group-hover:text-white text-center'>
                                    Exam Management
                                </h3>
                                <div className='text-wrap text-center text-blue-600 text-xl group-hover:text-white'>
                                    <ul>
                                        <li> Manual Exam </li>
                                        <li>Online Exam</li>
                                        <li>Question Bank</li>
                                        <li>Exam Schedules</li>
                                        <li>Result and Report Card</li>
                                        <li> &nbsp; </li>
                                        <li> &nbsp; </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='bg-blue-100 hover:bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                                <FontAwesomeIcon icon={faHouseLaptop} className='w-16 text-blue-500 hover:text-white m-5' />

                            </div>
                            <div className='group bg-blue-100 hover:bg-blue-500 text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                                <h3 className='text-2xl  text-blue-500 group-hover:text-white font-Lobster text-center'>
                                    HR/Staff/Finance Management
                                </h3>
                                <div className='text-wrap text-center text-blue-600 group-hover:text-white text-xl'>
                                    <ul>
                                        <li>HR Management</li>
                                        <li>Staff master</li>
                                        <li>Staff Attendance</li>
                                        <li>Leave Movement</li>
                                        <li>Staff Allocation</li>
                                        <li>Fee Management</li>
                                        <li>Expense Management</li>
                                        <li>Payroll</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1 text-center my-3'>
                    <div className='text-center'>
                        <div className='flex flex-col items-center '>
                            <div className='bg-blue-100 hover:bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center p-15'>
                                <FontAwesomeIcon icon={faHouseChimney} className='w-16 text-blue-500 hover:text-white m-5' />

                            </div>
                            <div className='group bg-blue-100 hover:bg-blue-500   text-blue-500  hover:text-white rounded-full h-70 w-70 flex flex-col items-center justify-center p-20 gap-4 font-bold'>
                                <h3 className='text-2xl font-Lobster text-center'>
                                    Transportation/ <br/> Hostel/ <br/> Library <br />Management
                                </h3>
                                <div className='text-wrap text-center text-blue-600 text-xl group-hover:text-white'>
                                    <ul>
                                        <li>Route Management</li>
                                        <li>Vehicle and Driver Records</li>
                                        <li>Transportation Allocation</li>
                                        <li>Hostel Management</li>
                                        <li>Room Allocation</li>
                                        <li>Book Category</li>
                                        <li>Book Inventory</li>
                                        <li>Book Issue and Return tracking</li>
                                        <li>Transportation /Hostel Fee<br /> Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Facilities
