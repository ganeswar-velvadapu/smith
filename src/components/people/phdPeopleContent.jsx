import React from 'react';

const PhdPeopleContent = ({ imgUrl, name, phdTitle, email, other, btechEd, mtechEd }) => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-20 m-4"> 
      <div className=""> 
        <img src={imgUrl} alt="personImage" className="w-100 h-100 object-cover" /> 
      </div>
      <div className="mt-4 md:mt-0">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <h2 className="text-2xl font-semibold mb-1">{phdTitle}</h2>
        <p className="text-xl text-gray-600 mb-1">{email}</p>
        {other && <p className="text-xl text-gray-600 mb-1">{other}</p>}
        <p className="text-xl text-gray-500 mb-1">M.Tech : {mtechEd}</p>
        <p className="text-xl text-gray-500">B.Tech : {btechEd}</p>
      </div>
    </div>
  );
};

export default PhdPeopleContent;