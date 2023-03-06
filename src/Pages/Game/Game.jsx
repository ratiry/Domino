import { useLocation } from "react-router-dom";
import classes from './Game.module.scss';
import Player from "./Player/Player";
let Game=(props)=>{
  let location=useLocation();
  return(
    <div className={classes.Game_grid}>
      <div className={classes.Bazar}></div>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={2}  />
      <div></div>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={3}  />  
      <div className={classes.Table}></div>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={4}  />
      <div className={classes.Stats}></div>
      <Player ammountOfPlayers={location.state.ammountOfPlayers} id={1}  />
      <div></div>
    </div>
  )
}
export default Game;