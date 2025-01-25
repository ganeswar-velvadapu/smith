import React from 'react';

const ProjectContent = ({ title, role, fundingSource, value, duration, sanctionNo }) => {
  return (
    <div className="mb-4 border rounded-lg p-6"> 
      <h2 className="text-2xl font-semibold mb-2 text-blue-800">{title}</h2>
      <p className="text-gray-600 mb-1 text-lg">Role : {role}</p>
      <p className="text-gray-600 mb-1 text-lg">Funding Source: {fundingSource}</p>
      <p className="text-gray-600 mb-1 text-lg">Value: {value}</p>
      <p className="text-gray-600 mb-1 text-lg">Duration: {duration}</p>
      <p className="text-gray-600 text-lg">Sanction No: {sanctionNo}</p>
    </div>
  );
};

export default ProjectContent;