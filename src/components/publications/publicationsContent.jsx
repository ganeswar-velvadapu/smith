import React from 'react';

const PublicationsContent = ({
  id,
  publicationName,
  authors,
  correspondingAuthor,
  organisation,
  Vol,
  imgUrl,
  year,
}) => {
  return (
    <div className="flex flex-col p-4 md:flex-row items-center border mb-4 rounded-lg">
      <div className="image p-4 flex-shrink-0"> 
        <img
          src={imgUrl}
          alt=""
          className="shadow-md w-[200px] h-[200px] md:w-[500px] md:h-[400px]"
        />
      </div>
      <div className="content flex-grow"> 
        {publicationName && (
          <a href="#" className="text-2xl font-bold">
            {publicationName}
          </a>
        )}
        {authors && <p className="text-lg mb-4">{authors}</p>}
        {correspondingAuthor && (
          <p className="text-lg mb-4">Correspoding Author : {correspondingAuthor}</p>
        )}
        {organisation && <p className="text-lg mb-4">{organisation}</p>}
        {Vol && year && <p className="text-lg mb-4">{Vol} ({year})</p>}
      </div>
    </div>
  );
};

export default PublicationsContent;