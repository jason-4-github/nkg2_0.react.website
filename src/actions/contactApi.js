import 'isomorphic-fetch';
import _ from 'lodash';
import moment from 'moment';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export const PostToApi = (tabsName, lineName, outputParam='', choseDate='') =>{

  let Data;
  switch(tabsName){
    case 'output':
      //data:time
      let finalTime='', newTime=[] ;
      if(choseDate !== '') {
        newTime = choseDate.split('.');
        _.map(newTime,function(value,i){
          finalTime += '-'+ value ;
        });
        finalTime = finalTime.slice(1);
      }else{
        finalTime = moment().format('YYYY-MM-DD')
      }

      Data = {time: finalTime + ' 00:00:00'};
      break;
    case 'downtime':
      //data:date
      if(choseDate !== '') {
        Data = {date:choseDate};
      }else{
        let now = moment().format('YYYY.MM.DD')
        Data = { date: now };
      }
      break;
    case 'alarm':
      //data{startTime,endTime}
      let start, end ;

      if(choseDate !== '') {
        start = choseDate + ' 00:00:00';
        end   = choseDate + ' 23:59:59';
      }else{
        let now = moment().format('YYYY.MM.DD')
        start = now + ' 00:00:00';
        end   = now + ' 23:59:59';
      }
      Data = {startTime: start, endTime: end};
      break;
    default:
      Data = moment().format('YYYY.MM.DD');
  }

  let url;
  let actionName = 'GET_CHARTDATA_';
  if(tabsName === 'output'){
    url = 'http://c5096w7.calcomp.co.th:3000/apis/dashboard/'+
            tabsName+ '/'+ lineName+ '/'+ outputParam;
  }else{
    url = 'http://c5096w7.calcomp.co.th:3000/apis/dashboard/'+ tabsName+ '/'+ lineName;
  }

return dispatch => {
  fetch(url,{
    method: 'POST',
    headers: {'Accept': 'application/json',
              'Content-Type': 'application/json',},
    body: JSON.stringify(Data)
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data){
      console.log("request success",data)
      actionName = actionName.concat('SUCCESS')
      if(tabsName === 'output'){
      dispatch({
        type: actionName,
        chartOData: data
      });
    }else if(tabsName === 'downtime'){
      dispatch({
        type: actionName,
        chartDData: data
      });
    }else if(tabsName === 'alarm'){
      dispatch({
        type: actionName,
        chartAData: data
      });
    }
    }).catch(function(error) {
      console.log('request failed', error)
      actionName = actionName.concat('FAILURE')
      dispatch({
        type: actionName,
      });
    });
  };
};

export const GetFromApi = (tabsName, lineName, typeName='') =>{
  let url = '';
  let actionName = '';

  if(typeName === ''){
    url = 'http://c5096w7.calcomp.co.th:3000/apis/dashboard/'+
            tabsName+ '/'+ lineName;
            actionName = 'GET_TABLEDATA_';

  }else{
    url = 'http://c5096w7.calcomp.co.th:3000/apis/dashboard/'+
            tabsName+ '/'+ typeName+ '/'+ lineName;
    actionName = 'GET_INFO1_';
  }

  return dispatch => {
    fetch(url,{
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(data){
         console.log("Get Success",data)
         actionName = actionName.concat('SUCCESS')
         if(typeName === ''){
           dispatch({
             type: actionName,
             tableData: data
           });
         }else{
           dispatch({
             type: actionName,
             InfoData: data
           });
         }
      })
      .catch(function(error) {
        console.log("Get failure",error)
        actionName = actionName.concat('FAILURE')
        if(typeName === ''){
          dispatch({
            type: actionName,
          });
        }else{
          dispatch({
            type: actionName,
          });
        }
      });
  };
};
