import React from "react";

export default function Offers() {
  return (
    <>
      <h1 className="text-2xl  font-serif mt-4 mb-4 text-stone-700 text-center  ">
        Offers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 items-centr justify-center m-3">
        {/* 1 */}
        <div className="sm:w-80 mb-4 w-64 flex  flex-col m-auto h-[450px] border border-ring-2 hover:shadow-2xl shadow-xl ">
          <img
            className="w-full h-48 bg-cover"
            src="https://images.pexels.com/photos/5225084/pexels-photo-5225084.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />

          <div className="  text-center">
            <h1 className="text-sm font-semibold  ">Rooms & Suites </h1>
            <h1 className="text-md font-semibold mt-2 ">Shangri–La Circle Exclusive Member Rate with Breakfast </h1>
            <h1 className="text-sm  mt-3 ">Exclusive Member Rate with Breakfast for Shangri-La Circle member. </h1>
            <h1 className="text-sm   mt-8 gap-1 ">From <h1 className=" inline-flex mb-4 font-bold">SGD 239.92</h1> Average Per Night </h1>
            <a href="/view" className="bg-transparent border font-bold border-orange-800 p-2 mt-6 text-orange-800">View Details</a>
          </div>
        </div>
        {/* 2 */}
        <div className="sm:w-80 w-64 mb-4 flex-col h-[450px]  border border-ring-2 hover:shadow-2xl shadow-xl  flex m-auto ">
          <img
            className="w-full h-48 bg-cover"
            src="https://images.pexels.com/photos/6140456/pexels-photo-6140456.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            
          />
          <div className="  text-center">
            <h1 className="text-sm font-semibold  ">Rooms & Suites </h1>
            <h1 className="text-md font-semibold mt-2 ">Shangri–La Circle Exclusive Member Rate</h1>
            <h1 className="text-sm  mt-3 ">Exclusive Member Rate with Breakfast for Shangri-La Circle member. </h1>
            <h1 className="text-sm   mt-8 gap-1 ">From <h1 className=" inline-flex mb-4 font-bold">SGD 239.92</h1> Average Per Night </h1>
            <a href="/view" className="bg-transparent border font-bold border-orange-800 p-2 mt-6 text-orange-800">View Details</a>
          </div>
        </div>
        {/* 3 */}
        <div className="sm:w-80 w-64 flex-col mb-4 h-[450px]  border border-ring-2 hover:shadow-2xl shadow-xl  flex m-auto ">
          <img
            className="w-full h-48 bg-cover "
            src="https://images.pexels.com/photos/6314965/pexels-photo-6314965.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="  text-center">
            <h1 className="text-sm font-semibold  ">Rooms & Suites </h1>
            <h1 className="text-md font-semibold mt-2 ">Shangri–La Circle Exclusive Member Rate with Breakfast </h1>
            <h1 className="text-sm  mt-3 ">Exclusive Member Rate with Breakfast for Shangri-La Circle member. </h1>
            <h1 className="text-sm   mt-8 gap-1 ">From <h1 className=" inline-flex mb-4 font-bold">SGD 239.92</h1> Average Per Night </h1>
            <a href="/view" className="bg-transparent border font-bold border-orange-800 p-2 mt-6 text-orange-800">View Details</a>
          </div>
        </div>
      </div>
    </>
  );
}
