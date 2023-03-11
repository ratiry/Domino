
import { useRef, useState } from 'react';
import classes from './Table.module.scss';
import { useEffect } from 'react';
import DominoClasses from './../Domino/Domino.module.scss';
import Domino from '../Domino/Domino';
import getNumberTiers from './../../../Helpers/getAmountOfElsInTiers';
import Tier from './Tier/Tier';
import {P} from './../../../Components/Typography/Typography'
import addElementsTostartAndEnd from './../../../Helpers/AddElementsTostart&end';

const Table=(props)=>{
  debugger;
  const [tiers, setTiers] = useState([])
  let [areFutureDominosVisible,setAreFutureDominosVisible]=useState(props.areFutureDominosVisible);
  let table=useRef();
  let [fullLengthTier,setFullLengthTier]=useState(0);
  useEffect(()=>{
    const maxWidth = table.current.style.maxWidth;
    const maxWidthValue = Number(maxWidth.substr(0,maxWidth.length-2));
    let dominos=[...props.dominos];
    dominos = addElementsTostartAndEnd(props.dominos,["futureDomino"]);
    let [tiersArr,fullLengthTier] =getNumberTiers(maxWidthValue,dominos);
    setTiers(tiersArr)
    setFullLengthTier(fullLengthTier);
  },[props.dominos])

  return(
    <div ref={table} style={{maxWidth: 800 + 'px'}} className={classes.Table}>
      {tiers.map((tier,i)=>{
        if(i%2 == 0){
          return <Tier>
            {tier.map((domino, ii)=>{
              if(ii == tier.length-1 & ii==fullLengthTier-1){
                if(domino[0]==="futureDomino"){
                  return  <Domino areFutureDominosVisible={areFutureDominosVisible} isFutureDomino={true} />
                }
                return <Domino rearDots={domino[0]} frontDots={domino[1]}/>
              }
              if(domino[0]==="futureDomino"){
                return  <Domino direction={"vertical"} areFutureDominosVisible={areFutureDominosVisible} isFutureDomino={true} />
              }
              // if(domino[0] == domino[1]){
              //   return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"double"}/>
              // }
              return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"vertical"}/>

             })}
          </Tier>
        } else {
          return <Tier direction={"toLeft"}>
             {tier.map((domino, ii) => {
                if(ii == tier.length-1 & ii==fullLengthTier-1){
                  if(domino[0]==="futureDomino"){
                    return  <Domino areFutureDominosVisible={areFutureDominosVisible} isFutureDomino={true} />
                  }
                  return <Domino rearDots={domino[0]} frontDots={domino[1]}/>
                }
                if(domino[0]==="futureDomino"){
                  return  <Domino direction={"vertical"} areFutureDominosVisible={areFutureDominosVisible} isFutureDomino={true} />
                }
                // if(domino[0] == domino[1]){
                //   return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"double"}/>
                // }
                return <Domino rearDots={domino[0]} frontDots={domino[1]} direction={"vertical"}/>

             })}
          </Tier>
        }
      })}
    </div>
  )
}
export default Table;