import React from 'react'
import ReactDOM from 'react-dom'
import ProjectData from '../services/projectData.js'


class ProjectsContainer extends React.Component {

  constructor(props){
    super(props)
  }

  render(){



    return (
      <p>{this.props.projects[0].name}</p>
    )
  }

}

export default ProjectsContainer
