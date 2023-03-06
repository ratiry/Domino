 
 import classes from './Player.module.scss';
 import {H1} from './../../../Components/Typography/Typography';
 let Player=(props)=>{
  if(props.id<=Number(props.ammountOfPlayers)){
    debugger;
    return(
      <div><H1>filler</H1> </div>
    )
  }else{
    return(
      <div></div>
    )
  }
 }
 export default Player;