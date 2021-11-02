var salary = 1000;
function calSalary(n) {
    if (n>1) {
        salary +=salary*0.1;
        calSalary(n-1);
    }
}
calSalary(3);
// console.log(salary);





function calSalaryFor(n) {
    var salary =  1000;
    for(let i = 2;i<=n;i++) {
        salary+= salary*0.1;
    }
    console.log(salary);
}
// calSalaryFor(2)