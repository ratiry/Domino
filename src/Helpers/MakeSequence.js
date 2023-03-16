
const MakeSequence=(ammountOfPlayers)=>{
  let sequence=[];
  for(let i=1;i<ammountOfPlayers+1;i++){
    sequence.push(i);
  }
  return sequence;
}
export default MakeSequence;