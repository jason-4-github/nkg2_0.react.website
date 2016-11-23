import React from 'react';
import _ from 'lodash';

// import { Charts, DataForm, DateSelect,
//           FilterChoose, QueryBtn } from '../../components/TabContentCards';
import Charts from '../../components/TabContentCards/Charts';
import DateSelect from '../../components/TabContentCards/DateSelect';
import DataForm from '../../components/TabContentCards/DataForm';
import FilterChoose from '../../components/TabContentCards/FilterChoose';

const OutPutContent = (props) => {
  return(
    <div>
      <div style={{ display: 'flex' }}>
        <DateSelect btn={ false } TwoOptions={ props.TwoOptions }/>
        <div style={{ width: '4%' }}></div>
        <FilterChoose
          Querybtn={ props.Querybtn }
          btn={ true }
          isType={ props.isType } />
      </div>
      <Charts PageName={"Output"}/>
      <DataForm Data={ props.Data } />
    </div>
  );
};

class OutPutContainer extends React.Component{

  render(){
    return(
      <OutPutContent Data={this.props.Data} TwoOptions={true}/>
    );
  }
};

// const mapStateToProps = (state) => {
//   console.log("dfdfdfdfdf")
//   return{
//     ...state.DashboardBtn,
//     ...state.LoadData
//   };
// };

export default OutPutContainer;

// export default connect(
//   mapStateToProps,
//
// )(OutPutContainer);
