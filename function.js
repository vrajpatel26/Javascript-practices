//  function data(a,b){
//     console.log(`${a}+${b} = ${a+b}`);
//     console.log(`${a}*${b} = ${a*b}`);

// }
// data(2,3)


//calculator

/* const calculator = (num1, num2, operator) => {

    switch (operator) {
        case '+': console.log(`${num1}+${num2} = ${num1 + num2}`);
            break;
        case '-': console.log(`${num1}-${num2} = ${num1 - num2}`);
            break;
        case '*': console.log(`${num1}*${num2} = ${num1 * num2}`);
            break;
        case '/': console.log(`${num1}/${num2} = ${num1 / num2}`);
            break;
        default: console.log('error !!')
    }
}
calculator(10, 0, '/') */


//reverse string 

/* const reverse = (str) =>{

    let reverse = " "
    for(let idx = str.length-1 ; idx >= 0  ; idx--){
        
        reverse = reverse + str[idx] 
    }
    return reverse;
}
console.log(reverse("vraj patel")); */



//check palindrom or not 

/* const palindrom = (str) => {

    let reverse = ""
    for (let idx = str.length - 1; idx >= 0; idx--) {

        reverse = reverse + str[idx];
    }
    if (str === reverse) {
        return true;
    }
    else {
        return false;
    }
};
// console.log(palindrom("vraj patel"));
console.log(palindrom("level")); */
