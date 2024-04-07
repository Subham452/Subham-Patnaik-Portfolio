import React from 'react'
import logo from "../../Assets/enhanced-image (11)-01-01.png"
import logo1 from "../../Assets/favourites.png"
import logo2 from "../../Assets/checkmark-badge-3d-icon_136651-1106.png"
import { useNavigate } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'
const Hero_Page = () => {

    return (
        <div id='Top' className='w-screen -mt-[5rem]  h-auto overflow-hidden '>
            <section className='flex flex-col items-center justify-center w-screen h-auto mx-0 overflow-hidden'>

                <section className='flex items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-t from-white to-slate-200'>
                    <img className='bg-red-800/0 -mb-[17.7rem] z-[4] lg:-mb-[0rem] w-auto object-cover  -[3] h-[28rem] absolute lg:h-[48rem] ' src={logo} alt="" />
                    <span className='font-bold  text-[4rem] lg:text-[16rem] z-[2] mt-40 '>S U B H A M</span>


                    <div className='absolute lg:-mr-[70rem] -mt-[20rem] flex z-[4] flex-col items-center justify-center h-auto bg-red-100/0   w-auto'>
                        <div className='flex flex-row items-center justify-center h-auto gap-2'>
                            <span><img className='h-10' src={logo1} alt="" /></span>
                            <span><img className='h-10' src={logo1} alt="" /></span>
                            <span><img className='h-10' src={logo1} alt="" /></span>
                            <span><img className='h-10' src={logo1} alt="" /></span>
                            <span><img className='h-10' src={logo1} alt="" /></span>
                        </div>

                        <div className='mt-2 font-mono text-3xl font-semibold'>
                            <h1>2 Year+  <span className='text-4xl font-bold '>Exprence</span></h1>

                        </div>

                    </div>
                </section>

                <section className='flex items-center justify-center w-screen h-20 mx-0 -mt-[3.7rem] bg-gradient-to-t from-black/10 to-white'>
                    <div className='h-14 -mt-[15rem] lg:mt-0 px-3 bg-white/30 border-white brightness-200 border-2 z-[4] rounded-full w-auto justify-center items-center flex flex-row gap-4 '>
                        <span className='h-10 w-[10rem] justify-center items-center flex text-white font-[0.3rem] bg-orange-800 rounded-full  text-xl'>
                            Portfolio
                        </span>

                        <Link
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} to={"#Contact"} className='h-10 gap-2 w-auto px-2 justify-center items-center flex text-white font-[0.3rem] bg-orange-800/0 rounded-full  text-xl'>
                            Contact Me <span className=' -rotate-6'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg></span>
                        </Link>
                    </div>
                </section>

            </section>
        </div>
    )
}

export default Hero_Page
