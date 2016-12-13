//*******************************************************
//DataForm ----- Overview
//            -- Summary
//            -- Output
//            -- Downtime
//            -- Alarm
//*******************************************************

import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Table, thead, tbody, th, tr, td} from 'react-bootstrap';
import _ from 'lodash';

import {processTimeDigit,formatFloat} from '../../configure/commonFun';

const Styles={
  tableStyle:{
    textAlign: 'center',
    marginTop: '20px',
    width: '90%',
    fontFamily: 'Roboto Mono, monospace',
  },
};

const DataContent=(props) => {
  let tableTitle = [];
  let cons = [];
  let innercons = [];
  let tmpTitle = [];

//***************Table Title*****************

  if(props.Data.tapName === 'summary'){
    tmpTitle= ['No','Machine Name','Running Time','Idle Time','Alarm Time',
               'Record Time','Input Count','Output OK Count','Output NG Count'];
  }else if(props.Data.tapName === 'output'){
    tmpTitle= ['No','Date','Output','Yield Rate'];
  }else if(props.Data.tapName === 'downtime'){
    tmpTitle= ['No','Machine Name','Downtime'];
  }else if(props.Data.tapName === 'alarm'){
    tmpTitle= ['No','Machine Name','Alarm Code','Description','Count','Alarm Time',
                'Idle Time','Total Time'];
  }else if(props.Data.tapName === 'overview'){
    tmpTitle= ['No', 'Machine Name', 'Error Code', 'Error Description'];
  }
  _.map(tmpTitle,function(value){
    tableTitle.push(<th  style={{textAlign:'center'}} key={value}>{value}</th>);
  });

//***************Table Content*****************

  if(props.Data.tapName === 'summary'){
    _.map(props.Data.Data , function(value, j){
      _.map(value, function(innervalue, i){
        if(i.substring(i.length-4) === "Time"){
          let formatTime = processTimeDigit(innervalue)
          innercons.push( <td key={props.Data.tapName+i}>{formatTime}</td>);
        }else{
          innercons.push( <td key={props.Data.tapName+i}>{innervalue}</td>);
        }
      });
      cons.push(<tr key={props.Data.tapName+j} children={innercons}/>);
      innercons = [];
    });
  }else if(props.Data.tapName === 'output'){
    _.map(props.Data.Data , function(value, j){
      let formatdata = formatFloat(((value.OutputOKCount / (value.OutputNGCount + value.OutputOKCount)) * 100), 2);
      innercons.push(<td key={value+j+1}>{j+1}</td>);
      //change date by format
      if(value.sDateYMD){
        innercons.push(<td key={value.sDateYMD}>{value.sDateYMD}</td>);
      }else if(value.iDateH !== undefined){ // special for '0'
        innercons.push(<td key={value.iDateH}>{value.iDateH}</td>);
      }else if(value.sDateYM){
        innercons.push(<td key={value.sDateYM}>{value.sDateYM}</td>);
      }else if(value.sDateY){
        innercons.push(<td key={value.sDateY}>{value.sDateY}</td>);
      }
      innercons.push(<td key={value.OutputOKCount}>{value.OutputOKCount}</td>);
      innercons.push(<td key={value}>{formatdata+'%'}</td>);
      cons.push(<tr key={props.Data.tapName+j} children={innercons}/>);
      innercons = [];
    });
  }else if(props.Data.tapName === 'alarm'){
    _.map(props.Data.Data , function(value, j){
      let tmpContent= [];
      tmpContent.push(j+1);
      tmpContent.push(value.MachineName);
      tmpContent.push(value.AlarmCode);
      tmpContent.push(value.AlarmDescription);
      tmpContent.push(value.AlarmCount);
      tmpContent.push(processTimeDigit(value.AlarmTime,'n'));
      tmpContent.push(processTimeDigit(value.RecoverTime,'n'));
      tmpContent.push(processTimeDigit(value.AlarmTime+value.RecoverTime,'n'));
      _.map(tmpContent,function(innervalue,i){
        innercons.push(<td key={j+i}>{innervalue}</td>);
      });
      cons.push(<tr key={props.Data.tapName+j} children={innercons}/>);
      innercons = [];
    });
  }else if(props.Data.tapName === 'downtime'){
    let MachineName = ['Router CV','Buffer CV','Transfer CV','ICTA CV','ICTA',
                        'ICTB CV','ICTB','ICTA Robot','ICTB Robot','TOTAL'];
    let totaltime = 0;
    let dataEnd = 0;
    _.map(props.Data.Data, function(value,j){
      totaltime += parseInt(value.AlarmTime,10);

      innercons.push(<td key={props.Data.tapName+"-"+j}>{j+1}</td>);
      innercons.push(<td key={props.Data.tapName+"--"+j}>{MachineName[j]}</td>);
      innercons.push(<td key={props.Data.tapName+"---"+j}>{processTimeDigit(value.AlarmTime)}</td>);
      cons.push(<tr key={props.Data.tapName+j} children={innercons}/>);
      innercons = [];
      dataEnd = j ;
    });
    //push last three row into array
    _.map(MachineName, function(value,j){
      if( j > dataEnd ){
        innercons.push(<td key={props.Data.tapName+"-"+j}>
          {MachineName[j] !== 'TOTAL' ? j+1 : ''}</td>);
        innercons.push(<td key={props.Data.tapName+"--"+j}>{MachineName[j]}</td>);
        innercons.push(<td key={props.Data.tapName+"---"+j}>
          {MachineName[j] !== 'TOTAL' ? processTimeDigit(0) : processTimeDigit(totaltime)}</td>);
        cons.push(<tr key={props.Data.tapName+j} children={innercons}/>);
        innercons = [];
      }

    });
  }else{
    cons = [];
  }

  return(
    <Card style={Styles.tableStyle}>
      <CardText>
        <Table responsive hover style={{fontSize: 'initial'}}>
          <thead>
            <tr>
              {tableTitle}
            </tr>
          </thead>
          <tbody>
            {cons}
          </tbody>
        </Table>
      </CardText>
    </Card>
  );
};

class DataForm extends React.Component{
  render(){
    return(
      <DataContent Data={this.props}/>
    );
  }
};

export default DataForm;
