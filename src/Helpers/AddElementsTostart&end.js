
let addElementsTostartAndEnd=(PrevArr,element)=>{
  let Array=[];
  Array.push(element);
  for(let i=0;i<PrevArr.length;i++){
    Array.push(PrevArr[i]);
  }
  Array.push(element);
  return Array;
}
export default addElementsTostartAndEnd;