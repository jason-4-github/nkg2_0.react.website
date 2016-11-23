import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { connect } from 'react-redux';

import QueryBtn from './QueryBtn';
import { GetFilterData, DatePickerData } from '../../actions/DashboardBtnAction';

const Styles={
  cardStyle: {
    marginTop: "20px",
    width: '90%',
  }
};

const BtnShow=(props) => {
  switch (props.Querybtn) {
    case true:
      return(<QueryBtn date={ props.date } />);
    default:
      return(<QueryBtn date={ props.date } filter={ props.filter }/>);
  }
};

class DateSelect extends React.Component {
  constructor(props){
    super(props);
    this.state={
      dateData: 'nothing to catch',
    };
  };

  handleDateValueChange(event, date){
    let formatdate=date.getFullYear() + "." +
                    (date.getMonth() + 1) + "." + date.getDate();
    //change date-type to string-type
    this.setState({
      dateData: formatdate ,
    });
    if(this.props.TwoOptions === true ){
       const { GetFilterData, DatePickerData } = this.props;
       GetFilterData();
       DatePickerData(this.state.dateData);
    }
  };

  render() {

    return (
      <Card style={ Styles.cardStyle }>
        <CardTitle title="History" />
        <hr/>
        <CardText>
          <div style={{display:'flex'}}>
            <DatePicker
              hintText="Select day"
              autoOk={ true }
              onChange={ this.handleDateValueChange.bind(this) }/>
          </div>
          <BtnShow
            Querybtn={ this.props.btn }
            date={ this.state.dateData }
            filter={ this.props.Data } />
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
  {GetFilterData, DatePickerData}
)(DateSelect)
