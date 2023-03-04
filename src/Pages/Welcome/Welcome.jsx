import Container from "../../Components/layout/Container";
import { H1,P } from "../../Components/Typography/Typography";
import classes from './Welcome.module.scss';
import { useForm } from "react-hook-form";
import { ButtonWithText } from "../../Components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { URLs } from "../../App";
let Welcome=(props)=>{
  let navigate=useNavigate();
  const  {
    register,
    formState:{
      errors
    },
    handleSubmit
  } = useForm()
  const onSubmit=(data)=>{
    console.log(data)
    navigate(URLs.game,{
      state:data
    })
  }
  return(
    <Container>
      <H1>Domino</H1>
      <form  onSubmit={handleSubmit(onSubmit) }>
        <div className={classes.Item}>
          <P>How many players</P>
          <select  {...register('f')}>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        </div>
        <ButtonWithText>Play</ButtonWithText>
      </form>

    </Container>
  )
}
export default Welcome;