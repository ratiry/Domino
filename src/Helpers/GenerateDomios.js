
const shuffle=(array)=> {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
const generatePlayersDominos=(ammountOfPlayers,dominos)=>{
  let dominosCopy=[...dominos];
  let Players=[];
  for(let i=0;i<ammountOfPlayers;i++){
    let Player=[];
    if(ammountOfPlayers>2){
      for(let ii=0;ii<5;ii++){
        Player.push(dominosCopy[dominosCopy.length-1]);
        dominosCopy.pop()
      }
    }else{
      for(let ii=0;ii<7;ii++){
        Player.push(dominosCopy[dominosCopy.length-1]);
        dominosCopy.pop()
      }
    }
    Players.push(Player);
  }
  return [dominosCopy,Players]
}
const generateDominos=(ammountOfPlayers)=>{
  let dominos=[];
  for(let i=0;i<7;i++){
    for(let ii=0;ii<7;ii++){
      let domino=[i,ii];
      dominos.push(domino)
    }
  }
  dominos=shuffle(dominos);
 let [BazarDominos,Players]=  generatePlayersDominos(ammountOfPlayers,dominos);
  dominos=BazarDominos;
  console.log(dominos);
  console.log(Players);
  return [dominos,Players]
}

export default generateDominos;