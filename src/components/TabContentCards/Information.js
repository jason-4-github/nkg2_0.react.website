import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {Table, tbody, tr, td} from 'react-bootstrap';
import moment from 'moment';

import { styleConstant } from '../../styles/styleConstant';
//css
const Styles = styleConstant.fontStyle;

const InfoTitle = ['Status','Time','Line Name'];
const OverviewTitle = ['Status','Time','Line Name', 'Actual Output'];

const Content = (props) => {

  let CardsContent = [];
  let infoContent = [];
  let num = 0 ;
  let status, time, tmplineName= props.lineName, lineName, actualOutput ;

  if(tmplineName === 'wd_ga')lineName = 'WD GA';
  else if(tmplineName === 'wd_gb')lineName = 'WD GB';
  else lineName = 'Not Found Line';
  status = (props.InfoData ? 'connected' : 'not connect');
  time = (status === 'connected' ?
    moment().format('YYYY-MM-DD hh:mm:ss') : 'not connect')

  _.map(props.InfoData,function(value){
    actualOutput = value.OutputOKCount;
  });
  infoContent.push(status);
  infoContent.push(time);
  infoContent.push(lineName);

  let tmpTitle = InfoTitle;
  if( props.tabName ) {
    tmpTitle = OverviewTitle ;
    infoContent.push(actualOutput);
  }

  _.map(tmpTitle,function(value){
    CardsContent.push(
      <tr key={value}>
        <td>{value} :</td>
        <td>{infoContent[num]}</td>
      </tr>
    );
    num += 1 ;
  });
  num = 0 ;

  return(
    <Card style={Styles}>
      <CardTitle title="Information" />
      <hr />
      <CardText>
        <Table style={{border: 'hidden'}} responsive hover>
          <tbody>
            {CardsContent}
          </tbody>
        </Table>
      </CardText>
    </Card>
  );
};

class Information extends React.Component{
  render(){
    const { InfoData, lineName, tabName } = this.props;
    return(
      <Content InfoData={ InfoData } lineName={ lineName } tabName={ tabName }/>
    );
  }
};

export default Information;
