import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import NewsContent from '../../components/news/newsContent'
import news from "../../data/newsData.json"

const News = () => {
  return (
    <div>
      <NavBottomSection title='News' imgUrl='https://lh5.googleusercontent.com/fvq-yiFrGoR-E_B2YB8g2pMuSb1tOU4XfR4r8-rSFpCt-S48b-dx-mMmgKW8K2L7YytOGkEvQgLMf1TqneH5eUo=w16383'/>
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