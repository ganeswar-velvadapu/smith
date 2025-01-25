import React from 'react';

const FacilitiesContent = ({ facilityName, imgUrl, details, dataBases, sdk, other }) => {
    return (
        <div className="flex flex-col p-4 md:flex-row items-center justify-around border mb-4 rounded-lg">
            <div className="image p-4">
                <img src={imgUrl} alt="" className="shadow-md w-[200px] h-[200px] md:w-[500px] md:h-[400px]" />
            </div>
            <div className="content">
                {
                    facilityName &&
                    <h1 className="text-2xl font-bold mb-2">{facilityName}</h1>
                }
                {
                    details &&
                    <p className="text-lg mb-4">{details}</p>
                }
                {
                    dataBases &&
                    <h2 className="text-xl font-semibold mb-2">Data Bases: {dataBases}</h2>
                }
                {
                    sdk &&
                    <>
                        <h2 className="text-xl font-semibold mb-2">SDK:</h2>
                        <p className="text-lg mb-4">{sdk}</p>
                    </>
                }

                {
                    other && 
                    <>
                        <h2 className="text-xl font-semibold mb-2">Other:</h2>
                        <p className="text-lg">{other}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default FacilitiesContent;