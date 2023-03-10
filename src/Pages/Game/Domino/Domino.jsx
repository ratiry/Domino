
import classes from './Domino.module.scss';
export  let HalfDomino=(props)=>{
  // let dotsHtml= [<div className={classes.dot}></div>]*props.dots;
  switch(props.dots){
    case 0:
      return (
        <div className={classes.Half } >
        
      </div>        
      )
    case 1:
      return(
        <div className={classes.Half + ' ' + classes.one_dot} >
          <div className={classes.dot}></div>

        </div>
      )
    case 2:
      return(
        <div className={classes.Half } >
           <div className={classes.dot}></div>
           <div className={classes.dot}></div>
        </div>
      )
    case 3:
      return(
        <div className={classes.Half } >
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      )
    case 4:
      return(
        <div className={classes.Half } >
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      )
    case 5:
      return(
        <div className={classes.Half } >
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      )
    case 6:
      return(
        <div className={classes.Half} >
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      )
  }
}
 let Domino =(props)=>{
  if(props.direction ==="vertical"){
    return(
    <div ref={props.ref} className={classes.Domino + ' ' + classes.vertical}>
      <HalfDomino dots={props.rearDots}/>
      <div className={classes.line}></div>
      <HalfDomino dots={props.frontDots}/>
    </div>
    )    
  }
    return(
      <div ref={props.ref} className={classes.Domino}>
        <HalfDomino dots={props.rearDots}/>
        <div className={classes.line}></div>
        <HalfDomino dots={props.frontDots}/>
      </div>
    )
 }
 export default Domino;