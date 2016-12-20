import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Table, thead, tbody, th, tr, td } from 'react-bootstrap';
import _ from 'lodash';

import machineName from '../../configure/menuName';
import { styleConstant } from '../../styles/styleConstant';
//css
const Styles = styleConstant.ImgCard;

const CardContent = () => {
  let cons = [], titleCons = [];
  let machineStatus = ['Running','Running','Warning','Running','Running','Running','Running'];

  _.map(machineStatus,function(value,i){
    if(value === 'Running') cons.push(<td key={i} style={Styles.colorOne}>{value}</td>)
    else cons.push(<td key={i} style={Styles.colorTwo}>{value}</td>)
  })

  _.map(machineName, function(value){
    _.map(value.optionText,function(innervalue, i){
      if( i !== 'Change_Line' && i !== 'Dashboard' ) titleCons.push(<th key={i}>{innervalue}</th>);
    });
  });

  return(
    <Card style={ Styles.cardStyle }>
      <CardText>
        <img
          src={process.env.PUBLIC_URL + '/images/TSA00200-A.jpg'}
          role="presentation"
          style={ Styles.imgStyle } />
        <Card>
          <CardText>
            <Table responsive hover style={Styles.tableStyle}>
              <thead>
                <tr>
                  {titleCons}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {cons}
                </tr>
              </tbody>
            </Table>
          </CardText>
        </Card>
      </CardText>
    </Card>
  );
};

class ImgCard extends React.Component{
  render(){
    return(
      <CardContent />
    );
  }
};

export default ImgCard;
