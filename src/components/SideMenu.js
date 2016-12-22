import React from 'react';
import { Drawer, MenuItem, Menu } from 'material-ui';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import MenuName from '../configure/menuName';
import { styleConstant } from '../styles/styleConstant';
//css
const Styles = styleConstant.sideMenu;

const Options = (props) => {
  const { lineName, OpenClose } = props;
  var MenuList = [];
  _.map(MenuName, function(value){
    _.map(value.optionText,function(innervalue, i){
      MenuList.push(
        <MenuItem
          key={ i }
          style={ Styles.menuWordColor }
          primaryText={ innervalue }
          onClick={ () => {
                    if( i === 'Dashboard' ){
                      browserHistory.push( '/Dashboard/Overview/' + lineName )
                    }else if( i === 'Change_Line' ){
                      browserHistory.push( '/select-line' )
                    }else{
                      browserHistory.push( '/' + i + '/' + lineName )
                    }
                  }} />
      )
    });
  });

  //Change SideMenu Title
  let titleName ;
  if(lineName === 'wd_ga'){
    titleName = 'WD GA LINE';
  }else if(lineName === 'wd_gb'){
    titleName = 'WD GB LINE';
  }else{
    titleName = 'NO MATCH LINE';
  }

  return(
    <Drawer
      width={200} className='sideMenu'
      containerStyle={{backgroundColor: Styles.drawerStyle.bgcolor,overflowX:'hidden'}}
      open={OpenClose}>

      <div style={Styles.imgStyle}></div>
      <p style={Styles.menuTitlestyle}>{titleName}</p>
      <Menu>
        {MenuList}
      </Menu>
    </Drawer>
  );
};

class SideMenu extends React.Component{
  render(){
    const { lineName, OpenClose } = this.props;
    return(
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Options OpenClose={OpenClose} lineName={lineName}/>
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
