
function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

const CheckForSimularValuesInArray=(array,value)=>{
  let count=0;
  let areSimular=false;
  for(let i=0;i<array.length;i++){
    if(value==array[i]){
      count=count+1;
    }
  }
  if(count===array.length){
    areSimular=true;
  }
  return areSimular;
}
const  PickFirstPlayer=(Players)=>{
  let  firstPlayer=1;
  let doubles=[];
  let heightstDoubles=[];
  for(let i=0;i<Players.length;i++){
    let PlayersDoubles=[];
    for(let ii=0;ii<Players[i].length;ii++){
      if(Players[i][ii][0]===Players[i][ii][1]){
        PlayersDoubles.push(Players[i][ii][0]);
      }
    }
    doubles.push(PlayersDoubles);
  }
  for(let i=0;i<doubles.length;i++){
    if(doubles[i].length>0){
      let heighstDouble=Math.max.apply(null, doubles[i]);
      heightstDoubles.push(heighstDouble)
    }else{
      heightstDoubles.push(-1)
    }
  }
  if(!CheckForSimularValuesInArray(heightstDoubles,-1)){
    firstPlayer=indexOfMax(heightstDoubles)+1;
  }
  return firstPlayer;
}
export default PickFirstPlayer;