import React from 'react';

const NavBottomSection = ({ title, imgUrl }) => {
  return (
    <div>
      <div
        className='relative flex justify-center items-center'
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: "300px" }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <h1 className="text-white text-6xl font-bold z-20">{title}</h1> 
      </div>
    </div>

  );
};

export default NavBottomSection;
