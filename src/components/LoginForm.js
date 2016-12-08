import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router';

const Styles = {
  btnStyle:{
    margin: 12,
    right: '20px',
  },
  cardHeader:{
    backgroundColor:'#26a69a',
    textAlign:'center',
    padding:'10px'
  },
  underlineStyle:{
    borderColor: '#9e9fa1',
  }
}

class LoginForm extends React.Component {
  render(){
    return(
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
            underlineStyle={Styles.underlineStyle}
          /><br />
          <TextField
            hintText="Password"
            fullWidth={true}
            floatingLabelText="Password"
            type="password"
            underlineStyle={Styles.underlineStyle}
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
    );
  }
}

export default LoginForm;
