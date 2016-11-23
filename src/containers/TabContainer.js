import React from 'react';
import { connect } from 'react-redux';

import TabMenu from './TabMenu';
import { getAllInfo } from '../actions';

class TabsContent extends React.Component {

  componentDidMount() {
    const { getAllInfo } = this.props;
    getAllInfo();
  }

  render(){
    return(
      <TabMenu TableData={ this.props } />
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
