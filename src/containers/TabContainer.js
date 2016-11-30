import React from 'react';
import { connect } from 'react-redux';

import TabMenu from './TabMenu';
import { getAllInfo } from '../actions';

class TabsContent extends React.Component {

  componentWillMount(){
    let { getAllInfo } = this.props;
    getAllInfo();
  }

  componentWillUpdate() {
    let { getAllInfo } = this.props;
    getAllInfo();
  }
  render(){
    return(
      <TabMenu TableData={ this.props.data } />
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ...state.LoadData
  };
};

export default connect(
  mapStateToProps,
  {getAllInfo}
)(TabsContent)
