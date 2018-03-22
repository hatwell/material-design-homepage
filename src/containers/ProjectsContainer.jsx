import React from 'react'
import Project from '../components/Project.jsx'
import ProjectData from '../services/projectData.js'


class ProjectsContainer extends React.Component {

  constructor(props){
    super(props)
    var projectData = new ProjectData();
    this.state = {
      projectData: projectData.projectInfo
    }
  }

  render(){

    return (
      <Project name="Ghost Pals"/>
    )
  }

}

export default ProjectsContainer
