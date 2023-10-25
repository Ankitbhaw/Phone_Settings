import React, { useEffect, useState } from 'react'
import {AiOutlinePlus} from "react-icons/ai"

import axios from 'axios';

export default function VPN() {
    const [vPN, setVPN ] = useState(false);
    useEffect(() => {
      const fatchData = async () => {
        const response = await axios.get(
          "http://localhost:5000/settings/653655d8e68a2abac819b793"
        );
        setVPN(response.data.value);
      };
      fatchData();
    }, [vPN]);
  
    const handleToggle = async () => {
        setVPN(!vPN);
      const response = await axios.patch(
        "http://localhost:5000/settings/653655d8e68a2abac819b793",
        {
          value: !vPN,
        }
      );
      console.log(response);
    };
  
  return (
    <div className='h-screen flex flex-col justify-between'>
        <div>
        <div className='text-3xl mb-8'>
            VPN
        </div>
        <div className='flex justify-between items-center'>
            <div>
                VPN
            </div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={vPN}
                    onChange={handleToggle}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                        vPN ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                        vPN ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
        </div>
        </div>
        <div className='w-100 mx-auto mb-14'>
            <div className='fill-gray-400 ml-3 my-3'>
                <AiOutlinePlus/>
            </div>
            <div className='text-sm text-gray-400'>
                add VPN
            </div>
        </div>
    </div>
  )
}
