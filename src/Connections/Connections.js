import React from "react";
import { Link } from "react-router-dom";


export default function Connections() {
  return (
    <div>
      <div className="mb-8 text-3xl">Connection & sharing</div>
      <div>
        <div className="text-sm mb-6 text-gray-400">INTERCONNECTIVITY</div>
        <ul>
          <li className="flex justify-between mb-6  items-center">
            <div>Mi Share</div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li>
            <Link
              to={"/connections/cast"}
              className="flex mb-6 justify-between items-center"
            >
              <div>Cast</div>
              <div className="text-base text-gray-500">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to={"/connections/printing"}
              className="flex justify-between border-b-2 pb-10 border-gray-600 items-center"
            >
              <div>Printing</div>
              <div className="text-base text-gray-500">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
        </ul>
        <div className="text-sm my-6 text-gray-400">MANAGE CONNECTIONS</div>
        <ul>
         
          <li>
            <Link
              to={"/connections/vpn"}
              className="flex mb-6 justify-between items-center"
            >
              <div>VPN</div>
              <div className="text-base text-gray-500">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </Link>
          </li>
          <li className="flex justify-between border-b-2 pb-10 border-gray-600 items-center">
            <div>
              <div>Private DNS</div>
              <div className="text-sm text-gray-400">dns.adguard.com</div>
            </div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
        <div>
          <Link
            to={"/connections/wireless_display"}
            className="flex justify-between items-center mt-8 pb-10 border-b-2 border-gray-600 "
          >
            <div>
              <div>Wireless display</div>
              <div className="text-sm text-gray-400">
                Connect to a display wireless
              </div>
            </div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </div>
        <div className="text-sm my-6 text-gray-400">OTHER</div>
        <ul>
          <li className="flex justify-between mb-6  items-center">
            <div>Data usage</div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li>
            <Link to={'/connections/reset'} className="flex mb-6 justify-between items-center">

            <div>Reset Wi-Fi, mobile networks, and Bluetooth </div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
            </Link>
          </li>
          <li className="flex justify-between mb-8 items-center">
            <div>
              <div>Chromebook</div>
              <div className="text-sm text-gray-400">
                Your phone is not linked to a chromebook
              </div>
            </div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className="flex justify-between mb-8 items-center">
            <div>
              <div>Nearby Share</div>
              <div className="text-sm text-gray-400">
                Share files with nearby devices
              </div>
            </div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
          <li className="flex justify-between mb-8 items-center">
            <div>
              <div>Android Auto</div>
              <div className="text-sm text-gray-400">
                Use apps on your car screen
              </div>
            </div>
            <div className="text-base text-gray-500">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
