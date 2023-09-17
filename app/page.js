import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Home = () => {

  return (
    <div className='flex min-h-screen z-10  '>
      <div >
      <Sidebar/>

      </div>
      <div  className=' main overflow-hidden lg:w-[82vw] w-full  '>
      <Navbar/>
      <div className='w-full min-h-screen flex flex-col '>

   
      <div className='up w-full  flex items-center justify-center'>
        <div className='w-[98%] rounded-lg min-h-56 sidebar mt-5 px-6  py-12 flex items-center justify-start lg:justify-around'>
         
          <div className='h-[80%] items-start justify-center flex flex-col '>
            <div className='flex gap-2 items-center justify-center'>
            <div className='w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center'>
            <i className="ri-arrow-left-line"></i>
            </div>
            <h1 className='text-2xl font-bold  text-white'>School November Tasks</h1>
            </div>
            <p className='text-xs my-2 text-gray-500'>Created by Instructor Day on November 31, 2022</p>
            <div className='flex items-center flex-wrap justify-start gap-4'>
              <div className='flex'>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 text-xs text-white font-bold flex items-center justify-center  rounded-xl bg-pink-500'>5+</div>
              </div>
              <button className='py-2 px-3 bg-purple-600 text-xs rounded-xl text-white font-bold'><i className="ri-user-add-fill mr-1 text-sm"></i> Invite People</button>
              <button className='py-2 px-4 border border-blue-300 font-bold text-xs rounded-xl text-white'>Private</button>
              <button className='py-2 px-4 bg-blue-400 text-white text-xs font-bold rounded-xl'>Edit</button>
              <button className='py-2 px-3 border border-blue-300 text-white text-xs font-bold rounded-xl'><i className="ri-message-2-fill mr-2 text-sm"></i>45 Comments</button>
            </div>
            <div className='flex items-center mt-4 lg:hidden justify-center gap-2'>
              <p className='text-base text-white'>Total Progress 60%</p>
              <div className='w-56 h-3 rounded-full  bg-gray-700'>
                <div className='w-[60%] h-full bg-purple-600 rounded-full'></div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
          <div className='h-[80%] hidden lg:flex flex-col items-end justify-center'>
            <div className='flex gap-3 justify-end items-center'>
              <div className='flex flex-col items-end justify-center'>
                <h3 className='text-base font-semibold text-white'>Centered Martial Arts</h3>
                <p className=' text-xs  text-gray-400'>Sunnyvale, Ca</p>
              </div>
              <div className='w-12 h-12 rounded-xl bg-gray-100'></div>
              <i className="ri-list-check text-white"></i>
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
      <div className='down overflow-scroll  mt-4 p-4 flex items-start justify-start'>
        <div className='    gap-5  flex item-start justify-around'>
        <div className='flex w-72  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='text-white font-bold'>To-Do List(24)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-purple-600'><i className="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div className='w-full'>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-orange-300'>Important</h3>
                <i className="ri-list-check text-white"></i>

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
                <h3 className='text-xs font-bold text-pink-500'>Instructor Meeting</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Plan holiday demonstration program. Create outline.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[40%] h-full bg-pink-500 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-green-500'>Database</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Determine how many boards need to be ordered for testing and demo.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[20%] h-full bg-green-500 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Delay in 4 days</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-72  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='text-white font-bold'>In Progress(2)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900'><i className="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div>
          <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-blue-300'>Video</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Create sparring tutorial video for the weekly class.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[90%] h-full bg-blue-300 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Due in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-6 rotate-12 h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-red-500'>BUGS FIXING</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Payment gatewat needs reauthorization.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-[98%] h-full bg-red-500 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Due in 4 days</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-72  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='text-white font-bold'>Done(3)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900'><i className="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div>
          <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-red-500'>BUGS FIXING</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Action Button needed for Google Maps visits.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-full h-full bg-red-500 rounded-full'></div>
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
                <h3 className='text-xs font-bold text-green-500'>Database</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Update new instructor photos.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-full h-full bg-green-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Due in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-pink-500'>Instructor Meeting</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Review/correct yellow belt techniques.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-full h-full bg-pink-500 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Due in 4 days</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-72  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='font-bold text-white'>Revised(0)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900'><i className="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div className='w-full'>
            <div className='w-full mt-3 h-20 rounded-xl flex items-center justify-center bg-blue-800'>
              <div className='w-[80%] h-[60%] rounded-xl sidebar outline-white outline-dotted flex items-center justify-center'><p className='text-sm font-semibold text-blue-800'>Move card here</p></div>
            </div>
          </div>
        </div>
        <div className='flex w-72  flex-col items-center justify-start'>
          <div className='p-3 w-full flex items-center justify-between'>
            <h3 className='text-white font-bold'>Done(3)</h3>
            <div className='w-8 h-8 rounded-xl flex items-center justify-center bg-blue-900'><i className="ri-add-fill font-bold text-white"></i></div>
          </div>
          <div>
          <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-red-500'>BUGS FIXING</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Action Button needed for Google Maps visits.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-full h-full bg-red-500 rounded-full'></div>
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
                <h3 className='text-xs font-bold text-green-500'>Database</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Update new instructor photos.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-full h-full bg-green-600 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Due in 4 days</p>
              </div>
            </div>
            <div className='w-full mt-3  h-48 flex flex-col items-start justify-start  p-4 rounded-xl bg-blue-800'>
              <div className='flex w-full items-center mt-2 justify-between'>
                <h3 className='text-xs font-bold text-pink-500'>Instructor Meeting</h3>
                <i className="ri-list-check text-white"></i>

              </div>
              <p className='text-sm font-semibold mt-2 text-white'>Review/correct yellow belt techniques.</p>
              <div className='w-60 h-2 rounded-full mt-3  bg-gray-800'>
                <div className='w-full h-full bg-pink-500 rounded-full'></div>
              </div>
              <div className='w-full flex items-center mt-5 justify-between'>
              <div className='flex'>
                <div className='w-6 h-6 rounded-full bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
                <div className='w-6 h-6 clip bg-gray-200'></div>
              </div> 
              <p className='text-xs text-gray-300'>Due in 4 days</p>
              </div>
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
