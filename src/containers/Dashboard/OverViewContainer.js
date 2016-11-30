import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';

// import { Information, Information2, DataForm,
//           ImgCard } from '../../components/TabContentCards';

import Information from '../../components/TabContentCards/Information';
import Information2 from '../../components/TabContentCards/Information2';
import DataForm from '../../components/TabContentCards/DataForm';
import ImgCard from '../../components/TabContentCards/ImgCard';
import {GetFromApi} from '../../actions/contactApi';

const OverViewContent = (props) => {
  return(
    <div>
      <div style={{display: 'flex'}}>
        <Information />
        <div style={{width: '4%'}}></div>
        <Information2 />
      </div>
      <ImgCard />
      <DataForm Data={ props.Data } />
    </div>
  );
};

class OverViewContainer extends React.Component{
  componentDidMount(){
    const { GetFromApi } = this.props;
    GetFromApi('overview','information','wd_ga');
  }

  render(){
    return(
      <OverViewContent Data={this.props.Data}/>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.CheckData,
  };
};

export default connect(
  mapStateToProps,
  {GetFromApi}
)(OverViewContainer);
