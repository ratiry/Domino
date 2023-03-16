import Container from "../../Components/layout/Container";
import { H1,P } from "../../Components/Typography/Typography";
import classes from './Welcome.module.scss';
import { useForm } from "react-hook-form";
import { ButtonWithText } from "../../Components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { URLs } from "../../App";
import { useEffect, useState } from "react";
let Welcome=(props)=>{
  let navigate=useNavigate();
  let ComputerPlayers=[];
  let computerPlayersHtml=[];
  let preffiledValues={
    ammountOfPlayers:'2'
  }
  const  {
    register,
    formState:{
      errors
    },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues:preffiledValues
  })
  let watchFields = watch("ammountOfPlayers"); 
  const onSubmit=(data)=>{
    navigate(URLs.game,{
      state:data
    })
  }

  for(let i=0;i<Number(watchFields);i++){
    ComputerPlayers.push(i);
  }
  computerPlayersHtml=ComputerPlayers.map(O=>{ return <option>{O}</option>})
  window.ComputerPlayers=ComputerPlayers
  window.watchFields=watchFields;
  return(
    <Container>
      <H1>Domino</H1>
      <form  onSubmit={handleSubmit(onSubmit) }>
        <div className={classes.Items}>
          <div className={classes.Item}>
            <P>How many players</P>
            <select  name="ammountOfPlayers" {...register('ammountOfPlayers')}>
              <option >2</option>
              <option >3</option>
              <option >4</option>
          </select>
        </div>
        <div className={classes.Item}>
          <P>How many computer players</P>
          <select name="ammountOfComputerPlayers" {...register("ammountOfComputerPlayers")}>
            {computerPlayersHtml}
          </select>
        </div>
        </div>
        <ButtonWithText>Play</ButtonWithText>
      </form>

    </Container>
  )
}
export default Welcome;