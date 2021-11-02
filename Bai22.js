
function sum (money,rate,n=0) {
   if (money==money*rate/100*n) {
        return n;
    }
    return sum (money,rate,n+1);
}
// console.log(sum (1000,5))









function callMonth(money,rate){
    var n = 0 ;
    while (money!==money*rate/100*n) {
        n++;
    }
    // console.log(n)
}
callMonth(1000,5)

