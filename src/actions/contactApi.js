import fetch from 'isomorphic-fetch';

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

const DispatchFun = (actionType, data='', statue) => (dispatch, getState) => {
  console.log(actionType)
  if( statue === true ){
    dispatch({
      type: actionType,
      resData: data
    })
  }else{
    dispatch({
      type: actionType,
      resData: 'failure to show'
    });
  }
}

export const PostToApi = (tabsName, lineName, outputParam='', actionType) =>{

  let Data;
  switch(tabsName){
    case 'output':
    //data:time
      Data = {time:'2016-11-23 00:00:00'};
      break;
    case 'downtime':
    //data:date
      Data = {date:'2016.11.24'};
      break;
    case 'alarm':
    //data{startTime,endTime}
      let start = '2016.11.23 00:00:00';
      let end   = '2016.11.23 23:59:59';
      Data = {startTime: start, endTime: end};
      break;
    default:
      Data = '2016.11.24';
  }

  let url;
  if(tabsName === 'output'){
    url = 'http://c5096w7.calcomp.co.th:3000/apis/dashboard/'+
            tabsName+ '/'+ lineName+ '/'+ outputParam;
  }else{
    url = 'http://c5096w7.calcomp.co.th:3000/apis/dashboard/'+ tabsName+ '/'+ lineName;
  }

  fetch(url,{
    method: 'POST',
    headers: {'Accept': 'application/json',
              'Content-Type': 'application/json',},
    body: JSON.stringify(Data)
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data){
      let transTypeName = actionType+ "_SUCCESS";
      console.log("request success",data)
       DispatchFun(transTypeName, data, true);

    }).catch(function(error) {
      console.log('request failed', error)
      let transTypeName2 = actionType+ "_FAILURE";
       DispatchFun(transTypeName2, false);

    });
};

export const GetFromApi = (tabsName, typeName='', lineName) =>{
  let url ;

  if(typeName === ''){
    url = 'http://c5096w7.calcomp.co.th:3000/apis/dashboard/'+
            tabsName+ '/'+ lineName;
  }else{
    url = 'http://c5096w7.calcomp.co.th:3000/apis/dashboard/'+
            tabsName+ '/'+ typeName+ '/'+ lineName;
  }

  fetch(url,{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((data)=> dispatch =>{
       console.log("Get Success",data)
       dispatch({
         type: "GET_INFO1_SUCCESS",
         resData: data
       })
    })
    .catch(function(error) {
      console.log("Get failure",error)
    });
};
