import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import _ from 'lodash';
import { browserHistory } from 'react-router';

import MenuName from '../configure/menuName.json';
//import { OverViewContainer, SummaryContainer, OutPutContainer,
//         DownTimeContainer, AlarmContainer } from './Dashboard';
import OverViewContainer from './Dashboard/OverViewContainer';
import SummaryContainer from './Dashboard/SummaryContainer';
import OutPutContainer from './Dashboard/OutPutContainer';
import DownTimeContainer from './Dashboard/DownTimeContainer';
import AlarmContainer from './Dashboard/AlarmContainer';

var tmpName = "Overview" ;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    color: '#ee6e73',
  },
  headColor: {
    color: '#ee6e73',
    backgroundColor: 'white',
  },
  contentStyle: {
    paddingLeft: '20px',
  },
};

const ChangeTabsContent = (props) => {

  switch (props.name) {
    case "Output":
      return(<OutPutContainer Data={props.TableData} />);
    case "Summary":
      return(<SummaryContainer Data={props.TableData} />);
    case "Downtime":
      return(<DownTimeContainer Data={props.TableData} />);
    case "Alarm":
      return(<AlarmContainer Data={props.TableData} />);
    case "Overview":
      return(<OverViewContainer Data={props.TableData} />);
    default:
      return(<div />);
  }
};

const Options = (props) => {
  var TabList = [];
  _.map(MenuName, function(value){
    _.map(value.Dashboard, function(innervalue, j){
      TabList.push(
        <Tab
          key={ j }
          label={ innervalue }
          style={ styles.headColor }
          onActive={() =>{
            browserHistory.push( '/Dashboard/'+innervalue +'/www' );
            tmpName = innervalue;
          }} >
          <div style={ styles.contentStyle } >
            <h2 style={ styles.headline } > Dashboard - {innervalue} </h2>
          </div>
          <div>
          {tmpName === innervalue ?
            <ChangeTabsContent TableData={props.TableData} name={tmpName} /> : <div />}
          </div>
        </Tab>
      );
    });
  });
  return(
    <Tabs>
      {TabList}
    </Tabs>
  );
};

class TabMenu extends React.Component{
  render() {
    return(
      <div>
        <Options TableData={this.props.TableData}/>
      </div>
    );
  }
};

export default TabMenu ;
