import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import BgImg from '../../public/images/index-background.jpg';
import LoginForm from '../components/LoginForm';
import { styleConstant } from '../styles/styleConstant';

//css
const Styles = styleConstant.indexContainer;

// TODO(S.C.) => convert to css file to be controlled by js
function initialBody() {
  document.body.style.marginLeft        = "0px";
  document.body.style.backgroundImage   = 'url(' + BgImg + ')';
  document.body.style.backgroundRepeat  = 'round';
  document.body.style.height            = '100vh';

  document.getElementById('app').style.height           = '100vh';
  document.getElementById('app').style.backgroundColor  = 'rgba(0,0,0,0.4)';
}

//document.getElementById('app').style.margin = "-8px";
class IndexPage extends React.Component {
  componentWillMount() {
    if (document.body.clientWidth <= 980) {
      browserHistory.push( '/m' );
    } else {
      initialBody();
    }
  }
  render() {
    return (
      <div>
        <div style={{ height:'20vh' }} />
        <div>
          <Row>
            <Col xs={1} sm={2} md={3} lg={3} />
            <Col xs={10} sm={8} md={6} lg={6} style={ Styles.titleStyle }>{ "NKG 2.0" }</Col>
            <Col xs={1} sm={2} md={3} lg={3} />
          </Row>
          <Row>
            <Col xs={1} sm={2} md={3} lg={3} />
            <Col xs={10} sm={8} md={6} lg={6} style={ Styles.formStyle }>
              <LoginForm />
            </Col>
            <Col xs={1} sm={2} md={3} lg={3} />
          </Row>
        </div>
      </div>
    );
  }
};

export default IndexPage;
