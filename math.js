
/*
const piValue = Math.PI ;
console.log(piValue); //3.141592653589793
*/

//---- abs() - return nuber that indiacate how far the number is from 0.

/*
console.log(Math.abs(5));//5
console.log(Math.abs(-3));//3
*/

// ------- Math.round() - rounds a number to the nearest intiger.

/*
const number = Math.round(3.4)
console.log(number); //3

const number2 = Math.round(3.5)
console.log(number2); //4

const number3 = Math.round(3.7)
console.log(number3); //4
*/




//---------Math.ceil() - return the +1 value of given number
//undestand as ghar ki chattt

/*
const number = Math.ceil(3.7)
console.log(number); //4

const number3 = Math.ceil(4.2)
console.log(number3); //5
*/


//-----------Math.floor() - return the value befor point(.)
//understand as ghar ka floor 


/*
const number = Math.floor(3.7)
console.log(number); //3

const number2 =  Math.floor(4.01)
console.log(number2) //4

const number4 = Math.floor(-3.7)
console.log(number4); //-4 
*/


// ------Math.trunc() - return same integer value 
/*
const number = Math.trunc(3.7)
console.log(number); //3

const number2 = Math.trunc(-3.7)
console.log(number2); //-3

//trunc() and floor are most of same but difference is :- 
// floor gives smallest value

const number3 = Math.trunc(-3.7)
console.log(number3); //-3

const number4 = Math.floor(-3.7)
console.log(number4); //-4 
*/





//---------Math.pow(x,y) ;- return the value of x to the power of y.

/*
const number = Math.pow(2,3);
console.log(number); //8

//nowdays we use this method 
console.log(2**3); //8
*/




//-------Math.sqrt() - return the square root of x


//console.log(Math.sqrt(25)); //5



//-----------Math.log(x) - return the logarithm of x.

/*
console.log(Math.log(100)); //4.6051

console.log(Math.log2(100)); //6.6438


console.log(Math.log10(100)); //2
*/


//----------Math.random()- return the random value between 0(include) & 1(exclusive).

console.log(Math.random());

console.log(Math.random() * 100); // 0 to 100

console.log(Math.floor(Math.random() * 100)); // 0-100 wihtout decimal

console.log((Math.random()*100).toFixed(2)); //0-100 with 2 decimal value like 44.99








