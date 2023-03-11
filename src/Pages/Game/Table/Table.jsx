
import { useRef, useState } from 'react';
import classes from './Table.module.scss';
import { useEffect } from 'react';
import DominoClasses from './../Domino/Domino.module.scss';
import Domino from '../Domino/Domino';
import getAmountOfElsInTiers from './../../../Helpers/getAmountOfElsInTiers';
import Tier from './Tier/Tier';
import {P} from './../../../Components/Typography/Typography'

const Table=({dominos})=>{

  const [tiers, setTiers] = useState([])

  let domino=useRef();
  let table=useRef();
  let tier=useRef();
  
  useEffect(()=>{
    let tiersArr = [];
    const maxWidth = table.current.style.maxWidth;
    const maxWidthValue = Number(maxWidth.substr(0,maxWidth.length-2));
    let tiers = getAmountOfElsInTiers(maxWidthValue,dominos.length,75,2);
    let index = 0;
    for(let i = 0; i < tiers.length; i++){
      let tier = [];
      for(let ii = 0; ii < tiers[i]; ii++){
        tier.push(dominos[index]);
        index = index + 1;
      }
      tiersArr.push(tier);
    }

    setTiers(tiersArr)
    
  },[dominos])

  return(
    <div ref={table} style={{maxWidth: 800 + 'px'}} className={classes.Table}>
      {tiers.map((tier,i)=>{
        if(i%2 == 0){
          return <Tier>
            {tier.map((domino, ii)=>{
              if(ii == tier.length-1){
                return <Domino rearDots={domino[0]} frontDots={domino[1]}/>
              }
              if(domino[0] == domino[1]){
                return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"double"}/>
              }
              return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"vertical"}/>

             })}
          </Tier>
        } else {
          return <Tier direction={"toLeft"}>
             {tier.map((domino, ii) => {
                if(ii == tier.length-1){
                  return <Domino rearDots={domino[0]} frontDots={domino[1]}/>
                }
                if(domino[0] == domino[1]){
                  return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"double"}/>
                }
                return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"vertical"}/>

             })}
          </Tier>
        }
      })}
    </div>
  )
}
export default Table;