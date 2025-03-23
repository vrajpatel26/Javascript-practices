// pass by value :- Any change made to copy does not affect the original data

let a = 100;

const modifyValue = (x) => x = 50

console.log(modifyValue(a));//50
console.log(a);//100


// pass By Reference :- Any change made to copy does  affect the original data

let obj = {
    name:"vraj",
    surname:"patel"
}

let obj1 = obj;
obj1.name = "viraj"

console.log(obj1); //{ name: 'viraj', surname: 'patel' }
console.log("original :",obj); // original : { name: 'viraj', surname: 'patel' }


// if you want thay does not affect original data then you have to use Object.assign() OR spread(...) operator.

let newObj = {
    name:"hardik",
    surname:"patel"
}

let newObj1 = Object.assign({},newObj)

newObj1.name = "Parv"

console.log(newObj1); //{ name: 'Parv', surname: 'patel' }
console.log("original :",newObj); //original : { name: 'hardik', surname: 'patel' }


// ---------------------------------------------

//independent objects are not queal
//two objects are only euqal when it refer to same object

const obj4 = { name:"vraj"}
const obj5 = { name:"vraj"}

const obj6 = obj5 

const checkEqual = obj4 === obj5 ? true : false;
console.log(checkEqual); //false

const checkEqual1 = obj5 === obj6 ? true : false;
console.log(checkEqual1); //true