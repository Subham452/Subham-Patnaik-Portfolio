// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'

// const Home = () => {
//   return (
//     <div>
//       <section className='flex flex-col items-center justify-center w-screen h-auto '>
//         <Header />
//         <section className='flex-row items-center justify-between w-full h-auto px-10 mt-10 bg-white '>

//           <div className='flex flex-row items-center justify-between w-full h-auto p-10 bg-black/0'>
//             <div className='w-[40rem] flex flex-col justify-center items-start h-auto bg-green-000'>
//               <h1 className='text-3xl font-semibold leading-relaxed '>Hey! I'm <span className='text-4xl text-sky-800 '>Subham Patnaik</span>  <span className='text-2xl text-green-500/0 '>.</span> <span className='font-mono text-2xl '> “Skilled Web Developer: Proficient in <span className='text-3xl '>React</span>, <span className='text-3xl '>Next.js</span>, <span className='text-3xl '>Tailwind CSS</span>" </span> <span className='text-3xl text-green-400 '>.</span></h1>
//             </div>

//             <div className='w-[40rem] flex justify-center items-center h-auto bg-green-400/0'>
//               <div className='grid w-auto h-auto grid-flow-row grid-cols-2 gap-x-2 gap-y-2 '>
//               {/* <h1 className='text-3xl font-semibold leading-relaxed '>Hey! I'm <span className='text-4xl text-sky-800 '>Subham Patnaik</span>  <span className='text-2xl text-green-500/0 '>.</span> <span className='font-mono text-2xl '> “Skilled Web Developer: Proficient in <span className='text-3xl '>React</span>, <span className='text-3xl '>Next.js</span>, <span className='text-3xl '>Tailwind CSS</span>" </span> <span className='text-3xl text-green-400 '>.</span></h1> */}
//               <div className=' h-[17rem] w-[15rem] bg-green-400 rounded-lg'>

//               </div>

//               <div className=' h-auto w-[15rem] bg-green-000 rounded-lg  flex-col gap-2 justify-start items-center flex'>
//                 <div className=' h-auto w-[15rem] bg-green-000 rounded-lg  flex-col gap-2 justify-start items-center flex'>
//                   <div className='h-auto w-[12rem] justify-center items-center flex gap-2'>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-000 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-000 rounded-full'></span>
//                   </div>

//                   <div className='h-auto w-[12rem] justify-center items-center flex gap-2'>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                   </div>

//                   <div className='h-auto w-[12rem] justify-center items-center flex gap-2'>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-000 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-200 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-000 rounded-full'></span>
//                     <span className=' h-[1rem] w-[1rem] bg-slate-000 rounded-full'></span>
//                   </div>
//                 </div>

//                 <div className=' h-[10rem] mt-2 w-[15rem] rounded-md bg-violet-700'>

//                 </div>

//               </div>


//               <div className=' h-[12rem] w-[15rem] bg-green-800 rounded-md'>

//               </div>

//               <div className=' h-[12rem] -mt-[2rem] w-[15rem] bg-green-800 rounded-md'>

//               </div>


//               {/* <div className=' h-[12rem] w-[15rem] bg-green-800/20 rounded-md'>

//               </div>


//               <div className=' h-[12rem] w-[15rem] bg-green-800 rounded-md'>

//               </div> */}

//             </div>
//             </div>
//           </div>



//         </section>
//       </section>
//       <Footer />
//     </div>
//   )
// }

// export default Home





import React, { useState } from 'react'
import Header from "./Header"
import Hero_Page from './Hero_Page'
import video from "../../Assets/3dc58d5e9b8524241569b507a6aeb883.mp4"
import Why_Me from './Why_Me'
import About_My_Social from './About_My_Social'
import Life_Journey from './Life_Journey'
import Footer from './Footer'
import Slider1 from './Slider'

const Home = ({ name, img }) => {
  return (
    <div>
      <div className=' bg-slate-100'>
        <Header name={name} img={img} />
        <Hero_Page />

        <section className=' z-[10] bg-black/10'>
          <div className='w-screen lg:pt-24 pt-20 bg-white flex justify-center items-center h-auto lg:h-[90vh] shadow-lg rounded-t-[100px]'>
            {/* <video src={video} autoplay={true} className='w-full h-auto -rotate-90 ' ></video> */}
            <div className='flex flex-col items-center justify-center w-full h-auto gap-20 py-20 mx-10 rounded-lg lg:overflow-hidden lg:flex-row'>

              <div className='lg:w-1/4 w-3/4 hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-900/55 rounded-3xl  border-2 border-violet-400 bg-slate-100 flex flex-col justify-center items-center lg:h-[23rem] h-[25rem]'>
                <div className=' bg-slate-900 text-white rounded-t-3xl justify-center items-center flex h-[6rem] w-full '>
                  <span className='text-3xl font-bold '>Backend</span>
                </div>
                <div className='w-full h-full overflow-hidden bg-gradient-to-r rounded-b-3xl from-violet-600 to-violet-900'>
                  <img className="object-cover w-full h-full rounded-b-3xl " src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg" alt="" />
                </div>

              </div>

              <div className='lg:w-1/4 w-3/4 hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-900/55 rounded-3xl  border-2 border-violet-400 bg-slate-100 flex flex-col justify-center items-center h-[25rem]'>
                <div className=' bg-slate-900 text-white rounded-t-3xl justify-center items-center flex h-[6rem] w-full '>
                  <span className='text-3xl font-bold '>Frontend</span>
                </div>
                <div className='w-full h-full overflow-hidden bg-gradient-to-r rounded-b-3xl from-violet-600 to-violet-900'>
                  <img className="object-cover w-full h-full rounded-b-3xl " src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*P_H_UpQahH0juwQpXWXnpQ.jpeg" alt="" />
                </div>


              </div>


              <div className='lg:w-1/4 w-3/4 hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-900/55 rounded-3xl  border-2 border-violet-400 bg-slate-100 flex flex-col justify-center items-center lg:h-[23rem] h-[25rem]'>
                <div className=' bg-slate-900 text-white rounded-t-3xl justify-center items-center flex h-[6rem] w-full '>
                  <span className='text-3xl font-bold '>Database</span>
                </div>
                <div className='w-full h-full overflow-hidden bg-gradient-to-r rounded-b-3xl from-violet-600 to-violet-900'>
                  <img className="object-cover w-full h-full rounded-b-3xl " src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/03/best-database-to-work-with-in-2020.jpg" alt="" />
                </div>

              </div>

            </div>
          </div>
        </section>

        <Life_Journey />
        <Why_Me />
        <About_My_Social />
        <Footer />
      </div>
    </div>
  )
}

export default Home
