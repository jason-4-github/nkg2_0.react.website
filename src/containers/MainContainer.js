import React from 'react';
import NavBar from '../components/NavBar';
import SideMenu from '../components/SideMenu';
import TabContainer from './TabContainer'

class Main extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <SideMenu />
        <TabContainer />
      </div>
    );
  }
}

export default Main ;
