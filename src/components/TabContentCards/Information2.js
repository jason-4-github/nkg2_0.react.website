import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn } from 'material-ui/Table';

const ExData={
  Status: "Connected",
  Time: "Today",
  LineName: "WD GA",
  Actual_Output: "448"
};

const Content = () => {
  var CardsContent = [];
  _.map(ExData, function(value, i){
    CardsContent.push(
      <TableRow key={i}>
        <TableRowColumn>{i} :</TableRowColumn>
        <TableRowColumn>{value}</TableRowColumn>
      </TableRow> );
  });

  return(
    <Card style={{width:'43%'}}>
      <CardTitle title="Information2" />
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

class Information2 extends React.Component{

  render(){
    return(
      <Content />
    );
  }
};

export default Information2;
