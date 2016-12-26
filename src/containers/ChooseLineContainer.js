import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

import { styleConstant } from '../styles/styleConstant';

//css
const Styles = styleConstant.chooseLineContainer;

function initialBody() {
  document.body.style.marginLeft      = "0px";
  document.body.style.backgroundColor = "#F7F7F7";
  document.body.style.backgroundImage = '';

  document.getElementById('app').style.backgroundColor = 'white';
}

class ChooseLineContainer extends React.Component {
  render() {
    initialBody();
    return (
      <div style={ Styles.wholePage }>
        <div style={{ height:'40vh' }} />
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={ Styles.titleStyle }>
            { 'Select One Line' }
          </Col>
          <div style={{ height:'15vh' }} />
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Card>
              <CardText style={ Styles.cardStyle }>
                <FlatButton
                  label='WD GA LINE'
                  labelStyle={ Styles.wordStyle }
                  onClick={ () => browserHistory.replace( '/Dashboard/Overview/wd_ga') } />
              </CardText>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} >
            <Card>
              <CardText style={ Styles.cardStyle }>
                <FlatButton
                  label='WD GB LINE'
                  labelStyle={ Styles.wordStyle }
                  onClick={ () => browserHistory.replace( '/Dashboard/Overview/wd_gb') } />
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
};

export default ChooseLineContainer;
