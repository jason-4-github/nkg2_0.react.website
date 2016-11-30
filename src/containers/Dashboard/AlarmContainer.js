import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'

// import { Charts, DataForm, DateSelect,
//           QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DataForm from '../../components/TabContentCards/DataForm';
import DateSelect from '../../components/TabContentCards/DateSelect';
import { PostToApi, GetFromApi } from '../../actions/contactApi';

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

  componentDidMount() {
    // console.log("AlarmContainer componentDidMount")
    // console.log(this.props)
    // const { PostToApi } = this.props;
    // PostToApi('alarm', 'wd_ga', "GET_INF01");
    // //GetFromApi('summary','information','wd_ga');
  }

  render(){
    return(
      <AlarmContent Data={this.props.Data} isType={this.props.isType}/>
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
  {PostToApi, GetFromApi}
)(AlarmContainer);
