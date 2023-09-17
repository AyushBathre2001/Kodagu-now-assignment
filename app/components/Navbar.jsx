import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-20  sidebar top-0 flex items-center justify-around'>
            <div className=' rounded-full w-64 flex px-2 bg-blue-900 items-center '>
                <i class="ri-search-line text-xl text-blue-300"></i>
                <input className='bg-blue-900 rounded-full outline-none border-none text-white text-xs  px-3 py-3' type="text" placeholder='Search here' />
            </div>
            <div>
                <a className='text-purple-700 text-xs underline' href="">OTHER MENUS</a>
            </div>
            <div className='flex gap-4 text-lg text-white'>
                <div>
                    <div></div>
                    <i class="ri-notification-fill text-blue-300"></i>
                </div>
                <div>
                    <div></div>
                    <i class="ri-movie-fill  text-gray-500"></i>
                </div>
                <div>
                    <div></div>
                    <i class="ri-task-fill text-blue-300"></i>
                    </div>
                <div>
                    <div></div>
                    <i class="ri-inbox-fill text-blue-300"></i>
                    </div>
            </div>
            <div className='w-32 rounded-full h-10 bg-blue-700 flex items-center justify-evenly'>
                <div className='w-6 h-6 rounded-full bg-black'></div>
                <h3 className='text-xs text-white font-semibold'>ENGLISH</h3>
                <i class="ri-arrow-down-s-fill text-xl text-blue-300"></i>
            </div>
            <div className='w-44 h-10 flex items-center justify-evenly'>
                <div className='w-10 h-full rounded-lg bg-gray-200' ></div>
                <div className='flex items-center justify-between' >
                    <div className='flex flex-col items-start justify-center'>
                        <h3 className='text-white text-xs'>Instructor Day</h3>
                        <p className='text-blue-500 text-xs'>Super Admin</p>
                    </div>
                    <i class="ri-arrow-down-s-fill text-lg text-blue-300"></i>

                </div>
            </div>
        </div>
    )
}

export default Navbar
