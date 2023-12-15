// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import arrow from "../img/arrow.png";

export default function Footer() {
  return (
    <><div className="bg-paper bg-cover w-full h-auto "></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-footer bg-cover bg-center p-8">

      <div>
        <span>
          <Link
            to="/coInfo"
            className="text-purple-500 text-2xl italic font-sans cursor-pointer font-semibold"
          >
            Corporate information
          </Link>
          <h1 className="cursor-pointer">Cinnamon Hotels & Resorts</h1>
          <h1 className="cursor-pointer className = 'cursor-pointer'">John Keells Group</h1>
        </span>
      </div>
      <div>
        <span>
          <Link
            to="/News"
            className="text-purple-500 text-2xl italic font-sans font-semibold"
          >
            News and Awards
          </Link>
          <h1 className='cursor-pointer'>News</h1>
          <h1 className='cursor-pointer'>Awards</h1>
        </span>
      </div>
      <div>
        <span>
          <Link
            to="/DP"
            className="text-purple-500 text-2xl italic font-sans font-semibold"
          >
            Data Privacy & Security Policy
          </Link>
          <h1 className='cursor-pointer'>Terms & Conditions</h1>
          <h1 className='cursor-pointer'>Privacy Statement</h1>
        </span>
      </div>
      <div>
        <span>
          <Link
            to="/Blogs"
            className="text-purple-500 text-2xl italic font-sans font-semibold"
          >
            Blogs
          </Link>
          <h1>Cinnamon Ublog</h1>
        </span>
      </div>
      <div>
        <span>
          <a
            href="/Co"
            className="text-purple-500 text-2xl italic font-sans font-semibold"
          >
            Corporate Governance
          </a>
          <h1>CSR</h1>
        </span>
      </div>
      <div>
        <span>
          <Link
            to="/News"
            className="text-purple-500 text-2xl italic font-sans font-semibold"
          >
            Get In Touch
          </Link>
          <h1 className='cursor-pointer'>info@cinnamonhotels.com</h1>
          <h1 className='cursor-pointer'>Hotel Contact Information</h1>
        </span>
      </div>
      <div>
        <span>
          <Link
            to="/asdads"
            className="text-purple-500 text-2xl italic font-sans font-semibold"
          >
            Careers
          </Link>
          <h1 className='cursor-pointer'>Careers</h1>
        </span>
      </div>
      <div>
        <span>
          <span className="text-purple-500 text-2xl italic font-sans font-semibold">
            Follow Us
            <span className=" flex gap-2  flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 16 16"
                className="hover:fill-stone-800 "
              >
                <path d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z"></path>
                <path
                  fill="#fff"
                  d="M9.082,10.12h2.071l0.326-2.104H9.082V6.868c0-0.875,0.286-1.65,1.104-1.65h1.312V3.383	c-0.23-0.03-0.719-0.099-1.641-0.099c-1.924,0-3.054,1.016-3.054,3.334v1.398H4.824v2.104h1.979v5.781C7.196,15.961,7.592,16,8,16	c0.368,0,0.729-0.033,1.082-0.082V10.12z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 16 16"
                className="hover:fill-stone-800 "
              >
                <path d="M16,2.105l-0.274-0.222c0,0-1.109,0.747-1.752,0.814c-0.619-0.657-1.503-1.064-2.483-1.064c-1.88,0-3.405,1.511-3.405,3.374	c0,0.263,0.031,0.52,0.088,0.769c-2.829-0.14-4.578-1.79-6.256-3.832L1.201,2.272c0,0-0.457,1.339-0.457,2.766	c0,3.841,3.03,6.143,4.179,6.693c-1.294,1.139-4.401,0.984-4.401,0.984L0,13.337C0,13.337,1.885,15,5.22,15	c6.262,0,9.689-4.615,9.689-9.604c0-0.146-0.005-0.292-0.013-0.434C15.653,4.105,16,3.214,16,2.105z"></path>
              </svg>
            </span>
          </span>
        </span>
      </div>
      <div className="mt-[80px]">
        <span>
          <h1 className="text-purple-500 text-2xl italic font-sans font-semibold">
            Get Cinnamon in your inbox
          </h1>
          <span className="flex flex-row p-4 items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 border border-gray-500 outline-none flex-grow" />
            <img
              src={arrow}
              alt=""
              className="w-14 h-14 -ml-2 cursor-pointer border bg-gray-500" />
          </span>
        </span>
        <span className="inline-flex  gap-2 ">
          <label className="text-white">
            <input
              className=" transition-all duration-500 ease-in-out  rounded-full w-5 h-5"
              type="checkbox" />
          </label>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            recusandae quidem ipsa eius fuga officia at magni itaque harum non?
          </h1>
        </span>
      </div>
    </div></>
  );
}
