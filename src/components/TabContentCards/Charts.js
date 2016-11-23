import React from 'react';
import { ComposedChart, Line, Bar, XAxis, ResponsiveContainer,
          YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';

import {Card, CardText} from 'material-ui/Card';

const data = [{name: '1', uv: 590, pv: 800, amt: 1400},
              {name: '2', uv: 868, pv: 967, amt: 1506},
              {name: '3', uv: 1397, pv: 1098, amt: 989},
              {name: '4', uv: 1480, pv: 1200, amt: 1228},
              {name: '5', uv: 1520, pv: 1108, amt: 1100},
              {name: '6', uv: 1520, pv: 1108, amt: 1100},
              {name: '7', uv: 1520, pv: 1108, amt: 1100},
              {name: '8', uv: 1520, pv: 1108, amt: 1100},
              {name: '9', uv: 1520, pv: 1108, amt: 1100},
              {name: '10', uv: 1520, pv: 1108, amt: 1100},
              {name: '11', uv: 1520, pv: 1108, amt: 1100},
              {name: '12', uv: 1520, pv: 1108, amt: 1100},
              {name: '13', uv: 1520, pv: 1108, amt: 1100},
              {name: '14', uv: 1520, pv: 1108, amt: 1100},
              {name: '15', uv: 1520, pv: 1108, amt: 1100},
              {name: '16', uv: 1520, pv: 1108, amt: 1100},
              {name: '17', uv: 1400, pv: 680, amt: 1700}
            ];

const data2 = [{name: 'Page A', value: 590 },
              {name: 'Page B', value: 868 },
              {name: 'Page C', value: 1397 },
              {name: 'Page D', value: 1480 },
              {name: 'Page E', value: 1520 },
              {name: 'Page F', value: 1400 }
            ];

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
  switch (props.pageName) {
    case "Output":
      return (<Output data={props.data} />) ;
      case "Downtime":
      return (<Downtime data={props.data2} />) ;
    case "Alarm":
      return (<Alarm data={props.data} />) ;
    default:
      return (<defaultCharts data={props.data} />) ;
  }
};

const Output = (data) => {
  return(
    <ResponsiveContainer width={500} minHeight={300}>
      <ComposedChart width={Styles.width} height={Styles.height} data={data.data}
          margin={Styles.margin}>
        <XAxis dataKey="name" label="Pages"/>
        <YAxis label="Index"/>
        <Tooltip/>
        <Legend/>
        <CartesianGrid stroke='#f5f5f5'/>
        <Bar dataKey='pv' barCategoryGap={'90%'} fill='rgb(194, 53, 49)'/>
        <Line type='monotone' dataKey='uv' stroke='rgb(47, 69, 84)'/>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

const Downtime = (data) => {
  return(
  <ResponsiveContainer width={500} minHeight={300}>
    <PieChart width={400} height={400}>
      <Pie data={data.data} cx={200} cy={150} innerRadius={0} outerRadius={100} fill="#82ca9d"/>
      <Tooltip/>
    </PieChart>
  </ResponsiveContainer>
  );
};

const Alarm = (data) => {
  return(
    <ResponsiveContainer width={500} minHeight={300}>
      <ComposedChart width={Styles.width} height={Styles.height} data={data.data}
          margin={Styles.margin}>
        <XAxis dataKey="name" label="Pages"/>
        <YAxis label="Index"/>
        <Tooltip/>
        <Legend/>
        <CartesianGrid stroke='#f5f5f5'/>
        <Bar dataKey='pv' barCategoryGap={'90%'} fill='rgb(194, 53, 49)'/>
        <Bar dataKey='uv' barCategoryGap={'90%'} fill='rgb(47, 69, 84)'/>
        <Line type='monotone' dataKey='uv' stroke='rgb(47, 69, 84)'/>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

class Charts extends React.Component{

  render(){
    return(
    <Card style={{width:'90%',marginTop:'20px'}}>
      <CardText>
        <CheckTabs pageName={ this.props.PageName } data={data} data2={data2} />
      </CardText>
    </Card>);
  }
};

export default Charts;
