import React from 'react'
import './Card.css'
import { WiDayCloudy } from 'react-icons/wi'
import sky from '../../images/clear-sky.png'


const Card = () => {
    return (
        <>
            <div className='bg-blue-300 rounded-xl py-4 px-7 flex flex-col gap-3'>
                <div className="flex flex-col items-center">
                    <h2 className='text-xl'>London</h2>
                    <small>Monday, 26th December</small>
                </div>
                <div className="flex flex-col items-center">
                    <img src={sky} alt="sky" className='w-28 h-28' />
                    <div className="flex items-start"><h1 className="text-5xl pl-4">27</h1>°C</div>
                    <h1 className='text-xl'>Clear Sky</h1>
                </div>
                <div className='flex gap-4 justify-center'>
                    <div className='flex flex-col items-center'>
                        <h1>Tod</h1>
                        <img src={sky} alt="sky" className='w-12 h-12' />
                        <h1>27°/22°</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1>Tom</h1>
                        <img src={sky} alt="sky" className='w-12 h-12' />
                        <h1>27°/22°</h1>
                    </div><div className='flex flex-col items-center'>
                        <h1>Wed</h1>
                        <img src={sky} alt="sky" className='w-12 h-12' />
                        <h1>27°/22°</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
/*
<div className="card items-center">
                <h1>Alappuzha</h1>
                <div className="flex items-start"><h1 className="text-6xl">27</h1>°C</div>
                <img src={sky} alt="" className='w-28 h-28'/>
                
            </div>
*/
export default Card
