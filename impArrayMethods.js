const friends = ["vraj","viraj","radhe","hardik","parv"]

// --------indexOf - give the index number of element ---------

/*
console.log(friends.indexOf("hardik")); //3

console.log(friends.indexOf("hardik",6)); // -1 bcz it check idx value 6 and go next but the hardik is placed befor idx 6.
*/



//--lastIndexOf()-return last index in case of same value

/*
const fruits = ["graps","banana","apple","graps","orange","chiku","dragon"]
//here graps are two times

console.log(fruits.indexOf("graps")); //0

console.log(fruits.lastIndexOf("graps"));//3 - return last index of graps

console.log(fruits.lastIndexOf("graps",5));
*/




//---------include method - return true/false - element available or not

/*
console.log(friends.includes("hardik")); //true

console.log(friends.includes("henil")); //false
*/



// ----------Questions : ----------------
 
const months = ["jan","feb","march","april","may"]

/*
//1. add december at the end of array

months.splice(months.length , 0 , "dec")
console.log(months); 
//[ 'jan', 'feb', 'march', 'april', 'may', 'dec' ]
*/


/*
//2.update march to March.

months.splice(2,1,"March")
console.log(months);
//[ 'jan', 'feb', 'March', 'april', 'may' ]
*/


/*
//3.delete june from array.

const month = ["jan","feb","march","april","may","june","july"]

month.splice(5,1);
console.log(month);
//[ 'jan', 'feb', 'march', 'april', 'may', 'july' ]

*/




// -__-__-__-__-__-__ Filter In Array -__-__-__-__-__-__

//const number = [1,2,3,4,5,6,3,4,7,8]

/*
// 1. find method :- it returns the first matching element or undefined if element is not found.

const result = number.find((currElement)=>{

    return currElement > 4 
})
console.log(result); // 5
*/



/*
// 2.findIndex - return the index of first element or -1 if not found.

const result =  number.map((currElement)=> currElement*5 )

console.log(result);

const result2 = result.findIndex((currElement)=>{

    return currElement > 10;
})
console.log(result2);

[ 5,10,15,20,25,30,35,40,45]
 
2 // 15 is greater than 10 & index of 15 is 2. so answer s 2.
*/



//3. filter - return the array of element that matched by provided function.

/*
const numbers = [1,2,3,4,5,6,7]

const result = numbers.filter((currElement)=>{

    return currElement > 3
})
console.log(result);
//[ 4, 5, 6, 7 ]

*/

//--------------------Question of filter ---------------------

/*
// 1. in E-commerce website , user want to delete any product from addToCart page.
//lets think user want to delete 6.

const numbers = [1,2,3,4,5,6,7,8,6,9]

let value = 6
let updateCart = numbers.filter((currElement)=>{
     
    return currElement !== value ;
})
console.log(updateCart);
//[1, 2, 3, 4, 5, 7, 8, 9]
*/

//3. filter product with a price  less than or equal to 500.

const products = [
    {name : "phone" , price: 1000},
    {name : "laptop" , price: 2000},
    {name : "watch" , price: 450},
    {name : "charger" , price: 150}
]

const filterProducts = products.filter((currElement)=>{
   
    return currElement.price <=500;
})

console.log(filterProducts);




