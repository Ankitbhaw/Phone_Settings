import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function SoundAssistant() {
  const [soundAssistant, setSoundAssistant] = useState({
    AdjustMedia: false,
    MultipleAudio: false,
    AllowSpeaker: false,
  });
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings2/65377c2721b25804d514b0ac"
      );
      setSoundAssistant(response.data.value);
    };
    fatchData();
  }, []);

  const handleToggle = async (n) => {
    let data = {};
    if (n === "1") {
      setSoundAssistant({
      ...soundAssistant,AdjustMedia:!soundAssistant.AdjustMedia
      });
      data = {
        ...soundAssistant,AdjustMedia:!soundAssistant.AdjustMedia
      };
    } else if (n === "2") {
      setSoundAssistant({
      ...soundAssistant,MultipleAudio:!soundAssistant.MultipleAudio
      });
      data = {
        ...soundAssistant,MultipleAudio:!soundAssistant.MultipleAudio
      };
    } else if (n === "3") {
      setSoundAssistant({
      ...soundAssistant,AllowSpeaker:!soundAssistant.AllowSpeaker
      });
      data = {
        ...soundAssistant,AllowSpeaker:!soundAssistant.AllowSpeaker
      };
    } 

    const response = await axios.patch(
      "http://localhost:5000/settings2/65377c2721b25804d514b0ac",
      {
        value: data,
      }
    );
    console.log(response);
  };
  return (
    <div className='h-screen'>
        <div className='text-3xl'>
            Sound Assistant
        </div>
        <div className='mt-8'>
        <ul>
          <li className='mb-7'>
            <div className='flex items-center justify-between'>              
              <div>
                <div>
                  Adjust media sound in multiple apps
                </div>
                <div className='text-base text-gray-400'>
                  Adjust sound for individual apps while multiple apps play audio simultaneously 
                </div>
              </div>
              <div>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={soundAssistant.AdjustMedia}
                onChange={() => handleToggle("1")}
                className="sr-only"
              />
              <div
                className={`box block h-8 w-14 rounded-full ${
                  soundAssistant.AdjustMedia ? "bg-blue-500" : "bg-zinc-800"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                  soundAssistant.AdjustMedia ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
            </div>
          </li>
          <li className='mb-7'>
            <div className='flex items-center justify-between'>
              <div>
                <div>
                  Multiple audio sources
                </div>
                <div className='text-base text-gray-400'>
                  Don't adjust media volume during incoming notification or while audio from other sources is played
                </div>
              </div>     
              <div>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={soundAssistant.MultipleAudio}
                onChange={() => handleToggle("1")}
                className="sr-only"
              />
              <div
                className={`box block h-8 w-14 rounded-full ${
                  soundAssistant.MultipleAudio? "bg-blue-500" : "bg-zinc-800"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                  soundAssistant.MultipleAudio ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>      
            </div>
         </li>      
         <li className='mb-7'>
            <div className='flex items-center justify-between'>
              <div>
                <div>
                  Allow speaker sound
                </div>
                <div className='text-base text-gray-400'>
                 Allow sound for incoming calls and notification when accessories (wired headsets or Bluetooth devices) are connected
                </div>
              </div>      
              <div>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={soundAssistant.AllowSpeaker}
                onChange={() => handleToggle("1")}
                className="sr-only"
              />
              <div
                className={`box block h-8 w-14 rounded-full ${
                  soundAssistant.AllowSpeaker ? "bg-blue-500" : "bg-zinc-800"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                  soundAssistant.AllowSpeaker ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>    
            </div>
         </li>         
        </ul>
      </div>
    </div>
  )
}
