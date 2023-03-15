import { useLocation } from "react-router-dom";
import Bazar from "./Bazar/Bazar";
import classes from './Game.module.scss';
import Player from "./Player/Player";
import Table from "./Table/Table";
import { useEffect } from "react";
let Game=(props)=>{
  let location=useLocation();
  useEffect(()=>{
  },[])
  let dominos=[
 
  ]
  let areFutureDominosVisible=true;
  
  return(
    <div className={classes.Game_grid}>
      <Bazar dominos={dominos}/>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={2}  />
      <div></div>
      <Player dominos={dominos} ammountOfPlayers={location.state.ammountOfPlayers} id={3}  />  
      <Table areFutureDominosVisible={areFutureDominosVisible} dominos={dominos}/>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={4}  />
      <div className={classes.Stats}></div>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={1}  />
      <div></div>
    </div>
  )
}
export default Game;