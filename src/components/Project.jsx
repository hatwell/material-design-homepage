import React from 'react'
import ReactDOM from 'react-dom'
import {Card, CardText, CardTitle} from 'material-ui/Card'

class Project extends React.Component {

  render(){
    return (
      <Card>
        <CardTitle title={this.props.name} subtitle={this.props.subtitle}/>

        <CardText>
          {this.props.name}
        </CardText>
      </Card>
    )
  }

}

export default Project
