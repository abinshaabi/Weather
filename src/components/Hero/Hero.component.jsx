import React from 'react'
import {CgSearch} from 'react-icons/cg'
import Card from './Card.component'
    
const Hero = () => {
    return (
        <>
           <div className="flex h-5/6">
               <div className="w-full h-full border border-blue-600 text-start flex items-center pl-10 pb-16 text-white"
                    style={{fontSize: "74px", fontWeight: "300"}}
               >Know <br />the Weather</div>
               <div className="flex-col gap-3 w-full h-full border border-blue-600 flex items-center justify-center">
                   <div className="flex px-3  rounded-2xl bg-white items-center w-72 gap-2 text-lg ">
                       <input className=" w-full  focus:outline-none placeholder-gray-500 rounded-2xl" type="search" placeholder="Search" />
                       <CgSearch className="text-blue-800 text-2xl"/>
                   </div>
                   <h1 className="text-white text-2xl">Search among almost 200 cities in the World</h1>
                   <Card />
               </div>
           </div>                                                           
        </>
    )
}

export default Hero
