import React, { useState } from 'react'

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

export default function HiltonPart2() {
  const [popupImage, setPopupImage] = useState(null);

  const handlePopupToggle = (imageUrl) => {
    setPopupImage(imageUrl === popupImage ? null : imageUrl);
  };
  const url1 = 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBuYXR1cmV8ZW58MHwwfDB8fHww';
  const url2 = 'https://images.pexels.com/photos/5824859/pexels-photo-5824859.jpeg?auto=compress&cs=tinysrgb&w=600';
  const url3 = 'https://images.pexels.com/photos/3803885/pexels-photo-3803885.jpeg?auto=compress&cs=tinysrgb&w=600';
  const url4 = 'https://images.pexels.com/photos/2666643/pexels-photo-2666643.jpeg?auto=compress&cs=tinysrgb&w=600';
  const url5 = 'https://images.pexels.com/photos/2666643/pexels-photo-2666643.jpeg?auto=compress&cs=tinysrgb&w=600';
  const url6 = 'https://images.pexels.com/photos/2666643/pexels-photo-2666643.jpeg?auto=compress&cs=tinysrgb&w=600';
 

  return (
    <div className='m-2 mb-6'>
        <h1 className="text-4xl font-bold font-sans mt-2 mb-4 text-blue-800">
        Wonderful stays await
      </h1>
      <h1 className="text-lg leading-7 ">
      Indulge in a cozy getaway with our exclusive offers.
      </h1>
      <div className='grid grid-cols-3 gap-4 mt-4 '>
      <div
          className="relative w-96 h-64 bg-url1 bg-cover overflow-hidden ml-4 rounded-md group cursor-pointer"
          onClick={() => handlePopupToggle(url1)}
        >
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            Plan your NYC Adventure
          </div>
          {popupImage === url2 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>  
        {/* 2 */}
        <div
          className="relative w-96 h-64 bg-url2 bg-cover overflow-hidden ml-4 rounded-md group cursor-pointer"
          onClick={() => handlePopupToggle(url2)}
        >
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            3 night under $250
          </div>
          {popupImage === url1 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
        {/* 3 */}
        <div
          className="relative w-96 h-64 bg-url3 bg-cover overflow-hidden ml-4 rounded-md group cursor-pointer"
          onClick={() => handlePopupToggle(url2)}
        >
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            Multiply your points
          </div>
          {popupImage === url2 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
        {/* 4 */}
        <div
          className="relative w-96 h-64 bg-url4 bg-cover overflow-hidden ml-4 rounded-md group cursor-pointer"
          onClick={() => handlePopupToggle(url4)}
        >
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
           get away & save more
          </div>
          {popupImage === url4 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
        {/* 5 */}
        <div
          className="relative w-96 h-64 bg-url5 bg-cover overflow-hidden ml-4 rounded-md group cursor-pointer"
          onClick={() => handlePopupToggle(url4)}
        >
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            earn upto 130K points
          </div>
          {popupImage === url4 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
        {/* 6 */}
        <div
          className="relative w-96 h-64 bg-url6 bg-cover overflow-hidden ml-4 rounded-md group cursor-pointer"
          onClick={() => handlePopupToggle(url6)}
        >
          <div className="absolute inset-x-0 bottom-0 p-4 text-white text-2xl font-bold uppercase text-center transition-transform group-hover:translate-y-[-120%] group-hover:opacity-100">
            A night on us
          </div>
          {popupImage === url6 && (
            <PopupWindow imageUrl={popupImage} onClose={() => handlePopupToggle(popupImage)} />
          )}
        </div>
        
      </div>
    </div>


  )
}
