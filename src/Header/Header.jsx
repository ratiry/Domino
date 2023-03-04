import Container from "../Components/layout/Container";
import classes from './Header.module.scss';
import logo  from './../Images/domino-logo.svg';
let Header=(props)=>{
  return(
    <header className={classes.Header_container}>
      <Container>
      <div className={classes.inner_Container}>
      <img src={logo}/>
        <p>CrossZeroGames</p>
      </div>
      </Container>
    </header>
  )
}
export default Header;