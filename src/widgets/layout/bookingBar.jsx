import React from "react";

function BookingBar() {
  return (
    <div className="  p-4" >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Where to?"
          className="border border-gray-300 rounded-md px-4 py-4 mb-4 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500 placeholder-gray-500"
          style={{ width: "100%" }}
        />
        <input
          type="date"
          placeholder="Check-in"
          className="border border-gray-300 rounded-md px-4 py-4 mb-4 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500 placeholder-gray-500"
          style={{ width: "100%" }}
        />
        <input
          type="date"
          placeholder="Check-out"
          className="border border-gray-300 rounded-md px-4 py-4 mb-4 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500 placeholder-gray-500"
          style={{ width: "100%" }}
        />
        <input
          type="number"
          placeholder="Travelers"
          className="border border-gray-300 rounded-md px-4 py-4 mb-4 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500 placeholder-gray-500"
          style={{ width: "100%" }}
        />
        <button className="bg-orange-300 text-white px-6 py-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Search
        </button>
      </div>
    </div>
  );
}

export default BookingBar;
