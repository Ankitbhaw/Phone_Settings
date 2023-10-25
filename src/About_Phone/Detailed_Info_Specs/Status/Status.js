import React from "react";
import { Link } from "react-router-dom";

export default function Status() {
  return (
    <div>
      <div className="text-3xl">Status</div>
      <div className="border-b-2 border-gray-500 pb-5">
        <ul className="text-xl">
          <li className="py-5  border-gray-600 flex justify-between items-center">
            <div>Battery Status</div>
            <div className="text-base text-gray-400">Not Charging</div>
          </li>
          <li className="py-5 border-gray-600 flex justify-between items-center">
            <div>Battery level</div>
            <div className="text-base text-gray-400">45%</div>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-500 pb-5">
        <div className="text-sm text-gray-400 mt-3">BASIC INFO</div>
        <ul className="text-xl">
          <li className="py-5  border-gray-600  ">
            <div>Phone number (sim slot 1)</div>
            <div className="text-base text-gray-400">65498465310</div>
          </li>
          <li className="py-5 border-gray-600">
            <div>Phone number (sim slot 2)</div>
            <div className="text-base text-gray-400">9898416516</div>
          </li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-500 pb-5">
        <div className="text-sm text-gray-400 my-4">DEVICE DETAILS</div>
        <ul className="text-xl">
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>
              SIM status (sim slot 1)
              <div className="text-sm text-gray-400">JIO</div>
            </div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>
              SIM status (sim slot 2)
              <div className="text-sm text-gray-400">Airtel</div>
            </div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li >
            <Link to={"/about_phone/detailed_info_specs/status/model"} className="py-2  pb-6 flex justify-between items-center">
            <div>
              Model
              <div className="text-sm text-gray-400">Redmi Note 11 Pro+ 5G</div>
            </div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
            </Link>
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>
              IMEI (sim slot 1)
              <div className="text-sm text-gray-400">6496846851654984854</div>
            </div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>
              IMEI (sim slot 2)
              <div className="text-sm text-gray-400">465465813206546814</div>
            </div>
            <div className="text-base text-gray-400">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="text-sm text-gray-400 my-4">DEVICE IDENTIFIERS</div>
        <ul className="text-xl">
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>
              IP address
              <div className="text-sm text-gray-400">
                fe80::38c7:12ff:fef8:78ae <br />
                192.168.1.5 <br />
                2401:4900:1c19:9767:38c7:12ff:fef8:78ae
                <br />
                2401:4900:1c19:9767:93f:bf7a:7c46:935a
                <br />{" "}
              </div>
            </div>
           
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>
              Device Wi-Fi MAC address
              <div className="text-sm text-gray-400">fe80::38c7:12ff:fef8:78</div>
            </div>
            
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>
              Bluetooth address
              <div className="text-sm text-gray-400">80::38c7:12ff:fef8:78</div>
            </div>
           
          </li>
          <li className="py-2  pb-6 flex justify-between items-center">
            <div>
              Uptime
              <div className="text-sm text-gray-400">34:41:14</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
