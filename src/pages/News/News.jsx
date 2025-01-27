import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import NewsContent from '../../components/news/newsContent'
import news from "../../data/newsData.json"
import navBottom from "../../../src/assets/navbarBottomImages/navbarBottomImage.jpg"


const News = () => {

  return (
    <div>
      <NavBottomSection title='News' imgUrl={navBottom}/>
      <div className='p-10'>
      {
        news.map((item) =>{
          return (
            <NewsContent date={item.date} content={item.content} key={item.id}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default News