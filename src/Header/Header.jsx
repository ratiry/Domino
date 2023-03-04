import Container from "../Components/layout/Container";
import classes from './Header.module.scss';
import logo  from './../Images/domino-logo.svg';
import { Logo, P } from "../Components/Typography/Typography";
let Header=(props)=>{
  return(
    <header className={classes.Header_container}>
      <Container>
      <div className={classes.inner_Container}>
        <Logo/>
        <P size={'small'}>Domino</P>
      </div>
      </Container>
    </header>
  )
}
export default Header;