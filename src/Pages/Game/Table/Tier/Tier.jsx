
import classes from "./Tier.module.scss";
let Tier=(props)=>{
        if(props.direction=="toLeft"){
          return(
            <div ref={props.ref} className={classes.Tier + " " + classes.toLeft }>
              {props.children}
            </div>
          )
        }
        return(
        <div ref={props.ref} className={classes.Tier  }>
          {props.children}
        </div>
      )
}
export default Tier;