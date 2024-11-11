import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className='absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-black p-4'>
      
      {/* Netflix Logo */}
      <img 
        className='w-28 sm:w-32 md:w-40 lg:w-56' 
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
        alt='netflix-logo' 
      />
      
      {/* Profile and Action Buttons */}
      <div className='flex items-center space-x-2 sm:space-x-4'>
        {/* Dropdown Icon */}
        <IoIosArrowDropdown className='text-white text-lg sm:text-2xl' />

        {/* Username */}
        <h1 className='text-sm sm:text-lg md:text-xl text-white m-1'>Saurav Mishra</h1>
        
        {/* Buttons - Flexing horizontally on larger screens, stacking on smaller ones */}
        <div className='ml-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
          <button className='bg-red-600 text-white px-4 py-2 rounded-md text-sm sm:text-base'>Logout</button>
          <button className='bg-red-600 text-white px-4 py-2 rounded-md text-sm sm:text-base'>Search Movie</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
