
import { ButtonWithIcon } from '../Buttons/Buttons';
import classes from './Popup.module.scss';
import { useEffect } from 'react';
let Popup=(props)=>{
  let EscapeKey=(e)=>{
    if(e.key === "Escape"){
      props.onClick();
    }
  }
  useEffect(()=>{
    if(props.isCrossVisible){
      window.addEventListener("keydown", EscapeKey);
    }
    return () => window.removeEventListener("keydown",EscapeKey);
  },[])
  return(
    <>
    
     {props.isCrossVisible ?  <div className={classes.blackScreen} onClick={props.onClick}></div>: <div className={classes.blackScreen} ></div>}
    <div className={classes.Popup}>
      {props.isCrossVisible &&
      <div>
        <ButtonWithIcon onClick={props.onClick} >  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></ButtonWithIcon>
      </div> 
      }
      {props.children}
    </div>
    </>
  )
}
export default Popup;