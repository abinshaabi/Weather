import React from 'react'
import Navbar from '../components/Navbar'
import bg from "../images/bg.jpg"
import bg1 from "../images/12.jpg"
import Hero from '../components/Hero/Hero.component'

const DefaultLayout = (props) => {
    return (
        <>
          <div className="relative w-full h-screen" >
            <img className="absolute z-0 w-full h-full" src={bg }/>
            <div className="border border-green-600 flex-col absolute  top-0 h-full w-full z-10" >
              <Navbar />
              <Hero />  
            </div>
            
          </div>
          
        </>
    )
}

export default DefaultLayout
