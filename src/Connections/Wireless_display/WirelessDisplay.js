import React, { useEffect, useState } from 'react'

import axios from 'axios';

export default function WirelessDisplay() {
  const [wirelessDisplay, setWirelessDisplay] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings/65365667e68a2abac819b794"
      );
      setWirelessDisplay(response.data.value);
    };
    fatchData();
  }, [wirelessDisplay]);

  const handleToggle = async () => {
    setWirelessDisplay(!wirelessDisplay);
    const response = await axios.patch(
      "http://localhost:5000/settings/65365667e68a2abac819b794",
      {
        value: !wirelessDisplay,
      }
    );
    console.log(response);
  };

  return (
    <div className='h-screen'>
        <div className='text-3xl mb-10'>
            Wireless display
        </div>
        <div className='flex justify-between items-center'>
            <div>
                Wireless display
            </div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={wirelessDisplay}
                    onChange={handleToggle}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      wirelessDisplay ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      wirelessDisplay ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
        </div>
    </div>
  )
}
