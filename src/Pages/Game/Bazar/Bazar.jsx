
import { ButtonWithText } from "../../../Components/Buttons/Buttons";
import classes from "./Bazar.module.scss";
import { useState } from 'react';
import Popup from "../../../Components/Popup/Popup";
let Bazar=(props)=>{
  let [shouldShowPopup,setShouldShowPopup]=useState(false);
  let dominos=props.dominos.map((D)=>{})
  return(
    <div className={classes.Bazar}>
      <ButtonWithText onClick={()=> setShouldShowPopup(!shouldShowPopup)}>Bazar</ButtonWithText>
      {shouldShowPopup && <Popup></Popup>}
    </div>
  )
}
export default Bazar;