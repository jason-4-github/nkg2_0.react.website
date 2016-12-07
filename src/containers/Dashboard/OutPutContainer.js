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

const OutPutContent = (props) => {
  return(
    <Row>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6}>
          <DateSelect btn={ false } TwoOptions={ props.TwoOptions }
                      tapName={ 'output' }/>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
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
    const { PostToApi } = this.props;
    PostToApi('output','wd_ga', '1');
  }

  render(){
    const radioType = "none"
    console.log("-------------",this.props)
    return(
      <OutPutContent
        Data={this.props.Data}
        TwoOptions={true}
        chartData={this.props.chartOData}
        RadioData={this.props.RadioData? this.props.RadioData : radioType } />
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.DashboardBtn,
    ...state.ChartContent,
  };
};

// export default OutPutContainer;

export default connect(
  mapStateToProps,
  {PostToApi}
)(OutPutContainer);
