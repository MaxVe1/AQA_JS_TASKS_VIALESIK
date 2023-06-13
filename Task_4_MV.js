function arrx3(arr){

    //console.log(arr.filter(n => n%3 === 0).filter(n=> n!=0))
    return arr.filter(n => n%3  === 0).filter(n=> n!=0);
}


console.log(arrx3([0,1,2,3]));

console.log(arrx3([1,3,6,9]));

console.log(arrx3([111,100,21,0]));