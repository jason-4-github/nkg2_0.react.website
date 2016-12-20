import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
// import { bindActionCreators } from 'redux'

// import { Charts, DataForm, DateSelect,
//           QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DataForm from '../../components/TabContentCards/DataForm';
import DateSelect from '../../components/TabContentCards/DateSelect';
import { PostToApi } from '../../actions/contactApi';
import { styleConstant } from '../../styles/styleConstant';
//css
const Styles = styleConstant.cardContainer;


const AlarmContent = (props) => {
  return(
    <Row>
      <Row style={Styles}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DateSelect btn={ true } isType={ props.isType }
                      TwoOptions={props.TwoOptions} tapName={'alarm'}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Charts PageName={"Alarm"} data={ props.chartData }/>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DataForm Data={ props.chartData } tapName={'alarm'} />
        </Col>
      </Row>
    </Row>
  );
};

class AlarmContainer extends React.Component{

  componentDidMount() {
    const { PostToApi, lineName } = this.props;
    PostToApi('alarm', lineName);
  }

  render(){
    const { Data, isType, chartAData } = this.props;
    return(
      <AlarmContent
        Data={Data}
        isType={isType}
        chartData={chartAData}
        TwoOptions={false} />
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.ChartContent,
  };
};

export default connect(
  mapStateToProps,
  {PostToApi}
)(AlarmContainer);
