import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import Information from '../../components/TabContentCards/Information';
import Information2 from '../../components/TabContentCards/Information2';
import DataForm from '../../components/TabContentCards/DataForm';
import ImgCard from '../../components/TabContentCards/ImgCard';
import { getFromApi } from '../../actions/contactApi';
import { styleConstant } from '../../styles/styleConstant';

//css
const Styles = styleConstant.cardContainer;

const SummaryContent = (props) => {
  const { InfoData, tableData, lineName } = props.Data;
  return (
    <Row>
      <Row style={ Styles }>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Information InfoData={ InfoData } lineName={ lineName }/>
        </Col>
        <Col xs={12} sm={12} mdHidden lgHidden />
        <Col xs={12} sm={12} md={6} lg={6}>
          <Information2 InfoData={ InfoData } />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <ImgCard />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DataForm Data={ tableData } tapName={ 'summary' } />
        </Col>
      </Row>
    </Row>
  );
};

class SummaryContainer extends React.Component {
  componentDidMount() {
    const { getFromApi, lineName } = this.props;
    getFromApi('summary',lineName,'information');
    getFromApi('summary',lineName);
  }

  render() {
    return (
      <SummaryContent Data={this.props} />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.CheckData,
    ...state.TableContent,
  };
};

export default connect(
  mapStateToProps,
  { getFromApi }
)(SummaryContainer);
