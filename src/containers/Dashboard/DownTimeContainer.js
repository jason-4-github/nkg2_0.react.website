import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import Charts from '../../components/TabContentCards/Charts';
import DataForm from '../../components/TabContentCards/DataForm';
import DateSelect from '../../components/TabContentCards/DateSelect';
import { postToApi } from '../../actions/contactApi';
import { styleConstant } from '../../styles/styleConstant';

//css
const Styles = styleConstant.cardContainer;

// TODO(S.C.) => modify TwoOptions, PageName, Data to twoOptions, pageName, data
const DownTimeContent = (props) => {
  return (
    <Row>
      <Row style={Styles}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DateSelect
            btn={ true }
            TwoOptions={ props.TwoOptions }
            tapName={'downtime'}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Charts PageName={ "Downtime" } data={ props.chartData } />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <DataForm Data={ props.chartData } tapName={'downtime'} />
        </Col>
      </Row>
    </Row>
  );
};

class DownTimeContainer extends React.Component {
  componentDidMount() {
    const { postToApi, lineName } = this.props;
    postToApi('downtime',lineName);
  }

  render() {
    const { Data, chartData } = this.props;
    return (
      <DownTimeContent
        Data={ Data }
        TwoOptions={ false }
        chartData={ chartData } />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.getData,
    ...state.ChartContent,
  };
};

export default connect (
  mapStateToProps,
  { postToApi }
)(DownTimeContainer);
