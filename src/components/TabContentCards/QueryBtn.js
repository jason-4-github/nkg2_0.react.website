//*******************************************************
//QueryBtn -- Onclick --Output 4 types --|--PostToApi
//                  | --Downtime       --|
//                  | --Alarm          --|
//*******************************************************

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import { PostToApi } from '../../actions/contactApi';
import { styleConstant } from '../../styles/styleConstant';
//css
const Styles = styleConstant.queryBtn;

class QueryBtn extends React.Component{

  btnClick(event){
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
          onClick={this.btnClick.bind(this)}
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
