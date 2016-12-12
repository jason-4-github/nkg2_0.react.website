//*******************************************************
//QueryBtn -- Onclick --Output 4 types --|--PostToApi
//                  | --Downtime       --|
//                  | --Alarm          --|
//*******************************************************

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import {PostToApi} from '../../actions/contactApi';

const Styles = {
  btnStyle:{
    margin: 12,
    right: '20px',
  }
};

class QueryBtn extends React.Component{

  Test(event){
    const {PostToApi, tapName, date, RadioData} = this.props;
    console.log(this.props)
    let outputTransNum;
    switch (RadioData) {
      case 'Hour':
        outputTransNum = '0';
        break;
      case 'Day':
        outputTransNum = '1';
        break;
      case 'Month':
        outputTransNum = '2';
        break;
      case 'Year':
        outputTransNum = '3';
        break;
      default:
        outputTransNum = '1';
    }

    if(tapName === 'output'){
      PostToApi(tapName,'wd_ga', outputTransNum, date);
    }else{
      PostToApi(tapName,'wd_ga', '', date);
    }

  }

  render(){
    return(
      <div>
        <RaisedButton
          label="Query"
          primary={ true }
          style={ Styles.btnStyle }
          onClick={this.Test.bind(this)}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.getData,
    ...state.ChartContent
  };
};

export default connect(
  mapStateToProps,
  {PostToApi}
)(QueryBtn);
