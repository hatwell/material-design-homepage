import React from 'react'
import AboutSection from '../components/AboutSection'
import ProjectsContainer from './ProjectsContainer'
import ProjectData from '../services/projectData.js'



class MainContainer extends React.Component {

  constructor(props){
    super(props)
    const projects = new ProjectData()
    this.state = {
      projects: projects.projectInfo
    }

  }

  render() {
    console.log(this.state.projects);
    return (
      <div>
        <AboutSection />
      </div>
    )

  }

}

export default MainContainer;
