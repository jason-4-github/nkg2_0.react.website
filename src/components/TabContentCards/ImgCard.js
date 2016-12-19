import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import {Table, thead, tbody, th, tr, td} from 'react-bootstrap';
import _ from 'lodash';

const Styles={
  imgStyle: {
    width: "100%",
  },
  cardStyle: {
    marginTop:"20px",
    width: '90%',
  },
  colorOne: {
    color: '#45c550',
  },
  colorTwo: {
    color: '#f75d5d',
  },
  tableStyle: {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: 'initial'
  }
};

const CardContent = () => {
  let cons = [];
  let machineStatus = ['Running','Running','Warning','Running'];

  _.map(machineStatus,function(value,i){
    if(value === 'Running') cons.push(<td key={i} style={Styles.colorOne}>{value}</td>)
    else cons.push(<td key={i} style={Styles.colorTwo}>{value}</td>)
  })

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
                  <th>Title1</th>
                  <th>Title2</th>
                  <th>Title3</th>
                  <th>Title4</th>
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
