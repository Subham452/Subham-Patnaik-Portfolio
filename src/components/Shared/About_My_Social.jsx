import React, { useState } from "react";
import Slider1 from "./Slider";
import logo from "../../Assets/Screenshot (343).png"
import logo1 from "../../Assets/Screenshot (339).png"
import logo2 from "../../Assets/Screenshot (344).png"
import logo3 from "../../Assets/Screenshot 2024-04-05 195946.png"
import Link from "react-router-dom"
import { useNavigate } from "react-router-dom"
const About_My_Social = () => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <div id="Projects" className='flex flex-col items-center justify-center w-screen h-auto pt-20 bg-white '>
        <section className='flex flex-col items-center justify-between w-full h-full mx-10 bg-white '>
          <div className='flex items-center justify-between w-full h-auto px-10 '>
            <div className='font-sans text-xl font-bold lg:text-7xl text-slate-800/90'>Lets have look at<br />my Portfolio  <span className='text-orange-500'>Projects </span></div>

            <div className='py-4 flex justify-center items-center text-2xl h-[3rem] w-[10rem] font-semibold text-white bg-orange-500 rounded-full lg:w-auto lg:h-auto lg:px-10 lg:text-3xl' onClick={() => { setActive(!active) }}>
              {active?"Preview":"See all"}
            </div>
          </div>
        </section>
        <section className="">
          <Slider1 active={active} />
        </section>

        <section className={`w-full mt-20 ${active ? "hidden" : "flex"} justify-center items-center  bg-white  h-auto  `}>
          <section className="grid w-auto h-auto grid-flow-row grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 ">
            <div className="flex items-center justify-center py-6 bg-green-400/0 ">
              <div className=' flex-col shadow-lg shadow-orange-500/40 overflow-hidden mx-auto flex lg:w-[39rem] h-[27rem] w-[20rem] rounded-[2rem] justify-between items-center bg-slate-800 '>
                <div className=' h-[19rem] bg-black w-auto'>
                  <img className='object-cover w-full h-full my-auto ' src={logo2} alt="" />
                </div>
                <div className='flex flex-row items-center justify-between w-full h-auto gap-3 px-10 text-white mb-7'>
                  <a target="_blank" href="https://github.com/Subham452/Subham-s-Calculator.git" >
                    <div className='flex flex-row items-center justify-center gap-3 '>
                      <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Github</span>
                      <div className=' hidden lg:flex  justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                        <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                      </div>
                    </div>
                  </a>
                  <a target="_blank" href="https://subham-s-calculator.vercel.app/" >
                    <div className='flex flex-row items-center justify-center gap-3 '>
                      <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Demo</span>
                      <div className=' hidden lg:flex  justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                        <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-6 bg-green-400/0 ">
            <div className=' flex-col shadow-lg shadow-orange-500/40 overflow-hidden mx-auto flex lg:w-[39rem] h-[27rem] w-[20rem] rounded-[2rem] justify-between items-center bg-slate-800 '>
                <div className=' h-[19rem] w-full'>
                  <img className='object-cover h-full my-auto ' src={logo1} alt="" />
                </div>
                <div className='flex flex-row items-center justify-between w-full h-auto gap-3 px-10 text-white mb-7'>
                <a target="_blank" href="https://github.com/Subham452/Task.git" >

                  <div className='flex flex-row items-center justify-center gap-3 '>
                    <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Github</span>
                    <div className=' hidden lg:flex  justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                      <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                    </div>
                  </div>
                  </a>
                  <a target="_blank" href="https://task-five-xi.vercel.app/" >

                  <div className='flex flex-row items-center justify-center gap-3 '>
                    <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Demo</span>
                    <div className=' hidden lg:flex  justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                      <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-6 bg-green-400/0 ">
            <div className=' flex-col shadow-lg shadow-orange-500/40 overflow-hidden mx-auto flex lg:w-[39rem] h-[27rem] w-[20rem] rounded-[2rem] justify-between items-center bg-slate-800 '>
                <div className=' h-[19rem] w-full'>
                  <img className='object-cover h-full my-auto ' src={logo} alt="" />
                </div>
                <div className='flex flex-row items-center justify-between w-full h-auto gap-3 px-10 text-white mb-7'>
                <a target="_blank" href="https://github.com/Subham452/Lucid-Paradox.git" >

                  <div className='flex flex-row items-center justify-center gap-3 '>
                    <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Github</span>
                    <div className=' hidden lg:flex  justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                      <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                    </div>
                  </div>
                  </a>
                  
                  <a target="_blank" href="https://www.linkedin.com/feed/update/urn:li:activity:7181571235846254592/" >

                  <div className='flex flex-row items-center justify-center gap-3 '>
                    <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Demo</span>
                    <div className=' hidden lg:flex  justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                      <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
            </div>

            <div className=' flex-col shadow-lg shadow-orange-500/40 overflow-hidden mx-auto flex lg:w-[39rem] h-[27rem] w-[20rem] rounded-[2rem] justify-center items-center gap-10 bg-slate-800 '>
              <div class=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div class="h-2  bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-2xl font-semibold text-red-500 animate-pulse ">Under Construction</p>
            </div>


          </section>
        </section>
      </div>
    </div >
  )
}

export default About_My_Social
