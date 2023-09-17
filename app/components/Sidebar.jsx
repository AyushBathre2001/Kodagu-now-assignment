"use client"
import React, { useState } from 'react'

const Sidebar = () => {


  
  return (
    <div  className={`min-h-screen sidebar sticky top-0 bottom-0  w-72 `}>
      <div className='text-white w-full h-20 flex items-center justify-center gap-2'>
        <h3 className='text-lg'>Weframetech</h3>
        <i  className="ri-menu-line text-blue-500 text-xl"></i>
      </div>
      <div className='mainMenu w-full flex items-center justify-center'>
        <div className='w-[80%]'>
            <div className='w-full'>
                <h4 className='text-white text-sm font-bold'>MAIN MENU</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-dashboard-2-fill text-2xl text-gray-600"></i>
            <h4 className='text-sm text-gray-600 font-semibold'>Dashboard</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-mail-fill text-2xl text-gray-600"></i>
            <h4 className='text-sm text-gray-600 font-semibold'>Email</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-chat-3-fill text-blue-300 text-2xl"></i>
            <h4 className='text-sm text-blue-300 font-semibold'>Chat</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-microsoft-fill text-2xl text-purple-800"></i>
            <h4 className='text-sm text-purple-800 font-semibold'>Kanban</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-contacts-book-2-fill text-2xl text-blue-300"></i>
            <h4 className='text-sm text-blue-300 font-semibold'>Contact</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-calendar-fill text-2xl text-blue-300"></i>
            <h4 className='text-sm text-blue-300 font-semibold'>Calender</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-movie-fill text-2xl text-gray-600"></i>
            <h4 className='text-sm text-blue-300 font-semibold'>Courses</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-store-3-fill text-2xl text-gray-600" ></i>
            <h4 className='text-sm text-blue-300 font-semibold'>Shop</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-file-list-3-fill text-2xl text-blue-300"></i>
            <h4 className='text-sm text-blue-300 font-semibold'>Invoices</h4>
            </div>
            <div className='w-full flex items-center gap-5 justify-start my-3'>
            <i className="ri-settings-3-fill text-2xl text-blue-300"></i>
            <h4 className='text-sm text-blue-300 font-semibold'>Settings</h4>
            </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='w-[80%] h-40 rounded-2xl p-4 bg-blue-500 flex items-start flex-col justify-center text-white'>
        <i className="ri-bar-chart-horizontal-line text-xl mb-1"></i>
        <h4 className='font-bold text-sm'>Increase Your Work With Kanban</h4>
        <i className="ri-arrow-right-line text-xl mt-1"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
