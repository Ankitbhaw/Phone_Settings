import React, { useEffect, useState } from "react";

import axios from "axios";

export default function SoundEffects() {
  const [dolby, setDolby ] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings/6536838fbf87fea4e4f6374d"
      );
      setDolby(response.data.value);
    };
    fatchData();
  }, [dolby]);

  const handleToggle = async () => {
    setDolby(!dolby);
    const response = await axios.patch(
      "http://localhost:5000/settings/6536838fbf87fea4e4f6374d",
      {
        value: !dolby,
      }
    );
    console.log(response);
  };
  return (
    <div className="h-screen">
      <div className="text-3xl mb-8">Sound Effects</div>
      <div>
        <div className="text-sm mb-8 text-gray-400">DOLBY EFFECTS</div>
        <div>
          <ul>
            <li className="mb-5 flex justify-between items-center">
              <div>Dolby Atoms</div>
              <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={dolby}
                    onChange={handleToggle}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      dolby ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      dolby ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            </li>
            <li className="flex justify-between items-center mb-5">
              <div>Preset</div>
              <div className="flex gap-2 items-center text-base text-gray-400">
                <div>Dynamic</div>
                <div>
                  <i className="fa-solid fa-sort"></i>
                </div>
              </div>
            </li>
            <li className="flex justify-between items-center pb-10 border-b-2 border-gray-600">
              <div>Graphic equaliser</div>
              <div className="flex gap-2 items-center text-base text-gray-400">
                <div>Custom</div>
                <div>
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-sm mb-8 text-gray-400">MI SOUND</div>
        <div>
          <ul className="text-gray-500">
            <li className="flex justify-between items-center mb-5">
              <div>Adjust sound to earphones</div>
              <div className="flex gap-2 items-center text-base text-gray-400">
                <div>off</div>
                <div>
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </li>
            <li className="flex justify-between items-center mb-5">
              <div>
                <div>Equaliser</div>
                <div className="text-base">
                  Adjust individual levels for different types of music
                </div>
              </div>
              <div className="text-base text-gray-400">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li className="pb-10 border-b-2 border-gray-600">
              <div>
                <div>Volume adjustment</div>
                <div className="text-base">
                  Customise volume according to your auditory perception
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-sm mb-8 text-gray-400">MI SOUND</div>
        <div>
          <ul>
            <li className="flex justify-between items-center mb-5">
              <div>Headphone remote buttons</div>
              <div className="flex gap-2 items-center text-base text-gray-400">
                <div>Control volume level</div>
                <div>
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div>Assign buttons</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
