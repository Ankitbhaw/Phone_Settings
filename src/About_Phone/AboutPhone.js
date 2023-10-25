import React from "react";
import MIUI from "../Assets/MIUI.jpeg";
import { Link } from "react-router-dom";

export default function AboutPhone() {
  return (
    <div className=" text-white">
      <h1 className="text-3xl mb-6 ">About phone</h1>
      <div className="grid grid-cols-2">
        <div className="mr-2 cursor-pointer">
          <img src={MIUI} alt="miui" className="rounded-3xl" />
        </div>
        <div className="mb-8">
          <div className="bg-zinc-800 my-2 mb-4 rounded-xl cursor-pointer">
            <div className="px-5 pt-3">Device name</div>
            <div className="text-sm pl-5 pt-1 pb-5 text-gray-400">
              Redmi Note 11 Pro+ 5G
            </div>
          </div>
          <div className="bg-zinc-800 rounded-xl cursor-pointer">
            <div className="ml-5 pt-4 mb-9">Storage</div>
            <div className="text-sm ml-5 mb-1">Occupied</div>
            <div className="flex ml-5 pb-6 items-baseline">
              <div>45.7GB </div>
              <div className="text-sm">/128 GB</div>
            </div>
          </div>
        </div>
      </div>

      <ul className="list-none">
        <li className="py-5 flex justify-between items-center">
          <div>MIUI version</div>
          <div className="text-base text-gray-400">
            <div className="pb-2">MIUI Global 14.0.4</div>
            <div>14.0.4.0(TKCINXM)</div>
          </div>
        </li>
        <li className="py-5 flex justify-between items-center">
          <div>Android version</div>
          <div className="text-base text-gray-400">13 TKQ1.221114.001</div>
        </li>
        <li className="py-5   flex justify-between items-center">
          <div>Android security update</div>
          <div className="text-base text-gray-400">2023-09-01</div>
        </li>
        <li>
          <Link
            to="/about_phone/detailed_info_specs"
            className="py-2 border-b-2 pb-10 border-gray-600 flex justify-between items-center"
          >
            <div>Detailed info and specs</div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={"/about_phone/backup_restore"}
            className="py-2 mt-4 pb-10  flex justify-between items-center"
          >
            {" "}
            <div>Back up and restore</div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={"/about_phone/factory_reset"}
            className="py-2 border-b-2 pb-10 border-gray-600 flex justify-between items-center"
          >
            {" "}
            <div>Factory reset</div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            className="py-2 pb-10 mt-4 flex justify-between items-center"
          >
            {" "}
            <div>Certification</div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
