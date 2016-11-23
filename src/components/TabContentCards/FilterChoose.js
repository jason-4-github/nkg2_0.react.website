import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { connect } from 'react-redux';

import { ThrowFilterData } from '../../actions/DashboardBtnAction';

const Styles={
  radioButton: {
    marginBottom: 16,
    width: '150px'
  },
  cardStyle: {
    marginTop:"20px",
    width: '90%',
  }
};

class FilterChoose extends React.Component{
  constructor(props){
    super(props);
    this.state={
      radioValue: 'Day',
    };
  };

  handleRadioValueChange(event, value){
    const { ThrowFilterData } = this.props;
    this.setState({
      radioValue: value
    });
    ThrowFilterData(value);
  };

  render(){
    return(
      <Card style={Styles.cardStyle}>
        <CardTitle title="Filter" />
        <hr/>
        <CardText>
          <RadioButtonGroup
            name="shipSpeed"
            defaultSelected="Day"
            style={{display: 'flex'}}
            onChange={ this.handleRadioValueChange.bind(this) }
          >
            <RadioButton
              value="Hour"
              label="Hour"
              style={Styles.radioButton} />
            <RadioButton
              value="Day"
              label="Day"
              style={Styles.radioButton} />
            <RadioButton
              value="Month"
              label="Month"
              style={Styles.radioButton} />
            <RadioButton
              value="Year"
              label="Year"
              style={Styles.radioButton} />
          </RadioButtonGroup>
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ...state.LoadData,
    ...state.DashboardBtn
  };
};

export default connect(
  mapStateToProps,
  {ThrowFilterData}
)(FilterChoose)
