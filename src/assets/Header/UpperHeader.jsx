import React from "react";
import { Link } from "react-router-dom";
import icon from "../../img/icon.png";
import up from "../../img/up.png";
import down from "../../img/down.png";
import phone from "../../img/phone.png";

export default function UpperHeader() {
  return (
    <div className="items-center justify-between">
      <div className="flex flex-row w-full">
        <span className="font-bold inline-flex pl-4">
          <img
            src="https://i.pinimg.com/736x/70/1d/01/701d0101288e479d24047baecfad5dc4.jpg"
            className="w-[50px] h-[50px] hover:bg-yellow-950"
            alt="Shangri-la logo"
          />
          <Link
            to="/"
            className="text-sm m-auto uppercase sm:text-2xl font-serif"
          >
            Shangri-la
          </Link>
        </span>

        <ul className="flex flex-row items-center place-items-end w-1/4 sm:w-4/5 divide-x-[2px] divide-slate-800 space-x-2 justify-end text-end">
          <a
            href="/Signin"
            className=" sm:flex w-32 sm:w-auto sm:place-items-right  "
          >
            Sign in
          </a>
          <a href="/join" className="invisible md:visible">
            Join in
          </a>
          <a href="/reservations" className="invisible md:visible">
            Find a reservations
          </a>
          <a href="/lang" className="invisible md:visible">
            English
          </a>
          <a href="/qr" className="invisible md:visible">
            <img
              src={phone}
              alt=""
              className="w-[30px] h-[30px] place-items-center "
            />
          </a>
        </ul>
      </div>
    </div>
  );
}
