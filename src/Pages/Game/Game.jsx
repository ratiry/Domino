import { useLocation } from "react-router-dom";
import Bazar from "./Bazar/Bazar";
import classes from './Game.module.scss';
import Player from "./Player/Player";
import Table from "./Table/Table";
import { useEffect,useState } from "react";
import generateDominos from './../../Helpers/GenerateDomios';
import MakeSequence from './../../Helpers/MakeSequence';
import PickFirstPlayer from './../../Helpers/PickFirstPlayer';
let Game=(props)=>{
  let location=useLocation();
  let [dominos,setDominos]=useState([])
  let [TableDominos,setTableDominos]=useState([]);
  let [areFutureDominosVisible,setAreFutureDominosVisible]=useState(false);
  let [PlayersDominos,setPlayersDiminos]=useState([]);
  let [currentPlayer,setCurrentPlayer]=useState(0);
  let [sequence,setSequence]= useState([]);
  useEffect(()=>{
    let [remainingDominos,PlayersDominos]= generateDominos(Number(location.state.ammountOfPlayers));
    setPlayersDiminos(PlayersDominos);
    setDominos(remainingDominos);
    setSequence(MakeSequence(Number(location.state.ammountOfPlayers)));
    setCurrentPlayer(PickFirstPlayer(PlayersDominos));
  },[])


  return(
    <div className={classes.Game_grid}>
      <Bazar dominos={dominos}/>
      <Player dominos={PlayersDominos[1]} currentPlayer={currentPlayer} NumberSequence={sequence[2]} ammountOfPlayers={location.state.ammountOfPlayers} id={2}  />
      <div></div>
      <Player dominos={PlayersDominos[2]} currentPlayer={currentPlayer}  NumberSequence={sequence[1]} ammountOfPlayers={location.state.ammountOfPlayers} id={3}  />  
      <Table areFutureDominosVisible={areFutureDominosVisible} dominos={TableDominos}/>
      <Player dominos={PlayersDominos[3]} currentPlayer={currentPlayer} NumberSequence={sequence[3]} ammountOfPlayers={location.state.ammountOfPlayers} id={4}  />
      <div className={classes.Stats}></div>
      <Player dominos={PlayersDominos[0]} currentPlayer={currentPlayer} NumberSequence={sequence[0]} ammountOfPlayers={location.state.ammountOfPlayers} id={1}  />
      <div></div>
    </div>
  )
}
export default Game;