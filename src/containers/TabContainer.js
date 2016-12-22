import React from 'react';
import { connect } from 'react-redux';

import TabMenu from './TabMenu';
import { getAllInfo } from '../actions';

class TabsContent extends React.Component {

  componentWillMount(){
    let { getAllInfo } = this.props;
    getAllInfo();
  }

  render(){
    const { params, data } = this.props;
    const { line } = params;
    return(
      <TabMenu TableData={ data } lineName={ line }/>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ...state.LoadData,
  };
};

export default connect(
  mapStateToProps,
  {getAllInfo}
)(TabsContent)
