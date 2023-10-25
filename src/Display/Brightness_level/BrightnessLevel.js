import React, { useEffect, useState } from "react";
import { BiSolidSun } from "react-icons/bi";

import axios from "axios";

export const BrightnessLevel = () => {
  const [brightness, setBrightness] = useState(false);
  const [brightnessSlider, setBrightnessSlider] = useState(10);
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings/65365127e68a2abac819b791"
      );
      setBrightness(response.data.value);
      const response2 = await axios.get(
        "http://localhost:5000/settings/slider/65378721684fe83f477b919f"
      );
      setBrightnessSlider(response2.data.value);
    };
    fatchData();
  }, [brightness]);

  const handleToggle = async () => {
    setBrightness(!brightness);
    const response = await axios.patch(
      "http://localhost:5000/settings/65365127e68a2abac819b791",
      {
        value: !brightness,
      }
    );
    console.log(response);
  };
  const handleSlider = async (event) => {
    setBrightnessSlider(event.target.valueAsNumber);
    const response = await axios.patch(
      "http://localhost:5000/settings/slider/65378721684fe83f477b919f",
      {
        value: event.target.valueAsNumber,
      }
    );
    console.log(response);
  }

  return (
    <div className="h-screen">
      <div className="text-3xl ">Brightness level</div>
      <div className="my-10 border-b-2 border-gray-600">
        <div className="gap-3 flex items-center">
          <BiSolidSun />
          <span className="text-base">Screen brightness</span>
        </div>
        <div>
      <div className='px-2'>
          <input
          className='w-full'
            type="range"
            min={0}
            max={100}
            step={0.02}
            value={brightnessSlider}
            onChange={event => {
             handleSlider(event)
            }}
          />
      </div>
      </div>
      </div>
      <div>
        <ul>
          <li className="py-2 mt-4 pb-10  flex justify-between items-center">
            {" "}
            <div>
              <div>Automatic brightness</div>
              <span className="text-sm text-gray-300">
                Adjust brightness to ambient light to save battery
              </span>
            </div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={brightness}
                    onChange={handleToggle}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      brightness ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      brightness ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
