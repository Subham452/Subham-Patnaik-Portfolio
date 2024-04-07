import React, { useState } from 'react'
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { HashLink as Link } from 'react-router-hash-link';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const Mover_To_Top = () => {

  const [fixed, setFixed] = useState(false)

  const scrollFunction =()=>{
    if(window.scrollY > 1000){
      setFixed(true)
    }
    else{
      setFixed(false)
    }
  }

  window.addEventListener("scroll", scrollFunction)

  return (
    <Link 
    spy={true} 
    smooth={true} 
    offset={50} 
    duration={500}  to={"#Top"} className={`${fixed?"":"hidden"}`}><Tooltip title="Scroll to top">
      <IconButton>
      <div className='sticky flex lg:mr-0 -mr-9 items-center justify-center w-[3rem] shadow-lg h-[3rem] bg-gradient-to-t from-black to-violet-900 rounded-full '>
        <MdOutlineVerticalAlignTop size={28} color='white' />
      </div>
      </IconButton>
    </Tooltip>
    </Link>
  )
}

export default Mover_To_Top
