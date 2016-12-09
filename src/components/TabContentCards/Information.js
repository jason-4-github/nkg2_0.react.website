import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn } from 'material-ui/Table';
import moment from 'moment';

const InfoTitle = ['Status','Time','Line Name'];

const Content = (props) => {

  let CardsContent = [];
  let infoContent = [];
  let num = 0 ;
  let status, time, tmplineName= props.lineName, lineName ;

  if(tmplineName === 'wd_ga')lineName = 'WD GA';
  else if(tmplineName === 'wd_gb')lineName = 'WD GB';
  else lineName = 'Not Found Line';

  _.map(props.InfoData,function(value){
    status = (value !== {} ? 'connected' : 'not connect');
    time = (status === 'connected' ?
            moment().format('YYYY-MM-DD hh:mm:ss') : 'not connect')
  });
  infoContent.push(status);
  infoContent.push(time);
  infoContent.push(lineName);

  _.map(InfoTitle,function(value){
    CardsContent.push(
      <TableRow key={value}>
        <TableRowColumn>{value} :</TableRowColumn>
        <TableRowColumn>{infoContent[num]}</TableRowColumn>
      </TableRow>
    );
    num += 1 ;
  });
  num = 0 ;

  return(
    <Card>
      <CardTitle title="Information" />
      <hr />
      <CardText>
        <Table>
          <TableBody displayRowCheckbox={false}>
            {CardsContent}
          </TableBody>
        </Table>
      </CardText>
    </Card>
  );
};

class Information extends React.Component{
  render(){
    const { InfoData, lineName } = this.props;
    return(
      <Content InfoData={ InfoData } lineName={ lineName }/>
    );
  }
};

export default Information;
