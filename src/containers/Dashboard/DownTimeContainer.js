import React from 'react';
import _ from 'lodash';

// import { Charts, DataForm, DateSelect,
//           QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DataForm from '../../components/TabContentCards/DataForm';
import DateSelect from '../../components/TabContentCards/DateSelect';


const DownTimeContent=(props) => {
  return(
    <div>
      <DateSelect btn={ true } />
      <Charts PageName={"Downtime"}/>
      <DataForm Data={ props.Data } />
    </div>
  );
};

class DownTimeContainer extends React.Component{


  render(){
    return(
      <DownTimeContent Data={this.props.Data} />
    );
  }
};



export default DownTimeContainer;
