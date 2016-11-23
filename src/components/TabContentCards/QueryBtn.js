import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Styles = {
  btnStyle:{
    margin: 12,
    right: '20px',
  }
};

class QueryBtn extends React.Component{

  Test(event){
    console.log(1111)
    console.log(this.props)
    console.log(2222)
  }

  render(){
    return(
      <div>
        <RaisedButton
          label="Query"
          primary={ true }
          style={ Styles.btnStyle }
          onClick={this.Test.bind(this)}
        />
      </div>
    );
  }
};

export default QueryBtn;
