
import { useRef } from 'react';
import classes from './Table.module.scss';
import { useEffect } from 'react';
import DominoClasses from './../Domino/Domino.module.scss';
import Domino from '../Domino/Domino';
import GetammountOfElsInTiers from './../../../Helpers/GetammountOfElsInTiers';
import Tier from './Tier/Tier';
import {P} from './../../../Components/Typography/Typography'
let Table=(props)=>{

  let domino=useRef();
  let table=useRef();
  let TIER=useRef();
  let TiersHtml=[];
  useEffect(()=>{
    if(TiersHtml.length==0){
      let maxWidth=table.current.style.maxWidth;
      let maxWidthValue=Number(maxWidth.substr(0,maxWidth.length-2));
      let Tiers= GetammountOfElsInTiers(maxWidthValue,props.dominos.length,75,2);
      let index=0;
      for(let i=0;i<Tiers.length;i++){
        let TierHtml=[];
        for(let ii=0;ii<Tiers[i];ii++){
          TierHtml.push(props.dominos[index]);
          index=index+1;
        }
        TiersHtml.push(TierHtml);
      }
      
       TiersHtml=TiersHtml.map((T,index)=>{
        if(index %2==0){
          return <Tier>
            {T= T.map((D,iindex)=>{
                if(iindex ==T.length-1){
                  return <Domino rearDots={D[0]} frontDots={D[1]}/>
                }
                if(D[0]==D[1]){
                  return <Domino rearDots={D[0]} frontDots={D[1]} direction={"double"}/>
                }
             })}
          </Tier>
        }else{
          return <Tier direction={"toLeft"}>
             {T= T.map((D,iindex)=>{
                if(iindex ==T.length-1){
                  return <Domino rearDots={D[0]} frontDots={D[1]}/>
                }
                if(D[0]==D[1]){
                  return <Domino rearDots={D[0]} frontDots={D[1]} direction={"double"}/>
                }
             })}
          </Tier>
        }
      })
      debugger;
    }
    debugger;
  },[props.dominos])
  return(
    <div  ref={table} style={{maxWidth: 800 + 'px'}} className={classes.Table}>
        {TiersHtml}
        <Tier>
          <Domino rearDots={1} frontDots={0} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} direction={"vertical"}/>
          <Domino rearDots={1} frontDots={0} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} direction={"vertical"}/>
          <Domino rearDots={1} frontDots={0} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} direction={"vertical"}/>
          <Domino rearDots={1} frontDots={0} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} direction={"vertical"}/>
          <Domino rearDots={1} frontDots={0} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} />
        </Tier>
        <Tier direction={"toLeft"}>
         <Domino rearDots={1} frontDots={6} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} direction={"vertical"}/>
          <Domino rearDots={1} frontDots={0} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} direction={"vertical"}/>
          <Domino rearDots={1} frontDots={0} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} direction={"vertical"}/>
          <Domino rearDots={1} frontDots={0} direction={"vertical"}/>
          <Domino rearDots={0} frontDots={1} direction={"vertical"}/>
          <Domino rearDots={1} frontDots={5} direction={"vertical"}/>
          <Domino rearDots={6} frontDots={6} />
        </Tier>

    </div>
  )
}
export default Table;