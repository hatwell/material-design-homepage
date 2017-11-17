import React from 'react'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {Tabs, Tab} from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },

  tabs: {
    backgroundColor: '#009688'
  },

  card: {
    height: 300
  }
}

class AboutSection extends React.Component {


  render(){
    return (
      <div>
        <Tabs>
          <Tab label="About" >
            <Card style={styles.card}>
              <CardTitle style={styles.headline} title="About Me" subtitle="my great bio..."/>
              <CardText>
                  <p>I am a full-stack software engineer based in Edinburgh. I favour user-centered Agile approach to development, using test-driven development to ensure I write robust and clean code.</p>

                  <p>In my free time, I love cycling, attending tech events, powerlifting, eating vegan food and watching basketball.</p>


                  <p>I am a STEM ambassador, and am particularly interested in encouraging girls and women to learn to code.</p>
              </CardText>
            </Card>
          </Tab>

          <Tab label="Skills" >
            <Card style={styles.card}>
              <CardTitle style={styles.headline} title="Skills" subtitle="wat i can do"/>
              <CardText>
                <ul>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Material Design</li>
                </ul>
              </CardText>
            </Card>
          </Tab>

          <Tab label="Contact" >
            <Card style={styles.card}>
              <CardTitle style={styles.headline} title="Contact" subtitle="i live for notifications"/>
                <CardText>
                  <p>
                    I would love to hear about freelance opportunities, particularly for organization in the charity/third sector.
                  </p>
                </CardText>

            </Card>
          </Tab>
        </Tabs>
      </div>
    )
  }

}

export default AboutSection
