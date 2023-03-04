
import classes from './Container.module.scss';
let Container=(props)=>{
  return(
    <div className={classes.Container}>
       {props.children}
    </div>
  )
}
export default Container;