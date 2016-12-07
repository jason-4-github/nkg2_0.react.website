import React from 'react';
import BgImg from '../../public/images/index-background.jpg';
import { Row, Col } from 'react-bootstrap';

import LoginForm from '../components/LoginForm';

function InitialBody(str){
  document.body.style.marginLeft = "0px";
  document.body.style.backgroundColor = "#F7F7F7";
  //document.body.style.backgroundImage = 'url(' + BgImg + ') no-repeat';
}

const Styles = {
  bgStyle: {
    background: 'url(' + BgImg + ') no-repeat',
    minHeight: 700,
  },
  titleStyle: {
    fontSize: '100px',
    fontWeight: '800',
    textAlign: 'center',
  }
}

//document.getElementById('app').style.margin = "-8px";
class IndexPage extends React.Component{
  render(){
    InitialBody();
    return(
      <div style={Styles.bgStyle}>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}/>
          <Col xs={6} sm={6} md={6} lg={6} style={Styles.titleStyle}>{"NKG 2.0"}</Col>
          <Col xs={3} sm={3} md={3} lg={3}/>
        </Row>
        <LoginForm />
      </div>
    );
  }
}

export default IndexPage ;
