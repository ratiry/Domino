 
 import classes from './Player.module.scss';
 import {H1} from './../../../Components/Typography/Typography';
import Domino from '../Domino/Domino';
 let Player=(props)=>{
  if(props.id<=Number(props.ammountOfPlayers)){
    return(
      <div className={classes.Player}>
        <Domino rearDots={2} frontDots={5}/>
        <Domino rearDots={2} frontDots={6}/>
        <Domino rearDots={2} frontDots={6}/>
      </div>
    )
  }
  return(
    <div></div>
  )
 }
 export default Player;