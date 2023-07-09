const checkWinner = (n,m) => {
    console.log("total tower(n) : ",n);
    console.log("tower's Height(m) : ",m);
        if(m===1 || n%2 === 0){
            return 2
        }else {
            return 1
        }
}

console.log(checkWinner(2,2))
console.log(checkWinner(1,4))