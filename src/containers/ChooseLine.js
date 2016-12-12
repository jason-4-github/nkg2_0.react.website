import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Card, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

const Styles = {
  titleStyle: {
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 800,
  },
  wholePage: {
    paddingLeft: '0px',
    height: '100vh',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  wordStyle: {
    color: '#039be5',
    fontWeight: 800,
  },
  cardStyle: {
    textAlign:'center',
  }
};

function InitialBody(){
  document.body.style.marginLeft = "0px";
  document.body.style.backgroundColor = "#F7F7F7";
  document.body.style.backgroundImage = '';

  document.getElementById('app').style.backgroundColor = 'white';
}

class ChooseLine extends React.Component{
  render(){
    InitialBody();
    return(
      <div style={Styles.wholePage}>
        <div style={{height:'40vh'}}/>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={Styles.titleStyle}>{'Select One Line'}</Col>
          <div style={{height:'15vh'}}/>
        </Row>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} >
            <Card>
              <CardText style={Styles.cardStyle}>
                <FlatButton label='WD GA LINE'
                            labelStyle={Styles.wordStyle}
                            onClick={ () => browserHistory.replace( '/Dashboard/wd_ga') }
                />
              </CardText>
            </Card>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} >
            <Card>
              <CardText style={Styles.cardStyle}>
                <FlatButton label='WD GB LINE'
                            labelStyle={Styles.wordStyle}
                            onClick={ () => browserHistory.replace( '/Dashboard/wd_gb') }
                />
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChooseLine;
