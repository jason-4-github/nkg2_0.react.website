import React from 'react';
import NavBar from '../components/NavBar';
import SideMenu from '../components/SideMenu';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Data:{
        id:1111,
      },
    };
  }
  render(){
    return(
      <div>
        <NavBar />
        <SideMenu />
        {this.props.children && React.cloneElement(this.props.children, {
          Data: this.state.Data
        })}
      </div>
    );
  }
}

export default Main ;
