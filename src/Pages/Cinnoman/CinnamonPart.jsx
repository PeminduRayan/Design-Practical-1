import React from "react";
import Dropdown from "./Dropdown";
import sl from '../../img/sl.png'
export default function CinnamonPart() {
  return (
    <div className=" flex-col flex items-center mt-10 mb-16 ">
     <h1 className="text-4xl text-purple-800 italic font-serif mb-6">Our Destinations</h1>
      <Dropdown />
      <div  className="sm:w-2/4 w-1/3 h-[10rem] sm:h-[30rem] bg-cinnamon1 mt-6 relative  items-center  ">
      <div className="absolute sm:h-96 sm:w-96 w-24 h-24 -left-24 top-16 ">
        <img src={sl} alt="" />
      </div>
      <div class="absolute sm:h-14 sm:w-14 w-6 h-6  left-[29rem]   top-2">
        <div className="w-80  h-[26rem] bg-zinc-50 flex flex-col  shadow-lg border m-3 p-6  ">
          <h1 className="  text-3xl flex text-center  text-purple-800 italic m font-serif">Cinnamon Velifushi Maldives </h1>
          <span className="mt-12 text-left">Cinnamon Velifushi Maldives, a one-resort island for sun, activity, relaxation and luxury surrounded by exotic marine life and a swimmable lagoon.</span>
          <a href="/discover"  className='bg-purple-700 w-fit  p-2 mt-12 text-white font-serif font-semibold italic '>Discover More</a>
        </div>
      </div>

      </div>
    </div>
  );
}
