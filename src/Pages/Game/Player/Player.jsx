 
 import classes from './Player.module.scss';
 import {H1, P} from './../../../Components/Typography/Typography';
import Domino from '../Domino/Domino';
import { useEffect, useState } from 'react';
 let Player=(props)=>{
  let [ShouldShowDominos,setShouldShowDominos]=useState(false);
  let [IsPlayersMove,setIsPlayersMove]=useState(false);
  useEffect(()=>{
    if(props.dominos !==undefined){
      setShouldShowDominos(true);
    }
  },[props.dominos])
  useEffect(()=>{

    if(props.currentPlayer != undefined & props.NumberSequence !=undefined){
      debugger;
      if(props.currentPlayer == props.NumberSequence){
        setIsPlayersMove(true);
      }
    }

  },[props.currentPlayer])
  if(props.id<=Number(props.ammountOfPlayers)){
    if(props.id==3 || props.id==4){
      return(
        <div className={classes.Player + ' ' + classes.vertical}>
            {IsPlayersMove && <P>Moves</P>}
            {ShouldShowDominos &&  props.dominos.map((domino)=>{return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"vertical"}/>})}
        </div>
      )
    }
    return(
      <div className={classes.Player}>
        {IsPlayersMove && <P>Moves</P>}
        {ShouldShowDominos &&  props.dominos.map((domino)=>{return <Domino rearDots={domino[0]} frontDots={domino[1]} />})}
      </div>
    )
  }
  return(
    <div></div>
  )
 }
 export default Player;