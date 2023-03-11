
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
  if(!props.areFutureDominosVisible & props.areFutureDominosVisible!=undefined){
    switch(props.direction){
      case "vertical":
       return  <div  ref={props.ref} className={classes.Domino + ' ' + classes.vertical + " " + classes.inVisible}></div>
      default:
       return <div  ref={props.ref} className={classes.Domino + ' ' + classes.inVisible}></div>
    }
  }
  switch(props.direction){
    case "vertical":

      return(
        <div ref={props.ref} className={classes.Domino + ' ' + classes.vertical}>
          {!props.isFutureDomino?<>
            <HalfDomino dots={props.rearDots}/>
          <div className={classes.line}></div>
          <HalfDomino dots={props.frontDots}/></>:<div className={classes.futureDomino}></div>}
        </div>
        )  
    default:
      return(
        <div ref={props.ref} className={classes.Domino}>
            {!props.isFutureDomino?<>
            <HalfDomino dots={props.rearDots}/>
          <div className={classes.line}></div>
          <HalfDomino dots={props.frontDots}/></>:<div className={classes.futureDomino}></div>}
        </div>
      )
  }

 }
 export default Domino;