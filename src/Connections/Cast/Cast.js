import React, { useEffect, useState } from "react";
import Cast1 from "../../Assets/Cast1.jpg";
import Cast2 from "../../Assets/Cast2.jpg";
import Cast3 from "../../Assets/Cast3.jpg";

import axios from "axios";

export default function Cast() {
  const [cast, setCast] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings/6536544be68a2abac819b792"
      );
      setCast(response.data.value);
    };
    fatchData();
  }, [cast]);

  const handleToggle = async () => {
    setCast(!cast);
    const response = await axios.patch(
      "http://localhost:5000/settings/6536544be68a2abac819b792",
      {
        value: !cast,
      }
    );
    console.log(response);
  };

  return (
    <div>
      <div className="text-3xl">Cast</div>
      <div className="mt-8 pb-10 border-b-2 border-gray-600">
        <ul>
          <li className="mb-8 flex justify-between items-center">
            <div>
              <div>Cast</div>
              <div className="text-sm text-gray-400">
                Cast screen content to an external monitor
              </div>
            </div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={cast}
                    onChange={handleToggle}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      cast ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      cast ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <div>Demos</div>
              <div className="text-sm text-gray-400">
                Casting documents, games, photos, and videos
              </div>
            </div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-6 pb-10 border-b-2 border-gray-600">
        <div className="text-base text-gray-400">SPECIAL FEATURES</div>
        <div>
          <img
            src={Cast1}
            alt="cast1"
            className="border border-gray-500 rounded-xl my-4"
          />
        </div>
        <div>Minimise window</div>
        <div className="text-sm text-gray-400">
          Minimise the window that's being cast to be able to use other feature
          of your phone.
        </div>
        <div>
          <img
            src={Cast2}
            alt="cast1"
            className="border border-gray-500 rounded-xl my-4"
          />
        </div>
        <div>Cast with screen off</div>
        <div className="text-sm text-gray-400">
          You can keep casting when the screen of your device is turned off.
          <br />
          This feature decreases power consumption
        </div>
        <div>
          <img
            src={Cast3}
            alt="cast1"
            className="border border-gray-500 rounded-xl my-4"
          />
        </div>
        <div>Hide private items</div>
        <div className="text-sm text-gray-400">
          Don't display floating notifications, incoming calls, and other
          private items on external monitors.
        </div>
      </div>
      <div className="my-6">
        <div className="text-base text-gray-400 ">OTHER</div>
        <div className="flex justify-between my-8 items-center">
          <div>Help</div>
          <div className="text-base text-gray-500">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>Privacy Policy</div>
          <div className="text-base text-gray-500">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
