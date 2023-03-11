import { useLocation } from "react-router-dom";
import classes from './Game.module.scss';
import Player from "./Player/Player";
import Table from "./Table/Table";
let Game=(props)=>{
  let location=useLocation();
  let dominos=[
    [1,2],
    [2,3],
    [3,3],
    [3,6],
    [6,6],
    [5,3],
    [1,2],
    [2,3],
    [3,3],
    [3,6],
    [6,6],
    [2,3],
    [3,3],
    [3,6],
    [6,6],
    [5,3],
    [1,2],
    [2,3],
    [3,3],
    [3,6],
    [6,6],
    [5,3],
    [1,2],
    [2,3],
    [3,3],
    [3,6],
    [6,6],
    [2,3],
    [3,3],
    [3,6],
    [6,6],
    [5,3],    [1,2],
    [2,3],
    [3,3],
    [3,6],
    [6,6],
    [5,3],
    [1,2],
    [2,3],

  ]
  return(
    <div className={classes.Game_grid}>
      <div className={classes.Bazar}></div>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={2}  />
      <div></div>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={3}  />  
      <Table dominos={dominos}/>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={4}  />
      <div className={classes.Stats}></div>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={1}  />
      <div></div>
    </div>
  )
}
export default Game;