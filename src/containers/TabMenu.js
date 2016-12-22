import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import _ from 'lodash';
import { browserHistory } from 'react-router';

import MenuName from '../configure/menuName.json';
import OverViewContainer from './Dashboard/OverViewContainer';
import SummaryContainer from './Dashboard/SummaryContainer';
import OutPutContainer from './Dashboard/OutPutContainer';
import DownTimeContainer from './Dashboard/DownTimeContainer';
import AlarmContainer from './Dashboard/AlarmContainer';
import { styleConstant } from '../styles/styleConstant';
//css
const styles = styleConstant.tabMenu;

const ChangeTabsContent = (props) => {
  const { lineName, TableData, name } = props;
  switch (name) {
    case "Output":
      return(<OutPutContainer Data={TableData} lineName={lineName}/>);
    case "Summary":
      return(<SummaryContainer Data={TableData} lineName={lineName}/>);
    case "Downtime":
      return(<DownTimeContainer Data={TableData} lineName={lineName}/>);
    case "Alarm":
      return(<AlarmContainer Data={TableData} lineName={lineName}/>);
    case "Overview":
      return(<OverViewContainer Data={TableData} lineName={lineName}/>);
    default:
      return(<div />);
  }
};

const Options = (props) => {
  const { lineName, TableData } = props;
  // first loaddata
  let TabList = [];
  let tmpName;

  let tmpPath = location.pathname.split('/');
  let firstPath = (tmpPath[3] === undefined && tmpPath[1] === 'Dashboard' ?
                    'Overview': tmpPath[2]);

  tmpName = firstPath;

  //construct tabContent
  _.map(MenuName, function(value){
    _.map(value.Dashboard, function(innervalue, j){
      TabList.push(
        <Tab
          key={ j }
          value={innervalue}
          label={ innervalue }
          style={ styles.headColor }
          onActive={() =>{
            browserHistory.push( '/Dashboard/'+innervalue + '/' + lineName );
            tmpName = innervalue;
          }}>
          <div style={ styles.contentStyle } >
            <h2 style={ styles.headline } > Dashboard - {innervalue} </h2>
          </div>
          <div style={ styles.contentStyle }>
            {tmpName === innervalue ?
              <ChangeTabsContent TableData={TableData} name={tmpName} lineName={lineName} /> :
              <div />
            }
          </div>
        </Tab>
      );
    });
  });
  return(
    <Tabs value={firstPath}>
      {TabList}
    </Tabs>
  );
};

class TabMenu extends React.Component{
  render() {
    const { TableData, lineName } = this.props;
    return(
      <div>
        <Options TableData={TableData} lineName={lineName}/>
      </div>
    );
  }
};

export default TabMenu ;
