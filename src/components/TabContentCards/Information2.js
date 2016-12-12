import React from 'react';
import _ from 'lodash';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {Table, tbody, tr, td} from 'react-bootstrap';

const Styles={
  cardStyle:{
    fontFamily: 'Roboto Mono, monospace',
  }
}

import {formatFloat} from '../../configure/commonFun';

const productTitle = ['Actual Iutput','Actual Output','NG Count','Yield Rate'];

const Content = (props) => {
  let CardsContent = [];
  let productContent = [];
  let num = 0 ;
  let actualInput,ngCount,yieldRate,actualOutput

  _.map(props.InfoData,function(value){
    _.map(value,function(innervalue, i){
      switch (i) {
        case 'InputCount':
          actualInput = innervalue ;
          break ;
        case 'OutputOKCount':
          actualOutput = innervalue ;
          break ;
        case 'OutputNGCount':
          ngCount = innervalue ;
          break ;
        case 'OutputCount':
          if(actualOutput)yieldRate = formatFloat((actualOutput/innervalue)*100, 2)+ '%' ;
          break ;
        default:
          break ;
      }
    })
  });
  productContent.push(actualInput);
  productContent.push(actualOutput);
  productContent.push(ngCount);
  productContent.push(yieldRate);

  _.map(productTitle,function(value){
    CardsContent.push(
      <tr key={value}>
        <td>{value} :</td>
        <td>{productContent[num]}</td>
      </tr>
    );
    num += 1 ;
  });
  num = 0 ;

  return(
    <Card style={Styles.cardStyle}>
      <CardTitle title="Product" />
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

class Information2 extends React.Component{

  render(){
    return(
      <Content InfoData={ this.props.InfoData } />
    );
  }
};

export default Information2;
