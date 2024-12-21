import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { LuPill } from "react-icons/lu";
import { SlGraduation } from "react-icons/sl"
import Group from "../assets/Group.png";

function DoctorCard() {
  return (
    <div className="mt-10">
      {/* main div */}
      <div className="flex justify-center gap-20 items-center">
        {/* card 1 */}
        <div className="w-[340px]   pb-8 pt-5 logo  rounded-xl shadow-md  text-center">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={Group}
          alt="Doctor"
          className="w-36 h-36 object-contain rounded-full mx-auto "
        />
       
      </div>

      {/* Doctor Information */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-gray-800">Dr. Prerna Narang</h2>
       <div className="mt-2 leading-7">
       <div className="flex items-center justify-center gap-2 -translate-x-[22px]">
        <LuPill className="text-base text-lime-900 "/>
       <p className=" text-gray-600">Male-Female Infertility</p>
       </div>
        <div className="flex items-center justify-center gap-2 -translate-x-7">
        <SlGraduation className="text-lg text-lime-900 "/>
         
        <p className=" text-gray-600 font-bold">7 years of Experience</p>
        </div>
       <div className="flex items-center justify-center gap-2 translate-x-2">
        <BiMessageDetail className="text-lg text-lime-900"/>
       <p className=" text-gray-600">
          Speaks: English, Hindi, Marathi
        </p>
       </div>
       </div>
      </div>

      {/* Consultation Options */}
      <div className="mt-4 flex justify-center gap-3  items-center">
        <div className="text-sm text-gray-600 border-neutral-500 border rounded-lg px-1 h-14  py-1">
          Video Consultation <br />
          <span className="text-lime-900 font-bold">₹800</span>
        </div>
        <div className="text-sm text-gray-600 border-neutral-500 border rounded-lg px-1 h-14 py-1">
          Chat Consultation <br />
          <span className="text-lime-900 font-bold">Free</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 space-y-2">
        <button className="px-24 py-2 bg-white text-lime-900 font-semibold rounded-md border  ">
          View Profile
        </button>
        <button className="px-[70px] py-3 bg-lime-900 text-white   rounded-md active:bg-lime-800">
          Book a consultation
        </button>
      </div>
    </div>

    {/* CARD 2 */}

    <div className="w-[340px]   pb-8 pt-5 logo  rounded-xl shadow-md  text-center">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={Group}
          alt="Doctor"
          className="w-36 h-36 object-contain rounded-full mx-auto "
        />
       
      </div>

      {/* Doctor Information */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-gray-800">Dr. Prerna Narang</h2>
       <div className="mt-2 leading-7">
       <div className="flex items-center justify-center gap-2 -translate-x-[22px]">
        <LuPill className="text-base text-lime-900 "/>
       <p className=" text-gray-600">Male-Female Infertility</p>
       </div>
        <div className="flex items-center justify-center gap-2 -translate-x-7">
        <SlGraduation className="text-lg text-lime-900 "/>
         
        <p className=" text-gray-600 font-bold">7 years of Experience</p>
        </div>
       <div className="flex items-center justify-center gap-2 translate-x-2">
        <BiMessageDetail className="text-lg text-lime-900"/>
       <p className=" text-gray-600">
          Speaks: English, Hindi, Marathi
        </p>
       </div>
       </div>
      </div>

      {/* Consultation Options */}
      <div className="mt-4 flex justify-center gap-3  items-center">
        <div className="text-sm text-gray-600 border-neutral-500 border rounded-lg px-1 h-14  py-1">
          Video Consultation <br />
          <span className="text-lime-900 font-bold">₹800</span>
        </div>
        <div className="text-sm text-gray-600 border-neutral-500 border rounded-lg px-1 h-14 py-1">
          Chat Consultation <br />
          <span className="text-lime-900 font-bold">Free</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 space-y-2">
        <button className="px-24 py-2 bg-white text-lime-900 font-semibold rounded-md border  ">
          View Profile
        </button>
        <button className="px-[70px] py-3 bg-lime-900 text-white   rounded-md active:bg-lime-800">
          Book a consultation
        </button>
      </div>
    </div>

    {/* CARD 3 */}

    <div className="w-[340px]   pb-8 pt-5 logo  rounded-xl shadow-md  text-center">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={Group}
          alt="Doctor"
          className="w-36 h-36 object-contain rounded-full mx-auto "
        />
       
      </div>

      {/* Doctor Information */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-gray-800">Dr. Prerna Narang</h2>
       <div className="mt-2 leading-7">
       <div className="flex items-center justify-center gap-2 -translate-x-[22px]">
        <LuPill className="text-base text-lime-900 "/>
       <p className=" text-gray-600">Male-Female Infertility</p>
       </div>
        <div className="flex items-center justify-center gap-2 -translate-x-7">
        <SlGraduation className="text-lg text-lime-900 "/>
         
        <p className=" text-gray-600 font-bold">7 years of Experience</p>
        </div>
       <div className="flex items-center justify-center gap-2 translate-x-2">
        <BiMessageDetail className="text-lg text-lime-900"/>
       <p className=" text-gray-600">
          Speaks: English, Hindi, Marathi
        </p>
       </div>
       </div>
      </div>

      {/* Consultation Options */}
      <div className="mt-4 flex justify-center gap-3  items-center">
        <div className="text-sm text-gray-600 border-neutral-500 border rounded-lg px-1 h-14  py-1">
          Video Consultation <br />
          <span className="text-lime-900 font-bold">₹800</span>
        </div>
        <div className="text-sm text-gray-600 border-neutral-500 border rounded-lg px-1 h-14 py-1">
          Chat Consultation <br />
          <span className="text-lime-900 font-bold">Free</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 space-y-2">
        <button className="px-24 py-2 bg-white text-lime-900 font-semibold rounded-md border  ">
          View Profile
        </button>
        <button className="px-[70px] py-3 bg-lime-900 text-white   rounded-md active:bg-lime-800">
          Book a consultation
        </button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default DoctorCard;
