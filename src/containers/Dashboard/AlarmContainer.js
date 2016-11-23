import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

// import { Charts, DataForm, DateSelect,
//           QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DataForm from '../../components/TabContentCards/DataForm';
import DateSelect from '../../components/TabContentCards/DateSelect';
import { DatePickerData } from '../../actions/DashboardBtnAction';

const AlarmContent = (props) => {
  return(
    <div>
      <DateSelect btn={ true } isType={ props.isType }/>
      <Charts PageName={"Alarm"}/>
      <DataForm Data={ props.Data }/>
    </div>
  );
};

class AlarmContainer extends React.Component{
  render(){
    return(
      <AlarmContent Data={this.props.Data} isType={this.props.isType}/>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.DashboardBtn
  };
};

export default connect(
  mapStateToProps,
  {DatePickerData}
)(AlarmContainer);
