
import { useRef, useState } from 'react';
import classes from './Table.module.scss';
import { useEffect } from 'react';
import DominoClasses from './../Domino/Domino.module.scss';
import Domino from '../Domino/Domino';
import getAmountOfElsInTiers from './../../../Helpers/getAmountOfElsInTiers';
import Tier from './Tier/Tier';
import {P} from './../../../Components/Typography/Typography'

let Table=(props)=>{

  const [tiers, setTiers] = useState([])

  let domino=useRef();
  let table=useRef();
  let tier=useRef();
  
  useEffect(()=>{
    let TiersHtml=[];
    if(TiersHtml.length==0){
      let maxWidth=table.current.style.maxWidth;
      let maxWidthValue=Number(maxWidth.substr(0,maxWidth.length-2));
      let Tiers= getAmountOfElsInTiers(maxWidthValue,props.dominos.length,75,2);
      let index=0;
      for(let i=0;i<Tiers.length;i++){
        let TierHtml=[];
        for(let ii=0;ii<Tiers[i];ii++){
          TierHtml.push(props.dominos[index]);
          index=index+1;
        }
        TiersHtml.push(TierHtml);
      }

      setTiers(TiersHtml)
      
    }
  },[props.dominos])

  return(
    <div ref={table} style={{maxWidth: 800 + 'px'}} className={classes.Table}>
      {tiers.map((T,index)=>{
        if(index %2==0){
          return <Tier>
            {T.map((D,iindex)=>{
                if(iindex ==T.length-1){
                  return <Domino rearDots={D[0]} frontDots={D[1]}/>
                }
                if(D[0]==D[1]){
                  console.log(D)
                  return <Domino rearDots={D[0]} frontDots={D[1]} direction={"double"}/>
                }
                return <Domino rearDots={D[0]} frontDots={D[1]} direction={"vertical"}/>

             })}
          </Tier>
        } else {
          return <Tier direction={"toLeft"}>
             {T.map((D,iindex)=>{
                if(iindex ==T.length-1){
                  return <Domino rearDots={D[0]} frontDots={D[1]}/>
                }
                if(D[0]==D[1]){
                  return <Domino rearDots={D[0]} frontDots={D[1]} direction={"double"}/>
                }
                return <Domino rearDots={D[0]} frontDots={D[1]} direction={"vertical"}/>

             })}
          </Tier>
        }
      })}
    </div>
  )
}
export default Table;