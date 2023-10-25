import React from "react";
import {BiSolidPrinter} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

export default function Printing() {
  return (
    <div className="h-screen">
      <div className="text-3xl mb-6">Printing</div>
      <div className="pb-10 border-b-2 border-gray-600">
        <div className="text-base mb-6 text-gray-400 ">PRINT SERVICE</div>
        <div>
          <ul>
            <li className=" mb-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="text-2xl mx-5"><BiSolidPrinter className="fill-green-500"/></div>
                <div>System printing service</div>
              </div>
              <div className="flex">
                <div className="text-base text-gray-400 mr-3">on</div>
                <div className="text-base text-gray-500">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="ml-3 mr-4"><AiOutlinePlus className="fill-gray-400"/></div>
                <div>Add service</div>
              </div>

              <div className="text-base text-gray-500">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-base text-gray-400 my-6">
          OTHER
        </div>
        <div className="flex justify-between items-center">
          <div>
            About printing
          </div>
          <div className="text-base text-gray-500">
                <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        
      </div>
    </div>
  );
}
