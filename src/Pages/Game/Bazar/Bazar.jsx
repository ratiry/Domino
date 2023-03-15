
import { ButtonWithText } from "../../../Components/Buttons/Buttons";
import classes from "./Bazar.module.scss";
import { useState, useEffect } from 'react';
import Popup from "../../../Components/Popup/Popup";
import Domino from "../Domino/Domino";
let Bazar=(props)=>{
  let [shouldShowPopup,setShouldShowPopup]=useState(false);
  let dominosHtml=[]
  if(props.dominos !==undefined){
    dominosHtml=props.dominos.map((D)=>{return <Domino isFutureDomino={true}/>});
  }
  let changeTocontrary=()=>{
    setShouldShowPopup(!shouldShowPopup);
  }
  return(
    <div className={classes.Bazar}>
      <ButtonWithText onClick={changeTocontrary}>Bazar</ButtonWithText>
      {shouldShowPopup && <Popup onClick={changeTocontrary} shouldShowPopup={shouldShowPopup} isCrossVisible={true}><div className={classes.dominosContainer}>{dominosHtml}</div> </Popup>}
    </div>
  )
}
export default Bazar;