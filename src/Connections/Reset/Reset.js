import React from 'react'
import {PiArrowClockwise} from "react-icons/pi"

export default function Reset() {
  return (
    <div className='h-screen flex flex-col justify-between'>
    <div>
        <div className='text-3xl mb-8'>
            Reset Wi-Fi, mobile networks, and Bluetooth 
        </div>
        <div className='pb-10 border-b-2 border-gray-600'>
            <div className='text-base text-gray-400'> 
                THIS WILL RESET ALL NETWORK SETTINGS, INCLUDING
            </div>
            <div>
                <ul >
                    <li className='my-8'>
                        Wifi
                    </li>
                    <li className='mb-8'>
                        Mobile data
                    </li>
                    <li>
                        Bluetooth
                    </li>
                </ul>
            </div>
        </div>
        <div className='my-8'>
            <div className='text-base text-gray-600'>
                SELECT SIM CARD TO RESET
            </div>
            <div>
                <ul>
                    <li className='my-6'>
                        JIo
                    </li>
                    <li>
                        airtel
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div className='text-gray-400 w-100 mx-auto mb-14' >
                <div className='text-2xl ml-6'>
                    <PiArrowClockwise/>
                </div>
                    <div className='text-sm'>
                        Reset settings
                    </div>
        </div>
        </div>
  )
}
