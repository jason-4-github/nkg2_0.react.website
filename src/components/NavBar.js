import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import { connect } from 'react-redux';

import { SideMenuControl } from '../actions/DashboardBtnAction';

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

  testClick(e){
    e.preventDefault();
    const { SideMenuControl, OpenClose } = this.props;
    SideMenuControl();
    if(OpenClose){
      document.body.style.marginLeft = "0px";
    }else{
      document.body.style.marginLeft = "200px";
    }
  }

  render(){
    return(
      <div>
        <AppBar
          title={ Title }
          titleStyle={ NavbarStyle.BgColor }
          iconElementLeft={ <IconButton
                                iconStyle={{fill:'balck'}}
                                onClick={this.testClick.bind(this)}
                                >
                              <ContentFilter style={{marginTop:'10px'}}/>
                            </IconButton> }
          style={ NavbarStyle.BgColor }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ...state.closeOpen
  };
};

export default connect(
  mapStateToProps,
  {SideMenuControl}
)(Navbar)
