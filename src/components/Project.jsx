import React from 'react'
import ReactDOM from 'react-dom'
import {Card, CardTitle} from 'material-ui/Card'

class Project extends React.Component {

  render(){
    return (
      <Card>
        <CardTitle title={this.props.title} subtitle={this.props.subtitle}/>

        <CardText>
          <p>Name: {this.props.name}</p>
        </CardText>
      </Card>
    )
  }

}

export default Project
