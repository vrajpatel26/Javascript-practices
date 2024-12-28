// search methods

// ---------------- indexOf()- return index of element ------------
/*
let text = "vraj patel"

console.log(text.indexOf("v")); //0
console.log(text.indexOf("vraj")); //0
*/



//-------------Array.from()- it returns an array from any object with length property.

/*
let text = "vraj patel"

let strArray = Array.from(text)
// console.log(strArray);
//['v', 'r', 'a', 'j',' ', 'p', 'a', 't','e', 'l']

let strMap = strArray.map((currElement , index)=>
    `${currElement} - ${index}`
);

console.log(strMap);

//[ 'v - 0', 'r - 1','a - 2', 'j - 3', '  - 4', 'p - 5', 'a - 6', 't - 7','e - 8', 'l - 9' ]
*/



// -------lastIndexOf()- return index of last occurance of a specified text in string.

/*
let text = "vraj patel , my nick name is vraj"

let result = text.lastIndexOf("vraj");
let result2 = text.lastIndexOf("vraj",25) //goto left side from idx 25 , so result is 0
let result3 = text.indexOf("vraj")
console.log(result); //29
console.log(result2); //0 
console.log(result3);//0 
*/




//-------------search()- return index where first element is found.

/*
let text = "vraj patel , my nick name is vraj"

let result = text.search("Vraj")
console.log(result); //-1

let result2 = text.search(/vraj/i) //i used for ignore case sensitive  
console.log(result2); //0
*/



//------------match() - it returns an array of the matched value or null if doesn't match.


let text = "vraj patel , my nick name is vraj"

let result = text.match("Vraj");
console.log(result); //null (it doesn't give -1);


let result2 = text.match("vraj")
console.log(result2);
//[
//    'vraj',
//    index: 0,
//    input: 'vraj patel , my nick name is vraj',
//    groups: undefined
//  ]

let result3 = text.match(/vraj/g);
console.log(result3); //[ 'vraj', 'vraj' ]  


 








