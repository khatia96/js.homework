let numbers = [15,16,17,18,19,20];

for(let i=0; i<=numbers.length; i++){
    if(i%2 == 0)
    console.log(numbers[i])
}


for(let i=0; i<=numbers.length; i++){
    if(i%2 !== 0)
    console.log(numbers[i])
}

let kentiArray = [];
let luwiArray = [];


for( let i = 0; i<=numbers.length; i++ ){
   if(i % 2 == 0){
        kentiArray.push(numbers[i])
    }
   else{luwiArray.push(numbers[i])}
}
console.log(kentiArray,luwiArray)


let sum = 0;
let array = [15,16,17,18,19,20];

for (let i=0; i<array.length; i++){
   sum += array[i]
   console.log(sum/array.length)
}