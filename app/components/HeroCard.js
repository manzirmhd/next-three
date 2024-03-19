'use client'
import React from "react";

const HeroCard = ({ title, description, imageUrl, buttonText }) => {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-44 w-full object-cover md:w-44"
              src={imageUrl}
              alt="Card image"
            />
          </div>
          <div className="p-6">
            <div className=" tracking-wide text-sm text-black font-semibold">
              {title}
            </div>
            <p className="mt-2 text-gray-500 text-sm">{description}</p>
            <div className="mt-2">
            <button className="btn bg-white border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-1">{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroCard;