import React, { useEffect, useState } from "react";
import ReadMode from "../../Assets/ReadingMode.jpg";

import axios from "axios";

export const ReadingMode = () => {
  const [readingMode, setReadingMode] = useState({
    ReadingMode: false,
    Schedule: false,
  });
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings2/65369b9899104ad7ada73976"
      );
      setReadingMode(response.data.value);
    };
    fatchData();
  }, []);

  const handleToggle = async (n) => {
    let data = {};
    if (n === "1") {
      setReadingMode({
        ReadingMode: !readingMode.ReadingMode,
        Schedule: readingMode.Schedule,
      });
      data = {
        ReadingMode: !readingMode.ReadingMode,
        Schedule: readingMode.Schedule,
      };
    } else {
      setReadingMode({
        ReadingMode: readingMode.ReadingMode,
        Schedule: !readingMode.Schedule,
      });
      data = {
        ReadingMode: readingMode.ReadingMode,
        Schedule: !readingMode.Schedule,
      };
    }

    const response = await axios.patch(
      "http://localhost:5000/settings2/65369b9899104ad7ada73976",
      {
        value: data,
      }
    );
    console.log(response);
  };
  return (
    <div className="h-screen">
      <div className="text-3xl">Reading mode</div>
      <div className="my-8 ">
        <img src={ReadMode} alt={"read"} />
      </div>
      <div className="border-b-2 flex justify-between items-center border-gray-600  pb-10">
        <div>Reading mode</div>
        <div>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={readingMode.ReadingMode}
                onChange={() => handleToggle("1")}
                className="sr-only"
              />
              <div
                className={`box block h-8 w-14 rounded-full ${
                  readingMode.ReadingMode ? "bg-blue-500" : "bg-zinc-800"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                  readingMode.ReadingMode ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="pt-10">
          <div>Schedule</div>
          <span className="text-base text-gray-400">
            Schedule time to turn Reading mode on and off
          </span>
        </div>
        <div>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={readingMode.Schedule}
                onChange={() => handleToggle("2")}
                className="sr-only"
              />
              <div
                className={`box block h-8 w-14 rounded-full ${
                  readingMode.Schedule ? "bg-blue-500" : "bg-zinc-800"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                  readingMode.Schedule ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
