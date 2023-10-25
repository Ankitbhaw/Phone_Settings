import React, { useEffect, useState } from "react";
import lightMode from "../Assets/light.jpg";
import darkMode from "../Assets/dark.jpg";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Display() {
  const [readingMode, setReadingMode ] = useState({
    ReadingMode:false,Schedule:false
  });
  const [DarkMode, setDarkMode] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings/65364de9e68a2abac819b78f"
      );
      setAutoRotate(response.data.value);
      const response2 = await axios.get(
        "http://localhost:5000/settings/65364f13e68a2abac819b790"
      );
      setDarkMode(response2.data.value);
      const response3 = await axios.get(
        "http://localhost:5000/settings2/65369b9899104ad7ada73976"
      );
      setReadingMode(response3.data.value);
    };
    fatchData();
    
  }, [autoRotate]);

  const handleToggle = async () => {
    setAutoRotate(!autoRotate);
    const response = await axios.patch(
      "http://localhost:5000/settings/65364de9e68a2abac819b78f",
      {
        value: !autoRotate,
      }
    );
    console.log(response);
  };

  return (
    <div>
      <div className="text-3xl">Display</div>
      <div className="py-5 flex justify-between items-center">
        <div className="mr-3 flex flex-col items-center gap-2">
          <img src={lightMode} alt="light" className="rounded-3xl " />
          <span className="text-base text-gray-400">Light Mode</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img
            src={darkMode}
            alt="dark"
            className="rounded-3xl border-4 border-blue-800 p-1"
          />
          <span className="text-base text-gray-400">Dark Mode</span>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link
              to={"/display/schedule_dark_mode"}
              className="py-2 mt-4 pb-10  flex justify-between items-center"
            >
              {" "}
              <div>Schedule Dark mode</div>
              <div className="text-base text-gray-400">
               { DarkMode ? <span>on</span>:<span>off</span>}
                <i className="fa-solid fa-angle-right ml-2 "></i>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="py-2 border-b-2 pb-10 border-gray-600 flex justify-between items-center"
            >
              {" "}
              <div>More Dark mode options</div>
              <div className="text-base text-gray-400 ">
                <i className="fa-solid fa-angle-right "></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-500 pb-5">
        <div className="text-sm text-gray-400 my-4">SCREEN</div>
        <ul className="text-xl">
          <li>
            <Link
              to={"/display/brightness_level"}
              className="py-2  pb-6 flex justify-between items-center"
            >
              <div>Brightness level</div>
              <div className="text-base text-gray-400">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to={"/display/reading_mode"}
              className="py-2  pb-6 flex justify-between items-center"
            >
              <div>
                Reading mode
                <div className="text-sm text-gray-400">
                  Reading mode adjusts and texture of the items
                  <br /> on your on your screen allowing your eyes to relax
                </div>
              </div>
              <div className=" text-base text-gray-400">
              { readingMode.ReadingMode ? <span>on</span>:<span>off</span>}
                <i className="fa-solid fa-angle-right ml-2"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to={"/about_phone/detailed_info_specs/status/model"}
              className="py-2  pb-6 flex justify-between items-center"
            >
              <div>Color scheme</div>
              <div className="text-base text-gray-400">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>Refresh rate</div>
            <div className="text-base text-gray-400">
              <span>120Hz</span>
              <i className="fa-solid fa-angle-right ml-2"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-500 pb-5">
        <div className="text-sm text-gray-400 my-4">FONT</div>
        <ul className="text-xl">
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>Font</div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>Text size</div>
            <div className="flex justify-between item-center text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className=" pb-5">
        <div className="text-sm text-gray-400 my-4">SYSTEM</div>
        <ul className="text-xl">
          <li>
            <Link
              to={"/display/device_vr"}
              className="py-2  pb-6 flex justify-between items-center"
            >
              <div>When device is in VR</div>
              <div className="text-base text-gray-400">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>Auto-rotate screen</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={autoRotate}
                    onChange={handleToggle}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      autoRotate ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      autoRotate ? "translate-x-full" : ""
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
}
