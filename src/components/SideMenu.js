import React from 'react';
import { Drawer, MenuItem, Menu } from 'material-ui';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import sidelogo from '../../public/images/logo.png';
import MenuName from '../configure/menuName';

const Styles = {
  imgStyle: {
    background: 'url(' + sidelogo + ') no-repeat',
    backgroundPosition: 'center',
    width: '200px',
    height: '200px',
  },
  menuWordColor: {
    color: 'white',
  },
  menuTitlestyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',
  },
  drawerStyle: {
    open: 'open',
    bgcolor: '#2A3F54'
  },
}

const Options = (props) => {
  var MenuList = [];
  _.map(MenuName, function(value){
    _.map(value.optionText,function(innervalue, i){
      MenuList.push(
        <MenuItem
          key={ i }
          style={ Styles.menuWordColor }
          primaryText={ innervalue }
          onClick={ () => browserHistory.push( '/' + i + '/www' ) } />
      )
    });
  });

  return(
    <Drawer
      width={200} className='sideMenu'
      containerStyle={{backgroundColor: Styles.drawerStyle.bgcolor,overflowX:'hidden'}}
      open={props.OpenClose}>

      <div style={Styles.imgStyle}></div>
      <p style={Styles.menuTitlestyle}> WD GA LINE </p>
      <Menu>
        {MenuList}
      </Menu>
    </Drawer>
  );
};

class SideMenu extends React.Component{
  render(){
    return(
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Options OpenClose={this.props.OpenClose}/>
        </Col>
      </Row>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.closeOpen
  };
};

export default connect(
  mapStateToProps,
)(SideMenu)
