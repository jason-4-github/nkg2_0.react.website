export const processTimeDigit = (t,format='y') =>{
  let t2 ;
  if(format=== 'y') t2 = t / 1000;
  else t2 = t;


  var hour    = Math.floor(t2 / 3600).toString().toString();
  var minute  = Math.floor((t2 - (hour*3600)) / 60).toString();
  var second  = Math.floor((t2 - (hour*3600)) - (minute*60)).toString();

  if (hour.length <= 1)   { hour   = "0" + hour; }
  if (minute.length <= 1) { minute = "0" + minute; }
  if (second.length <= 1) { second = "0" + second; }

  return hour + ':' + minute + ':' + second;
};

export const formatFloat = (num, pos) => {
  let size = Math.pow(10, pos);
  return Math.floor(num * size) / size;
}
