import React, { useEffect, useState } from "react";

import axios from "axios";

export const ScheduleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings/65364f13e68a2abac819b790"
      );
      setDarkMode(response.data.value);
    };
    fatchData();
  }, [darkMode]);

  const handleToggle = async () => {
    setDarkMode(!darkMode);
    const response = await axios.patch(
      "http://localhost:5000/settings/65364f13e68a2abac819b790",
      {
        value: !darkMode,
      }
    );
    console.log(response);
  };

  return (
    <div className="h-screen">
      <div className="text-3xl "> Schedule Dark Mode</div>
      <div className="my-8 flex justify-between items-center">
        <div>Schedule Dark mode</div>
        <div>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={handleToggle}
                className="sr-only"
              />
              <div
                className={`box block h-8 w-14 rounded-full ${
                  darkMode ? "bg-blue-500" : "bg-zinc-800"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                  darkMode ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};
