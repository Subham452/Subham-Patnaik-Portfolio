import React from 'react'
import logo from "../../Assets/enhanced-image (13)-01_adobe_express.png"
const Why_Me = () => {
    return (
        <div>
            <div id='About' className='flex items-center justify-center w-screen h-auto pt-2 lg:h-screen bg-slate-100 '>
                <div className='flex items-center justify-center w-full lg:flex-row flex-col h-full gap-32 px-10 rounded-t-[5rem] bg-white '>
                    <div className=' rounded-[5rem] mt-[3rem] h-[26rem] bg-gradient-to-t from-orange-600 to-orange-200'>
                        <img className=' rounded-3xl -mt-[11rem] h-[37rem] z-[12]' src={logo} alt="" />
                        {/* <div className=' absolute -mt- z-[11] h-[30rem] rounded-[5rem]  w-[20rem] bg-black'>

                        </div> */}
                    </div>
                    <div className='lg:items-start items-center flex-col gap-4 flex justify-center h-full bg-white/0 w-[50rem]'>
                        <div className='text-6xl font-bold '>Why <span className='text-orange-500 '>Hire me</span> ?</div>
                        <p className='text-lg font-semibold lg:w-auto w-[90vw] text-slate-800'>As a <span className='text-2xl font-bold text-orange-600 '>Versatile Full Stack Developer</span>, I bring a comprehensive skill set that spans both frontend and backend technologies. My expertise is rooted in a strong foundation of frontend development, where I excel in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. I am adept at creating responsive designs with Tailwind and have experience integrating backend services using Node.js, Firebase, Sanity, and managing databases with MySQL.</p>

                        <div className='flex-col items-start justify-end hidden gap-2 text-3xl font-semibold lg:flex text '>
                            <span className='text-5xl font-bold '>30+</span>
                            <span>Project Completed</span>
                        </div>

                        <a target='_blank' href='https://www.linkedin.com/in/subham-patnaik-85490a252/'><div className='hidden w-auto h-auto px-16 py-8 mt-6 text-4xl font-bold border-2 border-black lg:flex rounded-3xl'>
                            <h1>Hire Me</h1>
                        </div></a>

                        <div className='flex lg:hidden flex-row items-center justify-between w-[100vw] px-10'>
                            <div className='flex flex-col items-start justify-end gap-2 text-3xl font-semibold text '>
                                <span className='text-5xl font-bold '>30+</span>
                                <span>Project Completed</span>
                            </div>

                            <div className='w-auto h-auto px-4 py-5 text-4xl font-bold border-2 border-black mt-7 lg:py-8 lg:px-16 rounded-3xl'>
                                <h1>Hire Me</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why_Me
