
function calSalary(salary,n) {
    if(n <= 1 ){
        return salary;
    }
    return calSalary(salary,n-1) + 0.1 *  calSalary(salary,n-1) 
}

// console.log(calSalary(1000,3));






function calSalaryFor(salary2,n) {
    for(let i = 2;i<=n;i++) {
        salary2+= salary2*0.1;
    }
    return salary2;
}
// calSalaryFor(1000,2)