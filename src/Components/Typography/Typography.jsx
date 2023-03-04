
import classes from './Typography.module.scss';
import logo from './../../Images/domino-logo.svg';
export let H1=(props)=>{
  return(
    <h1 className={classes.H1}>{props.children}</h1>
  )
}
export let H2=(props)=>{
  return(
    <h2 className={classes.H2}>{props.children}</h2>
  )
}
export let Logo=()=>{
  return(
    <img className={classes.logo} src={logo}/>
  )
}
export let P=(props)=>{
  switch(props.size){
    case 'large':
      return <p className={classes.P+ ' ' + classes.large}>{props.children}</p>
    case "small":
      return <p className={classes.P+ ' ' + classes.small}>{props.children}</p>
    default:
      return <p className={classes.P}>{props.children}</p>
  }
}