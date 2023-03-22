
import { P } from "../../../Components/Typography/Typography";
let Stats=(props)=>{
  let currentPlayer="";
  debugger;
  switch(props.currentPlayer){
    case 1:
      currentPlayer="Bottom Player moves";
      break;
    case 2:
      currentPlayer="Left Player Moves"
      break;
    case 3:
      currentPlayer="Top Player Moves"
      break;
    case 4:
      currentPlayer="Right Player Moves"
      break;
  }
  return(
    <div>
      <P>{currentPlayer}</P>
    </div>
  )
}
export default Stats;