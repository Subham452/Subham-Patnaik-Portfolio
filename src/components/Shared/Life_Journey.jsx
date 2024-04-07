import React from 'react'
import logo from "../../Assets/Screenshot 2024-04-05 195946.png"
const Life_Journey = () => {
    return (
        <div>
            <div id="Qualification" className='flex flex-col items-center justify-center w-screen py-20 pl-3 mt-20 mb-20 overflow-hidden h-aul-to lg:pl-0 lg:mb-0 lg:py-0 lg:h-screen bg-slate-100 '>
                <div className='mb-5 text-4xl font-bold lg:text-5xl text-slate-900/80 '>My Work Life <span className='text-orange-500 '>Journey</span></div>
                <section className='flex flex-row items-center justify-between w-full h-full py-20 lg:px-20 lg:py-0 bg-gradient-to-r from-slate-100 to-slate-100 via-white '>
                    <div className=' hidden lg:flex flex-col items-center justify-center lg:gap-[9rem] w-1/3 h-full pl-10 bg-slate-000 '>
                        <div className="flex flex-col items-start justify-start w-full h-20 gap-2 ">
                            <p className='text-2xl font-semibold lg:text-5xl text-slate-900/80 '>PVM - 10th</p>
                            <span className='text-xl font-thin text-slate-900 '>2019</span>
                        </div>

                        <div className="flex flex-col items-start justify-start w-full h-20 gap-2">
                            <p className='text-2xl font-semibold text-slate-900/80 '>IVM - 11th & 12th</p>
                            <span className='text-xl font-thin text-slate-900 '> 2019 - 2021</span>
                        </div>

                        <div className="flex flex-col items-start justify-start w-full h-20 gap-2">
                            <p className='text-2xl font-semibold text-slate-900/80 '>DAMITS - BCA</p>
                            <span className='text-xl font-thin text-slate-900 '>2022 - 2025</span>
                        </div>

                    </div>

                    <div className='flex gap-6 lg:gap-[3.3rem] flex-col items-start justify-start w-auto h-full text-slate-900/90 lg:hidden'>
                        <div className='flex flex-col '>
                            <span className='text-3xl font-bold '>P V M - 10<sup>th</sup></span>
                            <h1 className='text-xl font-thin'>Passout 2019</h1>
                        </div>
                        <div className='flex flex-col '>
                            <span className='text-3xl font-bold '>I V M - 11<sup>th</sup> & 12<sup>th</sup></span>
                            <h1 className='text-xl font-thin'>2019 - 2021</h1>
                        </div>
                        <div className='flex flex-col '>
                            <span className='text-3xl font-bold '>D A M I T S - BCA</span>
                            <h1 className='text-xl font-thin'>2022 - 2025</h1>
                        </div>
                    </div>

                    <div>
                        <img className=' lg:h-full h-[20rem] ' src={logo} alt="" />
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Life_Journey
