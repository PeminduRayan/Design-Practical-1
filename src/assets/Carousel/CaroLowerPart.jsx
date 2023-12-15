import React from "react";
import RoomSelection from "../RoomSelection";
import { Datepicker } from "flowbite-react";

export default function CaroLowerPart() {
  return (
    <div className="bg-stone-200 h-16 w-full sm:w-11/12 md:w-4/5 inset-x-0 bottom-20 mb-3 items-center m-auto absolute">
      <div className="grid place-items-center items-center p-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 w-full">
        <div className="mb-3 sm:mb-0 sm:col-span-2 md:col-span-1">
          <Datepicker />
        </div>

        <div className="mb-3 sm:mb-0 sm:col-span-2 md:col-span-1">
          <Datepicker />
        </div>

        <div className="relative sm:ml-0 md:ml-12 items-center bg-white rounded-md border w-full sm:w-64 md:w-64">
          <button className="rounded-md pl-10 text-sm p-[9px] w-full inline-flex">
            1 Room, 1 Children, 2 Nights
          </button>
          <img
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            width="20"
            height="20"
            src="https://img.icons8.com/material-outlined/24/user--v1.png"
            alt="user--v1"
          />
        </div>

        <div className="relative sm:ml-0 md:ml-24 flex items-center w-full">
          <input
            placeholder="Special code"
            className="outline-none rounded-md pl-10 p-2 w-full"
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-glyphs/30/price-tag.png"
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            alt="price-tag"
          />
        </div>

        <div className="flex items-center">
          <button className="bg-orange-400 text-xl w-full sm:w-32 ml-0 sm:ml-12 text-white p-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
