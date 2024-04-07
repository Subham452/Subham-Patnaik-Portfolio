import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Router/Firebase_Config'
import { signOut } from "firebase/auth"
import { IoCloseOutline } from "react-icons/io5";
import { HashLink as Link} from 'react-router-hash-link'
import Mover_To_Top from './Move_To_Top';
const Header = ({ name, img }) => {

    const navigate = useNavigate()
    const route = [
        {
            name: "About",
            path: "/gallery",
            Link:"#About",
        },

        {
            name: "Projects",
            path: "/gallery",
            Link:"#Projects",
        },
        {
            name: "Contact",
            path: "/gallery",
            Link:"#Contact",
        },
        {
            name: "Qualification",
            path: "/gallery",
            Link:"#Qualification",
        },
    ]

    const logout = async () => {
        try {
            await signOut(auth)
            navigate("/Register")
        }
        catch (err) {
            console.log(err)
            alert(err.code)
        }
    }

    const [active, setActive] = useState(false)

    const [menu, setMenu] = useState(true)

    setTimeout(() => {
        setMenu(false)
    }, "9000");


    //Use This if header was now fixed ***************************
    
    // const [fixHeader, setFixHeader] = useState(false)

    // const scroll=()=>{
    //     if(window.scrollY >= 0){
    //         setFixHeader(true)
    //     }
    //     else{
    //         setFixHeader(false)
    //     }
    // }

    // window.addEventListener("scroll",scroll)

    //************************************************************

    return (
        <div className={` fixed top-0 lg:top-4  z-[100] w-screen h-auto lg:px-10  `}>
            <section className='flex px-6 lg:px-0 items-center justify-center w-full h-[4rem] shadow-lg lg:h-auto lg:rounded-full bg-white/70 '>

                <div className='flex items-center justify-between w-full h-full rounded-md lg:px-3 lg:mx-6 bg-white/0'>
                    <div className='flex flex-row items-center justify-center gap-3 '>
                        <svg id="logo-85" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z" fill="#5417D7"></path></svg>
                        <span className='font-bold text-indigo-900 lg:text-xl '>SUBHAM PATNAIK</span>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center w-auto h-auto transition-all duration-300 lg:hidden '>
                    <div className='' onClick={() => { setActive(!active) }}>
                       {active? <IoCloseOutline size={29} /> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>}
                    </div>
                    <div className={` shadow-lg  absolute flex justify-between items-center flex-col transition-all duration-300  bg-slate-100/90 ${active ? "flex h-[23rem] pt-5 -ml-[15.6rem] mt-[27.3rem] w-[20rem]" : "hidden"}`}  onClick={()=>{ setActive(!active)}} >
                        <div className='flex flex-col items-start justify-center w-full h-auto gap-5 pl-10 font-semibold'>
                            {
                                route.map((i, j) => (
                                    <Link 
                                    spy={true} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500}  to={i.Link}>
                                        <div className='font-bold text-md '>
                                            {i.name}
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>

                        <div className='flex items-center justify-between w-full h-20 px-10 mb-10 bg-black/0 '>
                            <div className=' overflow-hidden h-[3rem] w-[3rem] justify-center items-center flex text-xl font-semibold text-white rounded-full bg-gradient-to-r from-black to-violet-900'>
                                {img ? <img src={img} alt="" /> :
                                    <h1>{name.charAt(0)}</h1>}
                            </div>
                            <div className='flex flex-col items-end justify-end gap-2 '>
                                <div>{name ? `Welcome - ${name}` : <span onClick={()=>{ navigate("/Register") }}>Please Login/Register</span>}</div>
                                <span className='font-bold text-red-700' onClick={logout}>{name?"Log out":""}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='items-center justify-end hidden w-screen h-20 pr-2 mx-6 rounded-md lg:flex bg-white/0 gap-7'>
                    <div className='flex items-center justify-between gap-5 font-semibold flow-row'>
                        {
                            route.map((i, j) => (
                                <Link 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500}  to={i.Link}>
                                    <div className='text-lg '>
                                        {i.name}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                    <div className='flex flex-row items-center justify-between gap-7'>
                        <div className='' onClick={() => { setMenu(true) }}>
                            {name ? `Welcome - ${name}` : <div onClick={()=>{ navigate("/Regisister")}}>Login/Register</div>}
                        </div>

                        <div className='flex items-center justify-center w-10 h-10 overflow-hidden text-white rounded-full bg-violet-900' onClick={() => { setMenu(!menu) }}>
                            <span>
                                {
                                    img? <img src={img} alt="" /> :
                                    <h1 className="text-2xl font-semibold ">{name.charAt(0)}</h1>
                                }
                            </span>

                            <div className={`absolute rounded-full bg-black border-4 border-violet-900 -ml-[6rem] mt-[13rem] h-[7rem]  flex-col justify-start items-center  w-auto ${menu ? "flex" : "hidden"} `} onClick={() => { setMenu(!menu) }}>
                                <div className="h-[2rem] ml-[6rem] rotate-45 w-[2rem] border-t-4 border-l-4 border-violet-900 -mt-[1.2rem] bg-black">

                                </div>
                                <div className="flex flex-row items-center justify-between gap-4 mx-10 mt-4 ">
                                    <div className='flex items-center justify-center overflow-hidden text-white rounded-full h-14 w-14 bg-violet-900'>
                                        {img ? <img src={img} alt="" /> :
                                            <h1 className="text-2xl font-semibold ">{name.charAt(0)}</h1>}
                                    </div>
                                    <div className="flex flex-col items-start justify-start text-white hap-2">
                                        <p>{name}</p>
                                        <span className="font-bold text-red-500 hover:text-red-600" onClick={logout}>{name ? `Logout` : "Register/Login"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='absolute right-10  mt-[70vh]'>
                
            <Mover_To_Top />
            </section>
        </div>
    )
}

export default Header
