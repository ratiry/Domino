
let getTierLength=(dominoWidth,margin,maxWidth,)=>{
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

let getAmountOfElsInTiers=(maxWidth,dominosLength,dominoWidth,margin)=>{
  let [TierWidth, LengthTier]=getTierLength(dominoWidth,margin,maxWidth);
  let dominosWidth=dominosLength*dominoWidth+(dominosLength)*margin;
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
  return Tiers;
}
export default getAmountOfElsInTiers;