import React from 'react';
import { Drawer, MenuItem, Menu } from 'material-ui';
import _ from 'lodash';
import { browserHistory } from 'react-router';
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
  }
}

const Options = () => {
  var MenuList = [];
  _.map(MenuName, function(value){
    _.map(value.optionText,function(innervalue, i){
      MenuList.push(
        <MenuItem
          key={ i }
          style={ Styles.menuWordColor }
          primaryText={ innervalue }
          onClick={ () => browserHistory.push( '/' + i ) } />
      )
    });
  });

  return(
    <Drawer width={200} containerStyle={{backgroundColor: Styles.drawerStyle.bgcolor}}>
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
      <div>
      <Options/>
      
      </div>
    );
  }
};

export default SideMenu;
