import React from 'react';

import NavBar from '../components/NavBar';
import SideMenu from '../components/SideMenu';

function initialBody() {
  document.body.style.marginLeft      = "200px";
  document.body.style.backgroundColor = "#F7F7F7";
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {},
    };
  }
  componentWillMount() {
    initialBody();
  }
  render() {
    return (
      <div>
        <NavBar lineName={this.props.params.line} />
        <SideMenu lineName={this.props.params.line} />
        { this.props.children && React.cloneElement(this.props.children, {
          Data: this.state.Data,
        }) }
      </div>
    );
  }
};

export default Main;
