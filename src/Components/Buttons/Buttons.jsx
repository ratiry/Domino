import classes from './Buttons.module.scss';


export  let ButtonWithIcon=(props)=>{
  return (
    <button className={classes.button_with_icon} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
  )
}
export let ButtonWithText=(props)=>{
  return(
    <button className={classes.button_with_text} disabled={props.disabled} onClick={props.onClick}><p>{props.children}</p></button>
  )
}