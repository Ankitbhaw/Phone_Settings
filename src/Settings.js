import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Connections from "./Assets/Connections.png";
import { BiSolidSun } from "react-icons/bi";

import axios from "axios";

export default function Settings() {
  const [aeroplaneMode, setAeroplaneMode] = useState(false);
  useEffect(() => {
    const fatchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/settings/653648f7e68a2abac819b78d"
      );
      setAeroplaneMode(response.data.value);
    };
    fatchData();
  }, [aeroplaneMode]);

  const handleToggle = async () => {
    setAeroplaneMode(!aeroplaneMode);
    const response = await axios.patch(
      "http://localhost:5000/settings/653648f7e68a2abac819b78d",
      {
        value: !aeroplaneMode,
      }
    );
    console.log(response);
  };

  return (
    <Container className="h-screen">
      <div className="text-4xl mb-5 mt-6 ">Settings</div>
      <div className="flex bg-zinc-700 rounded-3xl">
        <i className="fa-solid fa-magnifying-glass p-3"></i>
        <input
          type="text"
          className="bg-zinc-700 w-full  py-1.5 px-3 text-white rounded-r-3xl focus:outline-none"
          placeholder="Search Setting"
        />
      </div>
      <ul className="flex flex-col justify-center h-56 mt-14 ">
        <li>
          <Link to={"/About_phone"} className="Link">
            <div className="flex items-center">
              <div className="px-2 rounded-md mr-4 bg-blue-600">
                <i className="fa-solid fa-mobile"></i>
              </div>
              About Phone
            </div>
            <div>
              <span className="text-base text-gray-400 mr-2">
                MIUI Global 14.0.4
              </span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
        </li>

        <li>
          <Link to={"/display"} className="Link">
            <div className="flex items-center">
              <div className="px-1 py-1 rounded-md mr-4 bg-yellow-600">
                <BiSolidSun className="text-2xl" />
              </div>
              Display
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>

        <li>
          <Link to={"/sound"} className="Link">
            <div className="flex items-center">
              <div className="w-7 px-1 mr-4 bg-green-500 rounded">
                <i className="fa-solid fa-volume-off"></i>
              </div>
              Sound & Vibration
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>

        <li>
          <Link to={"/connections"} className="Link">
            <div className="flex items-center">
              <img src={Connections} alt="connections" className="w-10 mr-2" />
              Connections & Sharing
            </div>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </li>
        <li className="flex justify-between mb-6 items-center">
          <div className="flex items-center">
            <div className="w-8 px-1.5 mr-4 bg-purple-700 rounded">
              <i className="fa-solid fa-plane-up"></i>
            </div>
            <div>Aeroplane mode</div>
          </div>
          <div>
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={aeroplaneMode}
                  onChange={handleToggle}
                  className="sr-only"
                />
                <div
                  className={`box block h-8 w-14 rounded-full ${
                    aeroplaneMode ? "bg-blue-500" : "bg-zinc-800"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${
                    aeroplaneMode ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </li>
      </ul>
    </Container>
  );
}
const Container = styled.div`
  .Link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul li {
    padding: 0.5rem;
    border-radius: 5px;
  }
  ul li:hover {
    background-color: #151515;
  }
`;
