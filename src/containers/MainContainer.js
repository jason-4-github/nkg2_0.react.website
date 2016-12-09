import React from 'react';
import NavBar from '../components/NavBar';
import SideMenu from '../components/SideMenu';

function InitialBody(){
  document.body.style.marginLeft = "200px";
  document.body.style.backgroundColor = "#F7F7F7";
  //document.body.style.backgroundImage = 'url(' + BgImg + ') no-repeat';
}

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Data:{
        id:1111,
      },
    };
  }

  componentWillMount(){
    InitialBody();
  }

  render(){
    return(
      <div>
        <NavBar lineName={this.props.params.line}/>
        <SideMenu lineName={this.props.params.line}/>
        {this.props.children && React.cloneElement(this.props.children, {
          Data: this.state.Data,
        })}
      </div>
    );
  }
}

export default Main;
