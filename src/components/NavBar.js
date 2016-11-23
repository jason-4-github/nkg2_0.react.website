import React from 'react';
import AppBar from 'material-ui/AppBar';

const NavbarStyle = {
    BgColor: {
      backgroundColor: '#EDEDED',
      color: '#5A738E',
    }
};

var Title = (
      <span style={ NavbarStyle.BgColor }>
        <b>NKG 2.0 (CCET 4.0)</b>
      </span>
    );

class Navbar extends React.Component {
  render(){
    return(
      <div>
        <AppBar
          title={ Title }
          titleStyle={ NavbarStyle.BgColor }
          showMenuIconButton={ true }
          style={ NavbarStyle.BgColor }
        />
      </div>
    );
  }
}

export default Navbar;
