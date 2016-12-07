import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn } from 'material-ui/Table';

const InfoTitle = ['Status','Time','Line Name','Actial Output'];

const Content = (props) => {

  let CardsContent = [];
  let infoContent = [];
  let num = 0 ;
  let status,time,lineName= 'wd_ga',actialOutput

  _.map(props.InfoData,function(value){
    status = (value !== undefined ? 'connect' : 'not connect');
    _.map(value,function(innervalue, i){
      switch (i) {
        case 'DateYMD':
          time = innervalue ;
          break ;
        case 'OutputOKCount':
          actialOutput = innervalue ;
          break ;
        default:
          break ;
      }
    })
  });
  infoContent.push(status);
  infoContent.push(time);
  infoContent.push(lineName);
  infoContent.push(actialOutput);

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
    <Card style={{width:'43%'}}>
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
    return(
      <Content InfoData={ this.props.InfoData } />
    );
  }
};

export default Information;
