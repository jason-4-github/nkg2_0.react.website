import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn,
        TableRow, TableRowColumn} from 'material-ui/Table';
import _ from 'lodash';

import {processTimeDigit,formatFloat} from '../../configure/commonFun';

const Styles={
  tableStyle:{
    textAlign: 'center',
    marginTop: '20px',
    width: '90%',
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
  }
  _.map(tmpTitle,function(value){
    tableTitle.push(<TableHeaderColumn key={value}>{value}</TableHeaderColumn>);
  });

//***************Table Content*****************

  if(props.Data.tapName === 'summary'){
    _.map(props.Data.Data , function(value, j){
      _.map(value, function(innervalue, i){
        if(i.substring(i.length-4) === "Time"){
          let formatTime = processTimeDigit(innervalue)
          innercons.push( <TableRowColumn key={props.Data.tapName+i}>{formatTime}</TableRowColumn>);
        }else{
          innercons.push( <TableRowColumn key={props.Data.tapName+i}>{innervalue}</TableRowColumn>);
        }
      });
      cons.push(<TableRow key={props.Data.tapName+j} children={innercons}/>);
      innercons = [];
    });
  }else if(props.Data.tapName === 'output'){
    _.map(props.Data.Data , function(value, j){
      let formatdata = formatFloat(((value.OutputOKCount / (value.OutputNGCount + value.OutputOKCount)) * 100), 2);
      innercons.push(<TableRowColumn key={value}>{j+1}</TableRowColumn>);
      //change date by format
      if(value.sDateYMD){
        innercons.push(<TableRowColumn key={value}>{value.sDateYMD}</TableRowColumn>);
      }else if(value.iDateH !== undefined){ // special for '0'
        innercons.push(<TableRowColumn key={value}>{value.iDateH}</TableRowColumn>);
      }else if(value.sDateYM){
        innercons.push(<TableRowColumn key={value}>{value.sDateYM}</TableRowColumn>);
      }else if(value.sDateY){
        innercons.push(<TableRowColumn key={value}>{value.sDateY}</TableRowColumn>);
      }
      innercons.push(<TableRowColumn key={value}>{value.OutputOKCount}</TableRowColumn>);
      innercons.push(<TableRowColumn key={value}>{formatdata+'%'}</TableRowColumn>);
      cons.push(<TableRow key={props.Data.tapName+j} children={innercons}/>);
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
        innercons.push(<TableRowColumn key={j+i}>{innervalue}</TableRowColumn>);
      });
      cons.push(<TableRow key={props.Data.tapName+j} children={innercons}/>);
      innercons = [];
    });
  }else if(props.Data.tapName === 'downtime'){
    let MachineName = ['Router CV','Buffer CV','Transfer CV','ICTA CV','ICTA',
                        'ICTB CV','ICTB','ICTA Robot','ICTB Robot','TOTAL'];
    let totaltime = 0;
    let dataEnd = 0;
    _.map(props.Data.Data, function(value,j){
      totaltime += parseInt(value.AlarmTime,10);

      innercons.push(<TableRowColumn key={props.Data.tapName+"-"+j}>{j+1}</TableRowColumn>);
      innercons.push(<TableRowColumn key={props.Data.tapName+"--"+j}>{MachineName[j]}</TableRowColumn>);
      innercons.push(<TableRowColumn key={props.Data.tapName+"---"+j}>{processTimeDigit(value.AlarmTime)}</TableRowColumn>);
      cons.push(<TableRow key={props.Data.tapName+j} children={innercons}/>);
      innercons = [];
      dataEnd = j ;
    });
    //push last three row into array
    _.map(MachineName, function(value,j){
      if( j > dataEnd ){
        innercons.push(<TableRowColumn key={props.Data.tapName+"-"+j}>
          {MachineName[j] !== 'TOTAL' ? j+1 : ''}</TableRowColumn>);
        innercons.push(<TableRowColumn key={props.Data.tapName+"--"+j}>{MachineName[j]}</TableRowColumn>);
        innercons.push(<TableRowColumn key={props.Data.tapName+"---"+j}>
          {MachineName[j] !== 'TOTAL' ? processTimeDigit(0) : processTimeDigit(totaltime)}</TableRowColumn>);
        cons.push(<TableRow key={props.Data.tapName+j} children={innercons}/>);
        innercons = [];
      }

    });
  }

  return(
    <Card style={Styles.tableStyle}>
      <CardText>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              {tableTitle}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {cons}
          </TableBody>
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
