import React from 'react';
import _ from 'lodash';

// import { Information, Information2, DataForm,
//           ImgCard } from '../../components/TabContentCards';

import Information from '../../components/TabContentCards/Information';
import Information2 from '../../components/TabContentCards/Information2';
import DataForm from '../../components/TabContentCards/DataForm';
import ImgCard from '../../components/TabContentCards/ImgCard';

const SummaryContent = (props) => {
  return(
    <div>
      <div style={{ display: 'flex' }}>
        <Information />
        <div style={{ width: '4%' }}></div>
        <Information2 />
      </div>
      <ImgCard />
      <DataForm Data={ props.Data }/>
    </div>
  );
};

class SummaryContainer extends React.Component{
  render(){
    return(
      <SummaryContent Data={this.props.Data}/>
    );
  }
};

export default SummaryContainer;
