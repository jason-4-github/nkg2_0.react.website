import React from 'react';
import BgImg from '../../public/images/index-background.jpg';
import { Row, Col } from 'react-bootstrap';

import LoginForm from '../components/LoginForm';
import { styleConstant } from '../styles/styleConstant';
//css
const Styles = styleConstant.indexContainer;


function InitialBody(){
  document.body.style.marginLeft = "0px";
  document.body.style.backgroundImage = 'url(' + BgImg + ')';
  document.body.style.backgroundRepeat = 'round';
  document.body.style.height = '100vh';

  document.getElementById('app').style.height = '100vh';
  document.getElementById('app').style.backgroundColor = 'rgba(0,0,0,0.4)';
}

//document.getElementById('app').style.margin = "-8px";
class IndexPage extends React.Component{
  render(){
    InitialBody();
    return(
      <div>
        <div style={{height:'20vh'}}/>
        <div>
          <Row>
            <Col xs={1} sm={2} md={3} lg={3}/>
            <Col xs={10} sm={8} md={6} lg={6} style={Styles.titleStyle}>{"NKG 2.0"}</Col>
            <Col xs={1} sm={2} md={3} lg={3}/>
          </Row>
          <Row>
            <Col xs={1} sm={2} md={3} lg={3}/>
            <Col xs={10} sm={8} md={6} lg={6} style={Styles.formStyle}>
              <LoginForm />
            </Col>
            <Col xs={1} sm={2} md={3} lg={3}/>
          </Row>
        </div>
      </div>
    );
  }
}

export default IndexPage ;
