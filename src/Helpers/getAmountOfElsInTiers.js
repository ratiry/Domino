
const getTierLength=(dominoWidth,margin,maxWidth,)=>{
  let FullDominoLength=dominoWidth+margin;
  let TierWidth=0;
  let shouldStop=true;
  let length=0;
  while(shouldStop){
    if(TierWidth+FullDominoLength>maxWidth){
      shouldStop=false;
    }else{
      TierWidth=TierWidth+FullDominoLength;
      length=length+1;
    }
  }
  return [TierWidth,length];
}

const getAmountOfElsInTiers=(maxWidth,dominosLength,dominoWidth,margin)=>{
  let [TierWidth, LengthTier]=getTierLength(dominoWidth,margin,maxWidth);
  let dominosWidth=dominosLength*dominoWidth+(dominosLength)*margin ;
  let Tiers=[];
  while(dominosWidth>0){
    if(dominosWidth>maxWidth){
      Tiers.push(LengthTier);
      dominosWidth=dominosWidth-TierWidth;
    }else{
      if(dominosWidth>TierWidth){
        Tiers.push(LengthTier);
        dominosWidth=dominosWidth-TierWidth;
      }else if(dominosWidth>0){
        Tiers.push(dominosWidth/(dominoWidth+margin));
        dominosWidth=0;
      }
    }
  }
  
  return [Tiers,LengthTier];
}
const getNumberTiers=(maxWidthValue,dominos)=>{
  let tiersArr = [];
  let [tiers,fullLengthTier] = getAmountOfElsInTiers(maxWidthValue,dominos.length,75,2);
  let index = 0;
  for(let i = 0; i < tiers.length; i++){
    let tier = [];
    for(let ii = 0; ii < tiers[i]; ii++){

        tier.push(dominos[index]);        

      
 
      
      index = index + 1;
    }
    tiersArr.push(tier);
  }
  debugger;
  return [tiersArr,fullLengthTier];
}
export default getNumberTiers;