import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

// import { Information, Information2, DataForm,
//           ImgCard } from '../../components/TabContentCards';

import Information from '../../components/TabContentCards/Information';
import Information2 from '../../components/TabContentCards/Information2';
import DataForm from '../../components/TabContentCards/DataForm';
import ImgCard from '../../components/TabContentCards/ImgCard';
import {GetFromApi} from '../../actions/contactApi';

const Styles={
  twoCardsStyle:{
    width:'94%',
  },
}

const OverViewContent = (props) => {
  const { Data, lineName, InfoData } = props.Data;
  return(
    <Row>
      <Row style={Styles.twoCardsStyle}>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Information InfoData={ InfoData } lineName={ lineName }/>
        </Col>
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
          <DataForm Data={ Data } />
        </Col>
      </Row>
    </Row>
  );
};

class OverViewContainer extends React.Component{
  componentDidMount(){
    const { GetFromApi, lineName } = this.props;
    GetFromApi('overview', lineName ,'information');
    //GetFromApi('overview','wd_ga');
  }

  render(){
    return(
      <OverViewContent Data={this.props}/>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    ...state.CheckData,
  };
};

export default connect(
  mapStateToProps,
  {GetFromApi}
)(OverViewContainer);
