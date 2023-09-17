import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <div className='flex min-h-screen '>
      <div>
      <Sidebar/>

      </div>
      <div className='w-full main '>
      <Navbar/>
      <div className='w-full min-h-screen flex flex-col '>

   
      <div className='up flex items-center justify-center'>
        <div className='w-[95%] rounded-lg h-48 sidebar mt-5 flex items-center justify-around'>
          <div className='  h-[80%] flex items-start justify-center'>
            <div className='w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center'>
            <i class="ri-arrow-left-line"></i>
            </div>
          </div>
          <div className='h-[80%] items-start justify-center flex flex-col '>
            <h1 className='text-2xl font-bold text-white'>School November Tasks</h1>
            <p className='text-xs my-2 text-gray-500'>Created by Instructor Day on November 31, 2022</p>
            <div className='flex items-center justify-center gap-4'>
              <div className='flex'>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 text-xs text-white font-bold flex items-center justify-center  rounded-xl bg-pink-500'>5+</div>
              </div>
              <button className='py-2 px-3 bg-purple-600 text-xs rounded-xl text-white font-bold'><i class="ri-user-add-fill mr-1 text-sm"></i> Invite People</button>
              <button className='py-2 px-4 border border-blue-300 font-bold text-xs rounded-xl text-white'>Private</button>
              <button className='py-2 px-4 bg-blue-400 text-white text-xs font-bold rounded-xl'>Edit</button>
              <button className='py-2 px-3 border border-blue-300 text-white text-xs font-bold rounded-xl'><i class="ri-message-2-fill mr-2 text-sm"></i>45 Comments</button>
            </div>
          </div>
          <div className='h-[80%] flex flex-col items-end justify-center'>
            <div className='flex gap-3 justify-end items-center'>
              <div className='flex flex-col items-end justify-center'>
                <h3 className='text-base font-semibold text-white'>Centered Martial Arts</h3>
                <p className=' text-xs  text-gray-400'>Sunnyvale, Ca</p>
              </div>
              <div className='w-12 h-12 rounded-xl bg-gray-100'></div>
              <i class="ri-list-check text-white"></i>
            </div>
            <div className='flex items-center mt-3 justify-center gap-2'>
              <p className='text-base text-white'>Total Progress 60%</p>
              <div className='w-56 h-3 rounded-full  bg-gray-700'>
                <div className='w-[60%] h-full bg-purple-600 rounded-full'></div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='down  mt-4 flex items-start justify-center'>
        <div className='w-[95%]  flex items-start justify-between'>
        <div className='flex w-[24%]  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='text-white font-bold'>To-Do List(24)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-purple-600'><i class="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div className='w-full'>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i class="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sign up sheet for holiday student/parent conferences.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[30%] h-full bg-orange-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i class="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sign up sheet for holiday student/parent conferences.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[30%] h-full bg-orange-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i class="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sign up sheet for holiday student/parent conferences.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[30%] h-full bg-orange-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-[24%]  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='text-white font-bold'>In Progress(2)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900'><i class="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div>
          <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i class="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sign up sheet for holiday student/parent conferences.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[30%] h-full bg-orange-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i class="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sign up sheet for holiday student/parent conferences.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[30%] h-full bg-orange-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-[24%]  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='text-white font-bold'>Done(3)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900'><i class="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div>
          <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i class="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sign up sheet for holiday student/parent conferences.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[30%] h-full bg-orange-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i class="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sign up sheet for holiday student/parent conferences.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[30%] h-full bg-orange-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i class="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sign up sheet for holiday student/parent conferences.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[30%] h-full bg-orange-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-[24%]  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='font-bold text-white'>Revised(0)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900'><i class="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div className='w-full'>
            <div className='w-full mt-3 h-20 rounded-xl flex items-center justify-center bg-blue-800'>
              <div className='w-[80%] h-[60%] rounded-xl sidebar outline-white outline-dotted flex items-center justify-center'><p className='text-sm font-semibold text-blue-800'>Move card here</p></div>
            </div>
          </div>
        </div>
        </div>
     
      </div>
      </div>

      </div>
    </div>
  )
}

export default Home
