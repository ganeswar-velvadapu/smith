import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import computationalFacilities from "../../data/facilitiesData.json"
import FacilitiesContent from '../../components/facilities/facilitiesContent'

const Facilities = () => {
  return (
    <div className=''>
      <NavBottomSection title='Facilities' imgUrl='https://lh5.googleusercontent.com/fvq-yiFrGoR-E_B2YB8g2pMuSb1tOU4XfR4r8-rSFpCt-S48b-dx-mMmgKW8K2L7YytOGkEvQgLMf1TqneH5eUo=w16383' />
      <div className='p-10'>
        <h1 className='text-3xl mb-8 font-bold md:text-5xl'>Computational Facilities : </h1>
        {
          computationalFacilities.map((item) => {
            return (
              <FacilitiesContent key={item.id} facilityName={item.facilityName} imgUrl={item.imgUrl} details={item.details} dataBases={item.dataBases} sdk={item.sdk} other={item.other} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Facilities