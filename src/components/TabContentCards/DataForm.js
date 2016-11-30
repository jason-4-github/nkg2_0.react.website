import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn,
        TableRow, TableRowColumn} from 'material-ui/Table';
import _ from 'lodash';

const Styles={
  tableStyle:{
    textAlign: 'center',
    marginTop: '20px',
    width: '90%',
  },
};

const DataContent=(props) => {
  var cons = [];
  _.map(props.Data.Data , function(value){
    if(value.id !== undefined ){
      cons.push(
        <TableRow key={value.id} >
          <TableRowColumn>{value.id}</TableRowColumn>
          <TableRowColumn>{value.Name}</TableRowColumn>
          <TableRowColumn>{value.Status}</TableRowColumn>
        </TableRow>
      );
    }else{
      console.log(value);
    }
  });

  return(
    <Card style={Styles.tableStyle}>
      <CardText>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow >
              <TableHeaderColumn>Id</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
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
