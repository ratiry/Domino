
import { useRef } from 'react';
import classes from './Table.module.scss';
import { useEffect } from 'react';
import DominoClasses from './../Domino/Domino.module.scss';
import Domino from '../Domino/Domino';
import GetammountOfElsInTiers from './../../../Helpers/GetammountOfElsInTiers';
let Table=(props)=>{
  let dominos=[
   [ <Domino rearDots={6} frontDots={6} direction={"vertical"} />],
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />, 
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,   
    <Domino rearDots={6} frontDots={6} direction={"vertical"} />,   
  ]
  let table=useRef();
  useEffect(()=>{
    let maxWidth=table.current.style.maxWidth;
    let maxWidthValue=Number(maxWidth.substr(0,maxWidth.length-2));
    GetammountOfElsInTiers(maxWidthValue,dominos.length,40,2);

    
  },[])
  return(
    <div  ref={table} style={{maxWidth: 800 + 'px'}} className={classes.Table}>
        <div className={classes.tier}>
          {dominos}
        </div>
    </div>
  )
}
export default Table;