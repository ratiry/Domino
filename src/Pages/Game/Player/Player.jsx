 
 import classes from './Player.module.scss';
 import {H1, P} from './../../../Components/Typography/Typography';
import Domino from '../Domino/Domino';
import { useEffect, useState } from 'react';
 let Player=(props)=>{
  let [ShouldShowDominos,setShouldShowDominos]=useState(false);
  // let [shouldCurrentPlayer,setShouldCurrentPlayer]=useState(false)
  // useEffect(()=>{
  //   if(props.PlayersMoves.length>0 & props.NumberSequence !=undefined){

  //     setShouldCurrentPlayer(true);
  //   }
  // },[props.PlayersMoves])
  useEffect(()=>{
    if(props.dominos !==undefined){
      setShouldShowDominos(true);
    }
  },[props.dominos])
  if(props.id<=Number(props.ammountOfPlayers)){
    if(props.id==3 || props.id==4){
      return(
        <div className={classes.Player + ' ' + classes.vertical}>
            {/* {shouldCurrentPlayer   && console.log(props.PlayersMoves[ props.NumberSequence-1] + " " + props.NumberSequence)} */}
            {ShouldShowDominos &&  props.dominos.map((domino)=>{return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"vertical"}/>})}
        </div>
      )
    }
    return(
      <div className={classes.Player}>
        {/* {shouldCurrentPlayer   && console.log(props.PlayersMoves[ props.NumberSequence-1] + " " + props.NumberSequence)} */}
        {ShouldShowDominos &&  props.dominos.map((domino)=>{return <Domino rearDots={domino[0]} frontDots={domino[1]} />})}
      </div>
    )
  }
  return(
    <div></div>
  )
 }
 export default Player;