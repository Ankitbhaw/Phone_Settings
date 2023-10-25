import React, { useEffect, useState } from "react";

import axios from "axios";
export default function AdditionalSettings() {
  const [additional, setAdditional] = useState({
    DialPad: false,
    TapSound: false,
    LockingDevice: false,
    ScreenShot: false,
    UninstallApp: false,
    DeletingItems: false,
    ChargerIsConnected: false,
    StartUp: false,
  });
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings2/6537805055d984f7f751cc89"
      );
      setAdditional(response.data.value);
    };
    fatchData();
  }, []);

  const handleToggle = async (n) => {
    let data = {};
    if (n === "1") {
      setAdditional({
        ...additional,
        DialPad: !additional.DialPad,
      });
      data = {
        ...additional,
        DialPad: !additional.DialPad,
      };
    } else if (n === "2") {
      setAdditional({
        ...additional,
        TapSound: !additional.TapSound,
      });
      data = {
        ...additional,
        TapSound: !additional.TapSound,
      };
    } else if (n === "3") {
      setAdditional({
        ...additional,
        LockingDevice: !additional.LockingDevice,
      });
      data = {
        ...additional,
        LockingDevice: !additional.LockingDevice,
      };
    } else if (n === "4") {
      setAdditional({
        ...additional,
        ScreenShot: !additional.ScreenShot,
      });
      data = {
        ...additional,
        ScreenShot: !additional.ScreenShot,
      };
    } else if (n === "5") {
      setAdditional({
        ...additional,
        UninstallApp: !additional.UninstallApp,
      });
      data = {
        ...additional,
        UninstallApp: !additional.UninstallApp,
      };
    } else if (n === "6") {
      setAdditional({
        ...additional,
        DeletingItems: !additional.DeletingItems,
      });
      data = {
        ...additional,
        DeletingItems: !additional.DeletingItems,
      };
    } else if (n === "7") {
      setAdditional({
        ...additional,
        ChargerIsConnected: !additional.ChargerIsConnected,
      });
      data = {
        ...additional,
        ChargerIsConnected: !additional.ChargerIsConnected,
      };
    } else if (n === "8") {
      setAdditional({
        ...additional,
        StartUp: !additional.StartUp,
      });
      data = {
        ...additional,
        StartUp: !additional.StartUp,
      };
    }

    const response = await axios.patch(
      "http://localhost:5000/settings2/6537805055d984f7f751cc89",
      {
        value: data,
      }
    );
    console.log(response);
  };
  return (
    <div className="h-screen">
      <div className="text-3xl mb-8">Additional Settings</div>
      <div>
        <ul>
          <li className="flex items-center justify-between mb-6">
            <div>Dial pad tone</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={additional.DialPad}
                    onChange={() => handleToggle("1")}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      additional.DialPad ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      additional.DialPad ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
          <li className="flex items-center justify-between mb-6">
            <div>Tap sounds</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={additional.TapSound}
                    onChange={() => handleToggle("2")}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      additional.TapSound ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      additional.TapSound ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
          <li className="flex items-center justify-between mb-6">
            <div>Play sound when locking device</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={additional.LockingDevice}
                    onChange={() => handleToggle("3")}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      additional.LockingDevice ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      additional.LockingDevice ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
          <li className="flex items-center justify-between mb-6">
            <div>Play sound when taking screenshots</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={additional.ScreenShot}
                    onChange={() => handleToggle("4")}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      additional.ScreenShot ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      additional.ScreenShot ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
          <li className="flex items-center justify-between mb-6">
            <div>Play sound when uninstalling apps</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={additional.UninstallApp}
                    onChange={() => handleToggle("5")}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      additional.UninstallApp ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      additional.UninstallApp ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
          <li className="flex items-center justify-between mb-6">
            <div>play sound when deleting items</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={additional.DeletingItems}
                    onChange={() => handleToggle("6")}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      additional.DeletingItems ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      additional.DeletingItems ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
          <li className="flex items-center justify-between mb-6">
            <div>Play sound when charger is connected</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={additional.ChargerIsConnected}
                    onChange={() => handleToggle("7")}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      additional.ChargerIsConnected ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      additional.ChargerIsConnected ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </li>
          <li className="flex items-center justify-between mb-6">
            <div>Play audio at startup</div>
            <div>
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={additional.StartUp}
                    onChange={() => handleToggle("8")}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      additional.StartUp ? "bg-blue-500" : "bg-zinc-800"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                      additional.StartUp ? "translate-x-full" : ""
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
