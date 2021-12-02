import React from 'react'
import bg from "../../images/bg.jpg"
import logo from '../../images/logo.png'
const Navbar = () => {
    return (
      <>
        <div className="w-full flex items-center justify-between h px-4 py-3 " style={{fontFamily: `Comic Neue, cursive `}}>
          <div className="flex  items-center  gap-5">
            <div className="w-16 h-16  ">
              <img src={logo} alt="logo" className=" w-full h-full"/>
            </div>
            <h1 className="text-white font-thin   text-3xl" >Know the Weather</h1>
          </div>
          <div className="flex gap-12 pr-5">
            <a href="#" className="text-white text-lg font-thin">Home</a>
            <a href="#" className="text-white text-lg font-thin">About</a>
          </div>
        </div>  
      </>
    )
}

export default Navbar
