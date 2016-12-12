import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

// import { Charts, DataForm, DateSelect,
//           QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DataForm from '../../components/TabContentCards/DataForm';
import DateSelect from '../../components/TabContentCards/DateSelect';
import { PostToApi } from '../../actions/contactApi';

const Styles={
  CardsStyle:{
    width:'94%',
  },
}

const DownTimeContent=(props) => {
  return(
    <Row>
      <Row style={Styles.CardsStyle}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DateSelect btn={ true } TwoOptions={props.TwoOptions} tapName={'downtime'}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Charts PageName={"Downtime"} data={ props.chartData } />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <DataForm Data={ props.chartData } tapName={'downtime'} />
        </Col>
      </Row>
    </Row>
  );
};

class DownTimeContainer extends React.Component{
  componentDidMount(){
    const { PostToApi, lineName } = this.props;
    PostToApi('downtime',lineName);
  }

  render(){
    const { Data, chartDData } = this.props;
    return(
      <DownTimeContent
        Data={Data}
        TwoOptions={false}
        chartData={chartDData} />
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.getData,
    ...state.ChartContent,
  };
};

export default connect(
  mapStateToProps,
  {PostToApi}
)(DownTimeContainer);
