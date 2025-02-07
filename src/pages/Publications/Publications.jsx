import React, { useState } from 'react';
import NavBottomSection from '../../components/navBottomSection';
import PublicationsContent from '../../components/publications/publicationsContent';
import publicationsData from '../../data/publicationsData.json';
import navBottom from '../../../src/assets/navbarBottomImages/navbarBottomImage.jpg';

const Publications = () => {
  const [year, setYear] = useState(''); 

  const filteredPublications = year
    ? publicationsData.filter((item) => item.year.toString() === year)
    : publicationsData;

  return (
    <div>
      <NavBottomSection title="Publications" imgUrl={navBottom} />
      <div className="p-4 flex justify-center">
        <input
          type="text"
          placeholder="Enter year (e.g. 2022)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-gray-400 rounded-md px-4 py-2 w-60 text-center"
        />
      </div>
      <div className="p-10">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((item) => (
            <PublicationsContent
              key={item.id}
              publicationName={item.publicationName}
              authors={item.authors}
              correspondingAuthor={item.correspondingAuthor}
              organisation={item.organisation}
              Vol={item.Vol}
              imgUrl={item.imgUrl}
              year={item.year}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No publications found for the selected year.</p>
        )}
      </div>
    </div>
  );
};

export default Publications;
