import React, { useEffect, useState } from "react";
import Backup from "../../Assets/Backup.png";
import { CgSmartphone } from "react-icons/cg";
import axios from "axios";


export default function BackUp() {
    const [automaticRestore, SetAutomaticRestore] = useState(false);
    useEffect(() => {
      const fatchData = async () => {
        const response = await axios.get(
          "http://localhost:5000/settings/65364bf9e68a2abac819b78e"
        );
        SetAutomaticRestore(response.data.value);
      };
      fatchData();
    }, [automaticRestore]);

    const handleToggle = async () => {
      SetAutomaticRestore(!automaticRestore);
      const response = await axios.patch(
        "http://localhost:5000/settings/65364bf9e68a2abac819b78e",
        {
          value: !automaticRestore,
        }
      );
      console.log(response);
    };
  return (
    <div className="">
      <div className="text-3xl mb-8">Back up and restore</div>
      <div className="border-b-2 border-gray-500 mb-4">
        <img src={Backup} alt="Backup" className="h-32 mx-auto my-20 " />
      </div>
      <div className="border-b-2 border-gray-500 pb-5">
        <div className="text-sm text-gray-400 my-3">LOCAL </div>
        <ul className="text-base">
          <li className="py-5 px-3  border-gray-600 flex items-center bg-zinc-900 rounded-2xl mb-3">
            <div className="text-3xl mr-4 text-blue-600">
              <CgSmartphone />
            </div>
            <div className="text-md">
              Mobile device
              <div className="text-sm text-gray-400">
                Back up and restore items on this device
              </div>
            </div>
          </li>
          <li className="py-5 px-3 border-gray-600 flex items-center bg-zinc-900 rounded-2xl">
            <div className="text-2xl mr-4 text-blue-600">
              <i className="fa-solid fa-tv"></i>
            </div>
            <div>
              Computer
              <div className="text-sm text-gray-400">
                Back up and restore items using a computer
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-500 pb-5">
        <div className="text-sm text-gray-400 my-3">CLOUD </div>
        <ul className="text-xl">
          <li className="py-5 flex justify-between items-center  border-gray-600 ">
            <div>
              <div>Xiomi Cloud</div>
              <div className="text-sm text-gray-400">
                Sync the list of apps, back up system settings and Home screen
                layout
              </div>
            </div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-500 pb-5">
        <div className="text-sm text-gray-400 my-3">GOOGLE BACKUP </div>
        <ul className="text-xl">
          <li className="py-5 flex justify-between items-center  border-gray-600 ">
            <div>
              <div>Back up my data</div>
              <div className="text-sm text-gray-400">On</div>
            </div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className="py-5 flex justify-between items-center  border-gray-600 ">
            <div>
              <div>Backup account</div>
              <div className="text-sm text-gray-400">
                ankitbhawsar206@gmail.com
              </div>
            </div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className="py-5 flex justify-between items-center  border-gray-600 ">
            <div>
              <div>Automatic restore</div>
              <div className="text-sm text-gray-400">
                When reinstalling an app. restore backed-up setting and data
              </div>
            </div>
            <div className="text-5xl text-zinc-400">
              <div>
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={automaticRestore}
                      onChange={handleToggle}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        automaticRestore ? "bg-blue-500" : "bg-zinc-800"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                        automaticRestore ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="pb-5">
        <ul className="text-xl">
          <li className="py-5 flex justify-between items-center  border-gray-600 ">
            <div>Help and feedback </div>

            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className="py-5 flex justify-between items-center  border-gray-600 ">
            <div>Google Account </div>

            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
