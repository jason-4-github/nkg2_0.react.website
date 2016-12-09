import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'

// import { Charts, DataForm, DateSelect,
//           QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DataForm from '../../components/TabContentCards/DataForm';
import DateSelect from '../../components/TabContentCards/DateSelect';
import { PostToApi } from '../../actions/contactApi';

const AlarmContent = (props) => {
  console.log("nnnnnnnnnnnnnnnnnnnnnm",props)
  return(
    <div>
      <DateSelect btn={ true } isType={ props.isType }
                  TwoOptions={props.TwoOptions} tapName={'alarm'}/>
      <Charts PageName={"Alarm"} data={ props.chartData }/>
      <DataForm Data={ props.chartData } tapName={'alarm'} />
    </div>
  );
};

class AlarmContainer extends React.Component{

  componentDidMount() {
    // console.log("AlarmContainer componentDidMount")
    // console.log(this.props)
    const { PostToApi, lineName } = this.props;
    PostToApi('alarm', lineName);
    // //GetFromApi('summary','information','wd_ga');
  }

  render(){
    const { Data, isType, chartAData } = this.props;
    return(
      <AlarmContent
        Data={Data}
        isType={isType}
        chartData={chartAData}
        TwoOptions={false} />
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.ChartContent,
  };
};

export default connect(
  mapStateToProps,
  {PostToApi}
)(AlarmContainer);
