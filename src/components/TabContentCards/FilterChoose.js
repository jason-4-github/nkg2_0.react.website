import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';

import { ThrowFilterData } from '../../actions/DashboardBtnAction';

const Styles={
  radioButton: {
    marginBottom: 16,
    width: '150px'
  },
  cardStyle: {
    marginTop:"20px",
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
    this.setState({
      radioValue: value
    });
    const { ThrowFilterData } = this.props;
    ThrowFilterData(value);
  };

  render(){
    return(
      <Card style={Styles.cardStyle}>
        <CardTitle title="Filter" />
        <hr/>
        <CardText>
          <Row>
            <RadioButtonGroup
              name="shipSpeed"
              defaultSelected="null"
              onChange={ this.handleRadioValueChange.bind(this) }
            >
              <RadioButton
                className="col-xs-3 col-sm-3 col-md-3 col-lg-6"
                value="Hour"
                label="Hour"
                style={Styles.radioButton} />

              <RadioButton
                className="col-xs-3 col-sm-3 col-md-3 col-lg-6"
                value="Day"
                label="Day"
                style={Styles.radioButton} />

              <RadioButton
                className="col-xs-3 col-sm-3 col-md-3 col-lg-6"
                value="Month"
                label="Month"
                style={Styles.radioButton} />

              <RadioButton
                className="col-xs-3 col-sm-3 col-md-3 col-lg-6"
                value="Year"
                label="Year"
                style={Styles.radioButton} />
            </RadioButtonGroup>
          </Row>
        </CardText>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    ...state.DashboardBtn
  };
};

export default connect(
  mapStateToProps,
  {ThrowFilterData}
)(FilterChoose)
