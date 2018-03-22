import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {black, white} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

const iconStyles = {
  marginLeft: -24,
  color: 'lightgrey'
}

const titleStyles = {
  marginLeft: 10
}

class Header extends React.Component {

  render(){

      return (
        <Toolbar className = "color-highlight header-bar">
          <ToolbarGroup>
            <NavigationMenu style={iconStyles}/>
            <ToolbarTitle style={titleStyles} color={white}  className="app-title" text=""/>
          </ToolbarGroup>
       </Toolbar>
    )
  }

}

export default Header
