import React from 'react';
import Logo from '../Images/logo.jpeg'; // Ensure this path is correct

function load() {
  return (
    <div className="flex items-center justify-center h-screen bg-black p-4">
      <img src={Logo} alt="Logo" className="rounded-full  h-[10rem] w-[10rem]" />
    </div>
  );
}

export default load;
