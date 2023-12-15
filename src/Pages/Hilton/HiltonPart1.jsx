import React, { useState } from "react";

const PopupWindow = ({ onClose, imageUrl }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border border-slate-700 rounded-lg">
      <div className="bg-white p-8 rounded-md">
        <p className="text-xl mb-2 font-bold">Popup Content</p>
        <img src={imageUrl} className="w-full rounded-lg h-full" alt="" />
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae assumenda nulla debitis eaque. Ipsum non vero eligendi. Saepe, omnis quo.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default function HiltonPart1() {
  const [popupImage, setPopupImage] = useState(null);

  const handlePopupToggle = (imageUrl) => {
    setPopupImage(imageUrl === popupImage ? null : imageUrl);
  };
  const url1 = 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600';
  const url2 = 'https://images.pexels.com/photos/5824859/pexels-photo-5824859.jpeg?auto=compress&cs=tinysrgb&w=600';
  const url3 = 'https://images.pexels.com/photos/3803885/pexels-photo-3803885.jpeg?auto=compress&cs=tinysrgb&w=600';
  const url4 = 'https://images.pexels.com/photos/2666643/pexels-photo-2666643.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <div className="mb-8 m-2">
      <h1 className="text-4xl font-bold font-sans mt-2 mb-4 text-blue-800">
        Experience magical holiday stays
      </h1>
      <h1 className="text-lg leading-7 ">
        Embrace the spirit of the season. Discover our recommendations for winter wonderland getaways or craft your own enchanting escape. Embrace the joy of staying and create unforgettable holiday memories.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 mt-8 ">
        {/* 1 */}
        <div
          className="relative w-72 h-96 bg-nyc bg-cover overflow-hidden ml-4 rounded-md group cursor-pointer"
          onClick={() => handlePopupToggle(url1)}
        >
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            Plan your NYC Adventure
          </div>
          {popupImage === url1 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
        {/* 2 */}
        <div
          className="relative w-72 h-96 bg-nyc1 bg-cover overflow-hidden rounded-md group cursor-pointer"
          onClick={() => handlePopupToggle(url2)}
        >
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            Create magic in Portland
          </div>
          {popupImage === url2 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
        {/* 3 */}
        <div className="relative w-72 h-96 bg-nyc2 bg-cover overflow-hidden rounded-md group cursor-pointer">
          <div onClick={() => handlePopupToggle(url3)}
           className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            Embrace Chicago's Charm
          </div>
          {popupImage === url3 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
        {/* 4 */}
        <div className="relative w-72 h-96 bg-nyc3 bg-cover overflow-hidden rounded-md group cursor-pointer">
          <div onClick={() => handlePopupToggle(url4)}
           className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            Discover your own stay
          </div>
          {popupImage === url4 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
      </div>
    </div>
  );
}
