 
 import classes from './Player.module.scss';
 import {H1} from './../../../Components/Typography/Typography';
import Domino from '../Domino/Domino';
import { useEffect, useState } from 'react';
 let Player=(props)=>{
  let [ShouldShowDominos,setShouldShowDominos]=useState(false);
  useEffect(()=>{
    debugger;
    if(props.dominos !=undefined){
      setShouldShowDominos(true);
    }
  },[])
  if(props.id<=Number(props.ammountOfPlayers)){
    if(props.id==3 || props.id==4){
      return(
        <div className={classes.Player + ' ' + classes.vertical}>
            {ShouldShowDominos &&  props.dominos.map((domino)=>{return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"vertical"}/>})}
        </div>
      )
    }
    return(
      <div className={classes.Player}>
        {ShouldShowDominos &&  props.dominos.map((domino)=>{return <Domino rearDots={domino[0]} frontDots={domino[1]} />})}
      </div>
    )
  }
  return(
    <div></div>
  )
 }
 export default Player;