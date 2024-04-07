import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { auth, provider } from './Firebase_Config'
import { useNavigate } from "react-router-dom"
import video from "../../Assets/1d521b5022e8d07852892eff71392b1a.mp4"
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate()
  
  const [active, setActive] = useState(true)

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",

  })

  const [values1, setValues1] = useState({
    name1: "",
    email1: "",
    password1: "",

  })

  const createAccount = async () => {
    
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(async(res) => {
      console.log(res)
      const user=res.user
      await updateProfile(user, {
        displayName: values.name,
      })
      navigate("/")

    })
  .catch((err) => {
    console.log(err)
    alert(err.code)
    setError(true)
    if(err.code ==="auth/missing-password"){
      setError(true)
      setErrorname("Fill all Fields")
      setTimeout(() => {
        // console.log("Delayed for 1 second.");
        setError(false)
      }, "9400");
    }
    else if(err.code === "auth/email-already-in-use"){
      setError(true)
      setErrorname("Email already in use")
      setTimeout(() => {
        // console.log("Delayed for 1 second.");
        setError(false)
      }, "9400");
    }
    
  })
  }

const [error, setError] = useState()
const [errorname, setErrorname] = useState()

const withGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
    navigate("/")
  }
  catch (err) {
    console.log(err)
  }
}

const signin = async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, values1.email1, values1.password1)

    setErrorname("Sucessfully signed in")
    setError(true)
    setTimeout(() => {
      // console.log("Delayed for 1 second.");
      navigate("/")
    }, "1000");
  }
  catch (err) {
    setError(true)
    console.log(err)
    // alert(err.code)
    if(err.code==="auth/network-request-failed"){
      setErrorname("Network Request Failed")
    }
    else if(err.code ==="auth/missing-password" || err.code === "auth/invalid-email"){
      setErrorname("Fill all Fields")
      setTimeout(() => {
        // console.log("Delayed for 1 second.");
        setError(false)
      }, "9400");
    }
    else if(err.code==="auth/invalid-credential"){
      setError(true)
      setErrorname("Please Signup Or check the Password")
    }
    else{
      setErrorname(err.code)
    }
  }
}



return (
  <div>

    <section className={` ${active ? "flex" : "hidden"}  flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black  `}>
      <div>
        <video autoPlay={true} loop={true} src={video}></video>
      </div>
      <div className='absolute flex flex-col items-center justify-center gap-10 text-white transition-all duration-300 ' >
        <input className=' required placeholder-white h-[3rem] w-[20rem] bg-white/5 border-2 border-white/55' type="text" placeholder='Name' onChange={(e) => { setValues((prev) => ({ ...prev, name: e.target.value })) }} />
        <input className=' required placeholder-white h-[3rem] w-[20rem] bg-white/5 border-2 border-white/55' type="email" placeholder='Email' onChange={(e) => { setValues((prev) => ({ ...prev, email: e.target.value })) }} />
        <input className=' required placeholder-white h-[3rem] w-[20rem] bg-white/5 border-2 border-white/55' type="password" placeholder='Password' onChange={(e) => { setValues((prev) => ({ ...prev, password: e.target.value })) }} />
        <button className=' h-[3rem] w-[20rem] rounded-full bg-violet-900/55 text-white text-2xl border-white' onClick={createAccount}>REGISTER</button><div className={` ${error?" text-red-700 bg-red-900/55":" hidden text-green-500"} flex  h-[3rem] w-[20rem] rounded-full  justify-center items-center font-bold text-sm  border-white `}>
            {errorname}
          </div>
        <button className=' h-auto w-[20rem] rounded-full bg-violet-900/0 text-white text-sm flex justify-end items-end -mt-7 border-white' onClick={createAccount}>have an account ?<span className='font-bold text-green-400 ' onClick={() => { setActive(!active); setError(false) }}>Login</span></button>

        <div className="text-2xl text-slate-200">Or</div>
        <div className="flex flex-row items-center justify-between w-auto h-auto p-2 px-2 -mb-20 rounded-full bg-white/20 gap-11" onClick={withGoogle}>
          <div className="w-auto h-auto p-4 text-2xl rounded-full bg-slate-200/20">
            <FcGoogle />
          </div>
        </div>
      </div>
    </section>

    <section className={` ${active ? "hidden" : "flex"} flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black `}>
      <div>
        <video autoPlay={true} loop={true} src={video}></video>
      </div>
      <div className='absolute flex flex-col items-center justify-center gap-10 text-white ' >
          <input className=' required placeholder-white h-[3rem] w-[20rem] bg-white/5 border-2 border-white/55' type="email" placeholder='Email' onChange={(e) => { setValues1((prev)=>({ ...prev, email1:e.target.value})) }} />
          <input className=' required placeholder-white h-[3rem] w-[20rem] bg-white/5 border-2 border-white/55' type="password" placeholder='Password' onChange={(e) => { setValues1((prev)=>({...prev, password1:e.target.value})) }} />
          <button className=' required h-[3rem] w-[20rem] rounded-full bg-violet-900/55 text-white text-lg border-white' onClick={signin}>Login</button>
          <div className={` ${error?" text-red-700 bg-red-900/55":" bg-green-900/55 text-green-500 hidden"} flex  h-[3rem] w-[20rem] rounded-full  justify-center items-center font-bold text-sm  border-white `}>
            {errorname}
          </div>
          <button className=' h-auto w-[20rem] rounded-full bg-violet-900/0 text-white text-sm flex justify-end items-end -mt-7 border-white' onClick={() => { setActive(!active); setError(false) }} >dont't have an account ?<span className='font-bold text-green-400 '>Signup</span></button>
          <div className="text-2xl text-slate-200">Or</div>
          <div className="flex flex-row items-center justify-between w-auto h-auto p-2 px-2 -mb-20 rounded-full bg-white/20 gap-11" onClick={withGoogle}>
            <div className="w-auto h-auto p-4 text-2xl rounded-full bg-slate-200/20">
              <FcGoogle />
            </div>
          </div>
        </div>
    </section>


  </div>
)
}

export default Register
