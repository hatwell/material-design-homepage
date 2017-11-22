import React from 'react'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import { SocialIcon } from 'react-social-icons';
import FontIcon from 'material-ui/FontIcon'
import {blue300, indigo900} from 'material-ui/styles/colors'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

class ContactsChip extends React.Component{

  render(){
    return(
      <Chip
        style={styles.chip}
        >
          <Avatar
            icon={<SocialIcon url={this.props.url}></SocialIcon>}/>
            {this.props.label}
        </Chip>
    )
  }
}

export default ContactsChip
