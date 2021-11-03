
// function sum (money,rate) {
//     if (n<=1) {
//         return money;
//     }
//     return sum (money,rate) + money*rate*0.01;
// }
// console.log(sum (1000,5))









// function callMonth(money,rate){
//     var n = 0 ;
//     while (money>money*rate/100*n) {
//         n++;
//     }
//     return n;
// }
// console.log(callMonth(1000,5));

function callMonth(money,rate, n){
    total = money + money*(rate/100)*n
    if(total >= money*2 )
    {
     return n;
    }
  return  callMonth(money,rate, n+1)
}
console.log(callMonth(100,5, 0))
