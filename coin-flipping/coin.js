
const tossCoin = ()=>{
    return Math.random()> 0.5 ? "heads" : "tails";
}

function fiveHeads(){
    return new Promise((resolve, reject)=>{
    let headsCount = 0
    let attempts = 0
    
    while(headsCount < 5&& attempts<=100){
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === 'heads'){
            headsCount++;
        }else{
            headsCount = 0;
        }
    }
    if(attempts <= 100){
        resolve(`it took ${attempts} to flip 5 heads`)
    }else{
        reject(`it hit ${attempts} and broke`)
    }})
}

fiveHeads().then(res=>console.log(res))
            .catch(err=>console.log(err))
console.log("when does this run?")


