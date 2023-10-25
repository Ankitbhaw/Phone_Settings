import React, { useEffect, useState } from "react";
import { GoBellFill } from "react-icons/go";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BiSolidAlarm } from "react-icons/bi";
import { RiMusic2Fill } from "react-icons/ri";
import { MdTouchApp } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Sound() {
  const [sound, setSound] = useState({
    SilentMode: false,
    SilentMedia: false,
    VibrateOnCall: false,
    VibrateInSilentMode: false,
    Haptic: false,
  });
  const [level, setLevel] = useState({
    Media: 10,
    Ringtone: 10,
    Alarm: 10,
    HapticFeedback: 10,
  });
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings2/653774265eef560b20fff2d3"
      );
      setSound(response.data.value);
      const response2 = await axios.get(
        "http://localhost:5000/settings/slider_object/653788fd1b7fe8a5b08d4960"
      );
      setLevel(response2.data.value);
    };
    fatchData();
  }, []);

  const handleToggle = async (n) => {
    let data = {};
    if (n === "1") {
      setSound({
        ...sound,
        SilentMode: !sound.SilentMode,
      });
      data = {
        ...sound,
        SilentMode: !sound.SilentMode,
      };
    } else if (n === "2") {
      setSound({
        ...sound,
        SilentMedia: !sound.SilentMedia,
      });
      data = {
        ...sound,
        SilentMedia: !sound.SilentMedia,
      };
    } else if (n === "3") {
      setSound({
        ...sound,
        VibrateOnCall: !sound.VibrateOnCall,
      });
      data = {
        ...sound,
        VibrateOnCall: !sound.VibrateOnCall,
      };
    } else if (n === "4") {
      setSound({
        ...sound,
        VibrateInSilentMode: !sound.VibrateInSilentMode,
      });
      data = {
        ...sound,
        VibrateInSilentMode: !sound.VibrateInSilentMode,
      };
    } else if (n === "5") {
      setSound({
        ...sound,
        Haptic: !sound.Haptic,
      });
      data = {
        ...sound,
        Haptic: !sound.Haptic,
      };
    }

    const response = await axios.patch(
      "http://localhost:5000/settings2/653774265eef560b20fff2d3",
      {
        value: data,
      }
    );
    console.log(response);
  };
  const handleSlider = async(event,n)=>{
    let data = {};
    if (n === "1") {
      setLevel({
        ...level,
          Media:event.target.valueAsNumber
      });
      data = {
        ...level,
          Media:event.target.valueAsNumber
      };
    } else if (n === "2") {
      setLevel({
        ...level,
          Ringtone:event.target.valueAsNumber
      });
      data = {
        ...level,
          Ringtone:event.target.valueAsNumber
      };
    } else if (n === "3") {
      setLevel({
        ...level,
          Alarm:event.target.valueAsNumber
      });
      data = {
        ...level,
        Alarm:event.target.valueAsNumber
      };
    } else if (n === "4") {
      setLevel({
        ...level,
        HapticFeedback:event.target.valueAsNumber
      });
      data = {
        ...level,
        HapticFeedback:event.target.valueAsNumber
      };
    }
    const response = await axios.patch(
      "http://localhost:5000/settings/slider_object/653788fd1b7fe8a5b08d4960",
      {
        value: data,
      }
    );
    console.log(response);
  }
  return (
    <div>
      <div className="text-3xl">Sound & vibration</div>
      <div className="grid grid-cols-2 my-6 gap-5">
        <div className="rounded-xl p-4 bg-zinc-900 cursor-pointer">
          <div className="text-7xl my-4 ">
            <GoBellFill className="fill-violet-800" />
          </div>
          <div>Notifications</div>
          <div className="text-base text-zinc-400">Droplets</div>
        </div>
        <div className="">
          <div className="rounded-xl mb-4 p-5 flex items-center cursor-pointer bg-zinc-900">
            <div className="text-3xl mr-3">
              <FaPhoneSquareAlt className="fill-green-500" />
            </div>
            <div>
              <div className="text-base">Ringtone</div>
              <div className="text-sm text-zinc-400">MI (Remix)</div>
            </div>
          </div>
          <div className="rounded-xl flex items-center cursor-pointer p-5 bg-zinc-900">
            <div className="text-4xl mr-2">
              <BiSolidAlarm className="fill-red-400" />
            </div>
            <div>
              <div className="text-base">Alarm</div>
              <div className="text-sm text-zinc-400">Nature alarm</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm text-gray-400 mb-6">ADJUST VOLUME</div>
        <ul>
          <li className="mb-3">
            <div className="flex items-center">
              <div className="mr-4">
                <RiMusic2Fill />
              </div>
              Media
            </div>
            <div className="mx-auto w-100 px-2 mt-2">
            <div>
      <div className='px-2'>
          <input
          className='w-full'
            type="range"
            min={0}
            max={100}
            step={0.02}
            value={level.Media}
            onChange={event => {
              handleSlider(event,"1")
            }}
          />
      </div>
      </div>
            </div>
          </li>
          <li className="mb-3">
            <div className="flex items-center">
              <div className="mr-4">
                <GoBellFill />
              </div>
              Ringtone
            </div>
            <div className="mx-auto w-100 px-2 mt-2">
               <div>
      <div className='px-2'>
          <input
          className='w-full'
            type="range"
            min={0}
            max={100}
            step={0.02}
            value={level.Ringtone}
            onChange={event => {
              handleSlider(event,"2")
            }}
          />
      </div>
      </div>
            </div>
          </li>
          <li className="mb-3">
            <div className="flex items-center">
              <div className="mr-4">
                <BiSolidAlarm />
              </div>
              Alarm
            </div>
            <div className="mx-auto w-100 px-2 mt-2">
            <div>
      <div className='px-2'>
          <input
          className='w-full'
            type="range"
            min={0}
            max={100}
            step={0.02}
            value={level.Alarm}
            onChange={event => {
              handleSlider(event,"3")
            }}
          />
      </div>
      </div>
            </div>
          </li>
          <li className="pb-10 border-b-2 border-gray-600">
            <Link
              to={"/sound/sound_assistant"}
              className="flex items-center justify-between"
            >
              <div>
                <div className="">Sound assistant</div>
                <div className="text-base text-neutral-400">
                  Customise your Sound settings
                </div>
              </div>
              <div className="text-gray-400">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <div className="text-sm text-gray-400 mb-6">SOUND OPTIONS</div>
        <ul>
          <li className="mb-7">
            <div className="flex justify-between items-center">
              <div>
                <div>Silent mode</div>
                <div className="text-base text-gray-400">
                  Silence incoming calls amd Notifications
                </div>
              </div>
              <div>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={sound.SilentMode}
                      onChange={() => handleToggle("1")}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        sound.SilentMode ? "bg-blue-500" : "bg-zinc-800"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                        sound.SilentMode ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </li>
          <li className="mb-7">
            <div className="flex justify-between items-center">
              <div>
                <div>Silent media in Silent mode</div>
                <div className="text-base text-gray-400">
                  Games,music,videos,and other apps
                </div>
              </div>
              <div>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={sound.SilentMedia}
                      onChange={() => handleToggle("2")}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        sound.SilentMedia ? "bg-blue-500" : "bg-zinc-800"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                        sound.SilentMedia ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </li>

          <li className="pb-10">
            <Link to={"#"} className="flex items-center justify-between">
              <div>
                <div className="">Do not disturb</div>
                <div className="text-base text-neutral-400">
                  There'll be no reminders for incoming calls and Notifications
                </div>
              </div>
              <div className="text-gray-400 flex">
                <div className="text-base mr-2">Off</div>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
          <li className="pb-10 border-b-2 border-gray-600">
            <Link
              to={"/sound/additional_settings"}
              className="flex items-center justify-between"
            >
              <div>Additional settings</div>
              <div className="text-gray-400">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <div className="text-sm text-gray-400 mb-6">VIBRATE</div>
        <ul>
          <li className="mb-7">
            <div className="flex items-center justify-between">
              <div>Vibrate for calls</div>
              <div>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={sound.VibrateOnCall}
                      onChange={() => handleToggle("3")}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        sound.VibrateOnCall ? "bg-blue-500" : "bg-zinc-800"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                        sound.VibrateOnCall ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </li>
          <li className="pb-10 border-b-2 border-gray-600">
            <div className="flex items-center justify-between">
              <div>Vibrate in Silent mode</div>
              <div>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={sound.VibrateInSilentMode}
                      onChange={() => handleToggle("4")}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        sound.VibrateInSilentMode
                          ? "bg-blue-500"
                          : "bg-zinc-800"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                        sound.VibrateInSilentMode ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <div className="text-sm text-gray-400 mb-6">HAPTIC FEEDBACK</div>
        <ul>
          <li className="mb-7">
            <div className="flex items-center justify-between">
              <div>
                <div>Haptic feedback</div>
                <div className="text-base text-gray-400">
                  Receive tactile response to gesture and system controls
                </div>
              </div>
              <div>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={sound.Haptic}
                      onChange={() => handleToggle("5")}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        sound.Haptic ? "bg-blue-500" : "bg-zinc-800"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                        sound.Haptic ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </li>
          <li className="pb-10 border-b-2 border-gray-600">
            <div className="flex items-center">
              <div className="text-xl mr-4">
                <MdTouchApp className="fill-gray-500" />
              </div>
              <div>Haptic feedback level</div>
            </div>
            <div className="mx-auto w-100 px-2 mt-2">
            <div>
      <div className='px-2'>
          <input
          className='w-full'
            type="range"
            min={0}
            max={100}
            step={0.02}
            value={level.HapticFeedback}
            onChange={event => {
              handleSlider(event,"4")
            }}
          />
      </div>
      </div>
            </div>
          </li>
        </ul>
      </div>
      <Link
        to={"/sound/sound_effects"}
        className="flex items-center justify-between mt-8"
      >
        <div>Sound effects</div>
        <div className="text-gray-400">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </Link>
    </div>
  );
}
