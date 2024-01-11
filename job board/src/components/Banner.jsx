import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

function Banner({ query, handleInputChange }) {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-24  py-14 bg-[#D2DEF5] ">
      <h1 className="text-5xl font-bold text-primary mb-3 ">
        Every great journey starts with a single search. <br />
        <span
          className="text-blue
          "
        >
          Start yours here.
        </span>
        <p className="text-lg text-black/70 mb-8 mt-5 ">
          Our platform is meticulously designed to streamline your search,
          connecting you with opportunities that resonate with your professional
          journey. Your next big career leap is just a click away.
        </p>
        <form>
          <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-5">
            <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset  focus-within:ring-indigo-600 md:w-1/2 w-full ">
              <input
                type="text"
                placeholder="what position are you looking for ?"
                name="title"
                id="title"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm: text-sm sm:leading-6 "
                onChange={handleInputChange}
                value={query}
              />
              <FiSearch className="absolute mt-2.5 ml-2 text-gray-400 text-sm" />
            </div>

            <button
              type="submit"
              className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded text-sm "
            >
              Search
            </button>
          </div>
        </form>
      </h1>
    </div>
  );
}

export default Banner;
