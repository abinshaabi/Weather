import React from 'react'
import Navbar from '../components/Navbar'
import bg from "../images/bg.jpg"
import bg1 from "../images/12.jpg"

const DefaultLayout = (props) => {
    return (
        <>
          <div className="relative w-full h-screen" >
            <img className="absolute z-0 w-full h-full" src={bg }/>
            <div className="absolute  top-0 fixed sticky z-10" >
                <Navbar />
            </div>
            
          </div>
          {props.children}
            
        </>
    )
}

export default DefaultLayout
