import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import PublicationsContent from '../../components/publications/publicationsContent'
import publicationsData from "../../data/publicationsData.json"
import navBottom from "../../../src/assets/navbarBottomImages/navbarBottomImage.jpg"


const Publications = () => {
  return (
    <div>
      <NavBottomSection title='Publications' imgUrl={navBottom}/>
      <div className='p-10'>
        {
          publicationsData.map((item) => {
            return (
              <PublicationsContent key={item.id} publicationName={item.publicationName} authors={item.authors} correspondingAuthor={item.correspondingAuthor} organisation={item.organisation} Vol={item.Vol} imgUrl={item.imgUrl}  year={item.year}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Publications