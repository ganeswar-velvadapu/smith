import React from 'react';

const NewsContent = ({ date, content }) => {
  return (
    <div className="mb-5 w-full mx-auto border rounded-lg p-6"> 
      <span className="text-blue-400 mb-1.5 text-2xl">{date} : </span>
      <span><p className='text-xl'>{content}</p></span>
    </div>
  );
};

export default NewsContent;