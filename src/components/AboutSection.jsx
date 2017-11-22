import React from 'react'
import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card'
import {Tabs, Tab} from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'
import Chip from 'material-ui/Chip'
import ContactsChip from './ContactsChip.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {white100} from 'material-ui/styles/colors'

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
    height: 'auto'
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}


class AboutSection extends React.Component {


  render(){
    return (
      <div>
        <Card>
        <Tabs>
          <Tab label="About" >
            <Card style={styles.card}>
              <CardMedia
                overlay={<CardTitle style={styles.headline} title="About Me" subtitle="my great bio..."/>}
                >
                  <img src="img/dalmeny.jpg" alt="picture of the sea and sky at the Dalmeny estate"/>
                </CardMedia>

              <CardText>
                  I am a full-stack software engineer based in Edinburgh. I favour user-centered Agile approach to development, using test-driven development to ensure I write robust and clean code. In my free time, I love cycling, attending tech events, powerlifting, eating vegan food and watching basketball. I am a STEM ambassador, and am particularly interested in encouraging girls and women to learn to code.
              </CardText>
            </Card>
          </Tab>

          <Tab label="Skills" >
            <Card style={styles.card}>
              <CardMedia
                overlay={<CardTitle style={styles.headline} title="Skills" subtitle=""/>}
                >
                  <img src="img/colors.jpg" alt="geometric colors painted on a wall"/>
                </CardMedia>
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
              <CardMedia
                overlay={<CardTitle style={styles.headline} title="Contact me" subtitle="i love mail!"/>}
                >
                  <img src="img/sculpturecenter.jpg" alt="courtard in the edinburgh sculpture center"/>
                </CardMedia>
                <CardText>I would love to hear about freelance opportunities, particularly for organization in the charity/third sector.</CardText>

                <div style={styles.wrapper}>
                  <ContactsChip style={styles.chip} url="http://twitter.com/hatwell" label="twitter" color={white100}/>
                  <ContactsChip style={styles.chip} url="http://facebook.com/hatwell" label="facebook" color={white100}/>
                  <ContactsChip style={styles.chip} url="http://linkedin.com/in/hatwell" label="linkedin" color={white100}/>
                  <ContactsChip style={styles.chip} url="http://github.com/in/hatwell" label="github" color={white100}/>
                </div>
            </Card>
          </Tab>
        </Tabs>
        </Card>
      </div>
    )
  }

}

export default AboutSection
