import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import ProjectContent from '../../components/projects/projectContent'
import projectData from "../../data/projectData.json"

const Projects = () => {
  return (
    <div>
      <NavBottomSection title='Projects' imgUrl='https://lh5.googleusercontent.com/fvq-yiFrGoR-E_B2YB8g2pMuSb1tOU4XfR4r8-rSFpCt-S48b-dx-mMmgKW8K2L7YytOGkEvQgLMf1TqneH5eUo=w16383'/>
    <div className='p-10'>
      {
        projectData.map((item) =>{
          return (
            <ProjectContent title={item.title} role={item.role} fundingSource={item.fundingSource} value={item.value} duration={item.duration} sanctionNo={item.sanctionNo} key={item.id}/> 
          )
        })
      }
    </div>
    </div>
  )
}

export default Projects