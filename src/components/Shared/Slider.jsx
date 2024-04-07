import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../Assets/Screenshot (343).png"
import logo1 from "../../Assets/Screenshot (339).png"
import logo2 from "../../Assets/Screenshot (344).png"
import logo3 from "../../Assets/Screenshot 2024-04-05 195946.png"

const Slider1 = ({ active }) => {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div className={` ${active ? "" : "hidden"} w-screen overflow-hidden h-auto px-10 bg-white `}>
            <Slider {...settings}>
                <div className="flex items-center justify-center py-6 bg-green-400/0 ">
                    <div className=' flex-col shadow-lg shadow-orange-500/40 overflow-hidden mx-auto flex h-[27rem] w-[20rem] lg:w-[44rem] rounded-[2rem] justify-between items-center bg-slate-800 '>
                        <div className=' flex justify-center items-center h-[19rem] w-full'>
                            <img className='object-cover h-full my-auto ' src={logo} alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between w-full h-auto gap-3 px-10 text-white mb-7'>
                            <div className='flex flex-row items-center justify-center gap-3 '>
                                <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Github</span>
                                <div className=' hidden lg:flex justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                                    <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-3 '>
                                <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Demo</span>
                                <div className=' hidden lg:flex justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                                    <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center py-6 bg-green-400/0 ">
                    <div className=' flex-col shadow-lg shadow-orange-500/40 overflow-hidden mx-auto flex h-[27rem] w-[20rem] lg:w-[44rem] rounded-[2rem] justify-between items-center bg-slate-800 '>
                        <div className=' flex justify-center items-center h-[19rem] w-full'>
                            <img className='object-cover h-full my-auto ' src={logo1} alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between w-full h-auto gap-3 px-10 text-white mb-7'>
                            <div className='flex flex-row items-center justify-center gap-3 '>
                                <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Github</span>
                                <div className=' hidden lg:flex justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                                    <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-3 '>
                                <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Demo</span>
                                <div className=' hidden lg:flex justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                                    <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center py-6 bg-green-400/0 ">
                    <div className=' flex-col shadow-lg shadow-orange-500/40 overflow-hidden mx-auto flex h-[27rem] w-[20rem] lg:w-[44rem] rounded-[2rem] justify-between items-center bg-slate-800 '>
                        <div className=' flex justify-center items-center h-[19rem] w-full'>
                            <img className='object-cover h-full my-auto ' src={logo2} alt="" />
                        </div>
                        <div className='flex flex-row items-center justify-between w-full h-auto gap-3 px-10 text-white mb-7'>
                            <div className='flex flex-row items-center justify-center gap-3 '>
                                <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Github</span>
                                <div className=' hidden lg:flex justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                                    <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-3 '>
                                <span className='w-auto h-auto px-3 py-2 text-2xl font-semibold bg-orange-400 rounded-full'>Demo</span>
                                <div className=' hidden lg:flex justify-center items-center w-20 h-20 hover:rotate-45 translate-x-0 duration-500 from-black to-violet-900  bg-gradient-to-r rounded-full shadow-[20px]'>
                                    <svg className='duration-500 translate-x-0 hover:p-10 ' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Slider1
