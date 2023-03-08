 
 import classes from './Player.module.scss';
 import {H1} from './../../../Components/Typography/Typography';
import Domino from '../Domino/Domino';
 let Player=(props)=>{
  if(props.id<=Number(props.ammountOfPlayers)){
    if(props.id==3 || props.id==4){
      return(
        <div className={classes.Player + ' ' + classes.vertical}>
            <Domino rearDots={2} frontDots={4} direction={"vertical"}/>
        </div>
      )
    }
    return(
      <div className={classes.Player}>
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={4} />
          <Domino rearDots={2} frontDots={6} />
      </div>
    )
  }
  return(
    <div></div>
  )
 }
 export default Player;