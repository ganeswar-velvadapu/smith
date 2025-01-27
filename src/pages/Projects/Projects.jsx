import React from 'react'
import NavBottomSection from '../../components/navBottomSection'
import ProjectContent from '../../components/projects/projectContent'
import projectData from "../../data/projectData.json"
import navBottom from "../../../src/assets/navbarBottomImages/navbarBottomImage.jpg"


const Projects = () => {
  return (
    <div>
      <NavBottomSection title='Projects' imgUrl={navBottom}/>
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