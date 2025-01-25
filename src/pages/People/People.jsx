import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import Heading from '../../components/people/Heading'
import phdPeopleData from "../../data/phdPeopleDate.json"
import PhdPeopleContent from '../../components/people/phdPeopleContent'

const People = () => {
  return (
    <div>
      <NavBottomSection title='People' imgUrl='https://lh5.googleusercontent.com/fvq-yiFrGoR-E_B2YB8g2pMuSb1tOU4XfR4r8-rSFpCt-S48b-dx-mMmgKW8K2L7YytOGkEvQgLMf1TqneH5eUo=w16383' />
      <Heading title="PhD Scholars" />
      {
        phdPeopleData.map((item) => {
          return (
            <PhdPeopleContent imgUrl={item.imgUrl} name={item.name} phdTitle={item.phdTitle} email={item.email} other={item.other} mtechEd={item.mtechEd} btechEd={item.btechEd} key={item.email} />
          )
        })
      }
    </div>
  )
}

export default People