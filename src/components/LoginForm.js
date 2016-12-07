import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Col,Row} from 'react-bootstrap';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router';

const Styles = {
  bgStyle: {
    border: 'solid',
    borderColor: '#26a69a',
    width:500,
    paddingRight: '0px',
    paddingLeft: '0px'
  },
  btnStyle:{
    margin: 12,
    right: '20px',
  },
  cardHeader:{
    backgroundColor:'#26a69a',
    textAlign:'center',
    padding:'10px'
  },
}

class LoginForm extends React.Component {
  render(){
    console.log(browserHistory)
    return(
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}/>
          <Col xs={6} sm={6} md={6} lg={6} style={Styles.bgStyle}>
            <Card style={{backgroundColor:'rgba(247,247,247,0.8)'}}>
              <CardHeader title="LOGIN PORTAL"
                          style={Styles.cardHeader}
                          titleColor='white'
                          titleStyle={{fontSize:'xx-large',fontWeight:800}}/>

              <CardText>
                <TextField
                  hintText="Username"
                  fullWidth={true}
                  floatingLabelText="Username"
                /><br />
                <TextField
                  hintText="Password"
                  fullWidth={true}
                  floatingLabelText="Password"
                  type="password"
                /><br />
                <div style={{textAlign:'center'}}>
                  <RaisedButton
                    label="Login"
                    primary={ true }
                    style={ Styles.btnStyle }
                    onClick={ () => browserHistory.push( '/select-line') } 
                  />
                </div>
              </CardText>
            </Card>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}/>
        </Row>
    );
  }
}

export default LoginForm;
