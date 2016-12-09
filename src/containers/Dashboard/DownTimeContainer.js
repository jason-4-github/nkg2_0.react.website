import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';

// import { Charts, DataForm, DateSelect,
//           QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DataForm from '../../components/TabContentCards/DataForm';
import DateSelect from '../../components/TabContentCards/DateSelect';
import { PostToApi } from '../../actions/contactApi';


const DownTimeContent=(props) => {
  return(
    <div>
      <DateSelect btn={ true } TwoOptions={props.TwoOptions} tapName={'downtime'}/>
      <Charts PageName={"Downtime"} data={ props.chartData } />
      <DataForm Data={ props.chartData } tapName={'downtime'} />
    </div>
  );
};

class DownTimeContainer extends React.Component{
  componentDidMount(){
    const { PostToApi, lineName } = this.props;
    PostToApi('downtime',lineName);
  }

  render(){
    const { Data, chartDData } = this.props;
    return(
      <DownTimeContent
        Data={Data}
        TwoOptions={false}
        chartData={chartDData} />
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.getData,
    ...state.ChartContent,
  };
};

export default connect(
  mapStateToProps,
  {PostToApi}
)(DownTimeContainer);
