import React from 'react';

const SmallNavbar = () => {
  return (
    <nav className=" ">
      <div className=" mx-auto px-4">
        <div className="flex justify-center  rounded-xl">
          <div className="flex space-x-28 bg-blue-50 rounded-3xl">
            <a href="#" className="text-black  py-4 px-2">
              Refer
            </a>
            <a href="#" className="text-black py-4 px-2">
              Benefits
            </a>
            <a href="#" className="text-black py-4 px-2">
              FAQs
            </a>
            <a href="#" className="text-black py-4 px-2">
              Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;