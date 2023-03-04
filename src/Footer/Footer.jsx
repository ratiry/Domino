
import Container from '../Components/layout/Container';
import  classes  from './Footer.module.scss';
import logo from './../Images/domino-logo.svg';
let Footer=(props)=>{
  return(
    <footer className={classes.Footer}>
      <Container>
        <img src={logo}/>
      </Container>
    </footer>
  )
}
export default Footer;