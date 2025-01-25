import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import PublicationsContent from '../../components/publications/publicationsContent'
import publicationsData from "../../data/publicationsData.json"


const Publications = () => {
  return (
    <div>
      <NavBottomSection title='Publications' imgUrl='https://lh5.googleusercontent.com/fvq-yiFrGoR-E_B2YB8g2pMuSb1tOU4XfR4r8-rSFpCt-S48b-dx-mMmgKW8K2L7YytOGkEvQgLMf1TqneH5eUo=w16383'/>
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