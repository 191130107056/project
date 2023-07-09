let arr  =[5,2,6,3,4];
let count = 0;
let bob = Math.max(...arr);

function newArr(){
    count++;
    for(let i=0; i< arr.length ; i++){
        if(arr[i] === bob){
            arr.splice(i);
            newArr();
            break;
        }
    }
}

for(let i=0;i<arr.length ; i++){
    if(arr.length !== 1){
        newArr();
    }
}

if(count%2 !== 0){
    console.log("WINNER IS ANDY");
}else{
    console.log("WINNER IS BOB");
}