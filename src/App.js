import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
            <HashRouter >
              <div className='container'>
                <Header />
                <Route exact path="/" component={MainContainer} />
              </div>
              </HashRouter>

          </MuiThemeProvider>
            );
  }
}

export default App;
