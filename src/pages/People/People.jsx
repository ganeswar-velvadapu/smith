import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import Heading from '../../components/people/Heading'
import phdPeopleData from "../../data/phdPeopleDate.json"
import PhdPeopleContent from '../../components/people/phdPeopleContent'
import navBottom from "../../../src/assets/navbarBottomImages/navbarBottomImage.jpg"

const People = () => {
  return (
    <div>
      <NavBottomSection title='People' imgUrl={navBottom} />
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