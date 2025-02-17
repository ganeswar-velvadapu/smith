import React from 'react';

const ProjectContent = ({ title, cost, duration, pi, agency }) => {
  return (
    <div className="mb-4 border rounded-lg p-6"> 
      <h2 className="text-2xl font-semibold mb-2 text-blue-800">{title}</h2>
      <p className="text-gray-600 mb-1 text-lg">Cost : {cost} (In Lakhs)</p>
      <p className="text-gray-600 mb-1 text-lg">Duration : {duration}</p>
      <p className="text-gray-600 mb-1 text-lg">PI :  {pi}</p>
      <p className="text-gray-600 mb-1 text-lg">Agency : {agency}</p>
    </div>
  );
};

export default ProjectContent;