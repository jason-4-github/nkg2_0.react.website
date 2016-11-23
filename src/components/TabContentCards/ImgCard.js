import React from 'react';
import { Card, CardText } from 'material-ui/Card';

const Styles={
  imgStyle: {
    width: "100%",
  },
  cardStyle: {
    marginTop:"20px",
    width: '90%',
  }
};

const CardContent = () => {
  return(
    <Card style={ Styles.cardStyle }>
      <CardText>
        <img
          src={process.env.PUBLIC_URL + '/images/TSA00200-A.jpg'}
          role="presentation"
          style={ Styles.imgStyle } />
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
