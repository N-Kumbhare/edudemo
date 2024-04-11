import React from 'react'

function MakeAppointment() {
    return (
        <div className='flex m-10 bg-[#FFF5F3] mx-10 gap-9'>
            <div className='flex flex-col  justify-center text-wrap w-1/2 p-20 gap-6'>
                <h3 className='text-[#103741] text-4xl font-bold font-Lobster'>Make An Appointment</h3>
                <form action="#">
                    <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                        <div>
                            <label for="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                            <div className="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                            <div className="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>

                        </div>
                        <div>
                            <label for="child-name" className="block text-sm font-semibold leading-6 text-gray-900">Child name</label>
                            <div className="mt-2.5">
                                <input type="text" name="child-name" id="child-name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>

                        </div>
                        <div>
                            <label for="child-age" className="block text-sm font-semibold leading-6 text-gray-900">Child Age</label>
                            <div className="mt-2.5">
                                <input type="text" name="child-age" id="child-age" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            

                        </div>
                        <div class="sm:col-span-2">
                                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                <div class="mt-2.5">
                                    <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>

                    </div>

                </form>

                <div className='h-12 bg-[#FE5D37] flex items-center justify-center p-8 rounded-xl gap-3 text-white font-bold'>
                    <span className='text-2xl'>Submit</span>
                </div>
            </div>
            <div className='w-1/2 '>
                <img className="rounded-lg h-full" src="https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/6421ad14-0b83-45db-a279-7a52c98f13ec/colouring-pages-for-kids-hader.jpg" alt="" />
            </div>

        </div>
    )
}

export default MakeAppointment
