//*******************************************************
//Charts -- CheackTabs
//                      -- Output
//                      -- Downtime
//                      -- Alarm
//*******************************************************

import React from 'react';
import { ComposedChart, Line, Bar, XAxis, ResponsiveContainer,
          YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,Cell } from 'recharts';
import _ from 'lodash';
import {Card, CardText} from 'material-ui/Card';

import {formatFloat} from '../../configure/commonFun';

const Styles = {
  width: 600,
  height: 400,
  margin:{
    top: 20,
    right: 80,
    bottom: 20,
    left: 20
  }
};

const CheckTabs = ( props ) => {
  let tmpData = [];
  let yyy = {}, xxx = {};
  let dataTrasfer = 'Ooops! Something wrong here, There is no data on Chart to show.';
  yyy.OutputOKCount = 5023;
  yyy.OutputNGCount = 6077;
  yyy.sDateYMD = '2016-12-12';
  tmpData.push(yyy);
  xxx.OutputOKCount = 4099;
  xxx.OutputNGCount = 5677;
  xxx.sDateYMD = '2016-12-13';
  tmpData.push(xxx);
  console.log(tmpData)

  switch (props.pageName) {
    case "Output":
    console.log('Enter Output')
      return (<Output data={tmpData} />) ;
    case "Downtime":
    console.log('Enter Downtime')
      return (props.data === undefined ? <div  children={dataTrasfer}/> : <Downtime data={props.data} />) ;
    case "Alarm":
    console.log('Enter Alarm')
      return (props.data === undefined ? <div  children={dataTrasfer}/> : <Alarm data={props.data} />) ;
    default:
      return (<defaultCharts data={props.data} />) ;
  }
};

const Output = (data) => {
  let drawData = [] , innerObject = {};
  let countXNum = 31; //for x axis
  let chooseName = '';
  _.map(data,function(value,j){
    _.map(value,function(innervalue,i){
      if(innervalue.sDateYMD){
        innerObject.name = parseInt(innervalue.sDateYMD.slice(-2), 10) ;
        if( i === value.length-1 )countXNum = 31;
        chooseName = 'day';
      }else if(innervalue.iDateH !== undefined){ // special for '0'
        innerObject.name = innervalue.iDateH ;
        if( i === value.length-1 )countXNum = 24;
        chooseName = 'hour';
      }else if(innervalue.sDateYM){
        innerObject.name = parseInt(innervalue.sDateYM.slice(-2), 10) ;
        if( i === value.length-1 )countXNum = 12;
        chooseName = 'month';
      }else if(innervalue.sDateY){
        innerObject.name = parseInt(innervalue.sDateY, 10) ;
        if( i === value.length-1 )countXNum = 1;
        chooseName = 'year';
      }
      innerObject.Output = innervalue.OutputOKCount;
      innerObject.YieldRate = formatFloat(((innervalue.OutputOKCount /
            (innervalue.OutputNGCount + innervalue.OutputOKCount)) * 100), 2);
      drawData.push(innerObject);
      innerObject = {};
    });
  });

  _.times(countXNum, function(i){
    if(chooseName === 'hour'){
      innerObject.name = i ;
    }else{
      innerObject.name = i + 1 ;
    }
    innerObject.Output = 0 ;
    innerObject.YieldRate = 0 ;
    if( (drawData[i] !== undefined && drawData[i].name !== (i+1)) && chooseName === 'day'){
      drawData.splice(i, 0, innerObject);
    }else if( (drawData[i] !== undefined && drawData[i].name !== (i)) && chooseName === 'hour'){
      drawData.splice(i, 0, innerObject);
    }else if( (drawData[i] !== undefined && drawData[i].name !== (i+1)) && chooseName === 'month'){
      drawData.splice(i, 0, innerObject);
    }else if( i > 1 && drawData[i] === undefined ){
      drawData.push(innerObject)
    }
    innerObject = {};
  });
  return(
    <ResponsiveContainer width="100%" minHeight={300}>
      <ComposedChart width={Styles.width} height={Styles.height} data={drawData}
          margin={Styles.margin}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" label="Total-Output" orientation="left" domain={[0,'dataMax+1000']}/>
        <YAxis yAxisId="right" label="Yield-Rate(%)" orientation="right" domain={[0,100]}/>
        <Tooltip/>
        <Legend/>
        <CartesianGrid stroke='#f5f5f5'/>
        <Bar isAnimationActive={false} yAxisId="left" dataKey='Output' barCategoryGap={'90%'} fill='rgb(194, 53, 49)'/>
        <Line isAnimationActive={false} yAxisId="right"  dataKey='YieldRate' stroke='rgb(47, 69, 84)'/>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

const Downtime = (data) => {
  let COLORS = ['#91c7ae', '#c23531', '#2f4554', '#6aa5ca', '#d48265', '#5986ae', '#61a0a8', '#749f83'];
  let drawData = [], innerObject = {}, test = {} ;
  let MachineName = ['Router CV','Buffer CV','Transfer CV','ICTA CV','ICTA',
                      'ICTB CV','ICTB','ICTA Robot','ICTB Robot'];

  _.map(data,function(value,j){
    _.map(value,function(innervalue,i){
      innerObject.name = MachineName[i];
      innerObject.value = innervalue.AlarmTime;
      test.name = MachineName[i];
      drawData.push(innerObject);
      innerObject = {};
    });
  });
  //need to modify
  function outputCustomLabel({ name }){ return (name); };

  return(
  <ResponsiveContainer width="100%" minHeight={400}>
    <PieChart width={800} height={400} >
      <Pie  data={drawData}
            cx={200}
            cy={150}
            innerRadius={0}
            outerRadius={100}
            fill="#82ca9d"
            label={outputCustomLabel}>
      {drawData.map((entry, index) =>
          <Cell key={'cell'+index} fill={COLORS[index % COLORS.length]}/>)}
      </Pie>
      <Tooltip/>
    </PieChart>
  </ResponsiveContainer>
  );
};

const Alarm = (data) => {

  let drawData = [] , innerObject = {};
  _.map(data.data,function(value,j){
      innerObject.name = j+1;
      innerObject.Count = value.AlarmCount;
      innerObject.AlarmTime = value.AlarmTime;
      innerObject.IdleTime = value.RecoverTime;
      drawData.push(innerObject);
      innerObject = {};
  });

  return(
    <ResponsiveContainer width="100%" minHeight={300}>
      <ComposedChart width={Styles.width} height={Styles.height} data={drawData}
          margin={Styles.margin}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" label="Total-Output" orientation="left" />
        <YAxis yAxisId="right" label="Yield-Rate(%)" orientation="right" />
        <Tooltip/>
        <Legend/>
        <CartesianGrid stroke='#f5f5f5'/>
        <Bar yAxisId="left" dataKey='AlarmTime' barCategoryGap={'90%'} fill='rgb(194, 53, 49)'/>
        <Bar yAxisId="left" dataKey='IdleTime' barCategoryGap={'90%'} fill='rgb(47, 69, 84)'/>
        <Line yAxisId="right" type='linear' dataKey='Count' stroke='rgb(47, 69, 84)'/>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

class Charts extends React.Component{

  render(){
    return(
    <Card style={{width:'90%',marginTop:'20px'}}>
      <CardText>
        <CheckTabs pageName={ this.props.PageName } data={this.props.data} />
      </CardText>
    </Card>);
  }
};

export default Charts;
