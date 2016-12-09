import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

// import { Charts, DataForm, DateSelect,
//           FilterChoose, QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DateSelect from '../../components/TabContentCards/DateSelect';
import DataForm from '../../components/TabContentCards/DataForm';
import FilterChoose from '../../components/TabContentCards/FilterChoose';
import { PostToApi } from '../../actions/contactApi';

const Styles={
  historyFilterStyle:{
    width:'94%',
  },
}

const OutPutContent = (props) => {
  return(
    <Row>
      <Row style={Styles.historyFilterStyle}>
        <Col xs={12} sm={4} md={4} lg={4}>
          <DateSelect btn={ false } TwoOptions={ props.TwoOptions }
                      tapName={ 'output' }/>
        </Col>
        <Col xs={12} sm={8} md={8} lg={8}>
          <FilterChoose
            Querybtn={ props.Querybtn }
            btn={ true }
            isType={ props.isType } />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Charts PageName={"Output"} data={props.chartData} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DataForm Data={ props.chartData } tapName={'output'} />
        </Col>
      </Row>
    </Row>
  );
};

class OutPutContainer extends React.Component{

  componentDidMount(){
    const { PostToApi, lineName } = this.props;
    PostToApi('output',lineName, '1');
  }

  render(){
    const radioType = "none"
    const { Data, chartOData, RadioData } = this.props;
    return(
      <OutPutContent
        Data={Data}
        TwoOptions={true}
        chartData={ chartOData }
        RadioData={ RadioData? RadioData : radioType } />
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.getData,
    ...state.ChartContent,
  };
};

// export default OutPutContainer;

export default connect(
  mapStateToProps,
  {PostToApi}
)(OutPutContainer);
