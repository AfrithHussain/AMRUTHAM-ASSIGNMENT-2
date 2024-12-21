import React, { useState } from "react";
import banner from "../assets/banner.png";

import DoctorCard from "./DoctorCard";

function ProfileBanner() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (category, value) => {
    if (value && !selectedOptions.some((option) => option.value === value)) {
      setSelectedOptions((prev) => [...prev, { category, value }]);
    }
  };

  const removeOption = (value) => {
    setSelectedOptions((prev) => prev.filter((option) => option.value !== value));
  };

  return (
    <div>
      <div>
        <img src={banner} className="w-full object-cover" alt="Banner" />

        <div>
          {/* main flex */}
          <div className="flex justify-evenly items-center bg-white mt-5">
            <div className="flex">
              <select
                className="bg-neutral-100 p-1 py-2 rounded-lg px-3 text-neutral-700 font-semibold cursor-pointer"
                onChange={(e) => handleSelectChange("Expertise", e.target.value)}
              >
                <option value="">Expertise</option>
                <option value="Hair care">Hair specialist</option>
                <option value="Skin care">Skin specialist</option>
                <option value="Health care">Health care</option>
              </select>
            </div>

            <div className="flex">
              <select
                className="bg-neutral-100 p-1 py-2 rounded-lg px-3 text-neutral-700 font-semibold cursor-pointer"
                onChange={(e) => handleSelectChange("Gender", e.target.value)}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex">
              <select
                className="bg-neutral-100 p-1 py-2 rounded-lg px-3 text-neutral-700 font-semibold cursor-pointer"
                onChange={(e) => handleSelectChange("Fees", e.target.value)}
              >
                <option value="">Fees</option>
                <option value="Rs.0-Rs.500">Rs.0-Rs.500</option>
                <option value="Rs.500-Rs.1000">Rs.500-Rs.1000</option>
                <option value="Rs.1000-Rs.1500">Rs.1000-Rs.1500</option>
              </select>
            </div>

            <div className="flex">
              <select
                className="bg-neutral-100 p-1 py-2 rounded-lg px-3 text-neutral-700 font-semibold cursor-pointer"
                onChange={(e) => handleSelectChange("Languages", e.target.value)}
              >
                <option value="">Languages</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Tamil">Tamil</option>
              </select>
            </div>

            <div className="flex">
              <select className="p-1 py-2 rounded-lg px-3 text-lime-900 bg-green-50 font-semibold cursor-pointer">
                <option value="">All filters</option>
                <option value="Expertise">Expertise</option>
                <option value="Gender">Gender</option>
                <option value="Fees">Fees</option>
                <option value="Languages">Languages</option>
              </select>
            </div>
          </div>

          <hr className="mt-3" />

          {/* Selected options */}
          <div className="flex justify-end mr-20 flex-wrap gap-3 mt-10 p-1  px-5">
            {selectedOptions.map((option, index) => (
              <div
                key={index}
                className="bg-green-50 text-neutral-900 p-2 rounded-full flex items-center gap-3 px-3"
              >
                <span>{option.value}</span>
                <button
                  className="text-neutral-600 font-bold cursor-pointer"
                  onClick={() => removeOption(option.value)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------CARD CONTENT--------------- */}

        <div className="">
          <DoctorCard/>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;
