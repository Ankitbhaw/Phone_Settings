import React from "react";
import { IoHardwareChipOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function DetailedInfoAndSpecs() {
  return (
    <div>
      <div className="text-3xl mb-5">Detailed info and specs</div>
      <div className="border-2 border-zinc-900 rounded-xl py-4 px-3 mb-3">
        <div className="p-2">
          <div className="mb-1 text-gray-400 text-2xl">
            <IoHardwareChipOutline />
          </div>
          <div className="flex text-sm items-center text-gray-400">
            <div className="mr-1">RAM</div>
            <div>
              <AiOutlineInfoCircle />
            </div>
          </div>
          <div className="text-base ">6.0+2.0 GB</div>
        </div>
        <div className="p-2">
          <div className="mb-1 text-gray-400 text-2xl">
            <IoHardwareChipOutline />
          </div>
          <div className="flex text-sm items-center text-gray-400">CPU</div>
          <div className="text-base">6Snapdragon 695</div>
          <div className="text-base">Octa-core Max 2.2 GHz</div>
        </div>
      </div>
      <div className="border-2 px-4 mb-3 border-zinc-900  rounded-xl py-4">
        <div>Android Version</div>
        <div className="text-base text-gray-400">13 TKQ1.221114.001</div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="border-2 px-2 border-zinc-900 rounded-xl py-4 ">
          <div className="mb-6">Android security update</div>
          <div className="text-sm text-gray-400">2023-09-01</div>
        </div>
        <div className="border-2 px-2 border-zinc-900 rounded-xl py-4">
          <div className="mb-3">MIUI Version</div>
          <div className="text-sm text-gray-400">
            <div>MIUI Global</div>
            <div>14.0.4</div>
            <div>14.0.4(TKCINXM)</div>
          </div>
        </div>
      </div>
      <div className="border-2 px-5 mb-3 border-zinc-900  rounded-xl py-4">
        <div>Model</div>
        <div className="text-base text-gray-400 mb-4">2201116SI</div>
        <div>Baseband Version</div>
        <div className="text-base text-gray-400 mb-4">
          MPSS.HI.4.3.1.c4-00041-MANNAR_GEN_PACK-1_V050
        </div>
        <div>Kernel version</div>
        <div className="text-base text-gray-400 mb-2">
          5.4.210-qgki-g3784110eb25c
        </div>
      </div>
      <div className="border-2 px-4 mb-3 border-zinc-900  rounded-xl py-4">
        <div>Internal Storage</div>
        <div className="text-base text-gray-400">
          Available Storage 82.3 GB / Total Storage 128 GB
        </div>
      </div>
      <ul className="ml-3">
        <li>
          <Link
            to={"#"}
            className="py-2 mt-4 pb-10 border-gray-600 flex justify-between items-center"
          >
            {" "}
            <div>Important safety information</div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            className="py-2 pb-10 border-gray-600 flex justify-between items-center"
          >
            {" "}
            <div>Legal information</div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={"/about_phone/detailed_info_specs/status"}
            className="py-2 pb-10 border-gray-600 flex justify-between items-center"
          >
            {" "}
            <div>
              Status
              <div className="text-sm text-gray-400">
                Phone number , signal etc
              </div>
            </div>
            <div className="text-base text-neutral-900">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </li>
      </ul>
      
    </div>
  );
}
