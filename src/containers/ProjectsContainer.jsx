import React from 'react'
import ReactDOM from 'react-dom'
import Project from '../components/Project.jsx'
import ProjectData from '../services/projectData.js'


class ProjectsContainer extends React.Component {

  constructor(props){
    super(props)
  }

  render(){

    return (
      <Project name="Ghost Pals"/>
    )
  }

}

export default ProjectsContainer
