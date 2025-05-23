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

/*
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

let result4 = text.match(/VRAJ/gi) //used i for ignore case sensitive
console.log(result4); //[ 'vraj', 'vraj' ]
*/





//------------matchAll() - return iterator of all matches & empty iterator if doesn't match.


/*
let text = "vraj patel , my nick name is vraj"

let result = text.matchAll("VRAJ");
console.log(result); //return empty iterator if doesn't match
//Object [RegExp String Iterator] {}


let result2 = text.matchAll("vraj")
// console.log(...result2); 

//----------or----------

for(items of result2){
    console.log(items);
    
}
/*output : [
    'vraj',
    index: 0,
    input: 'vraj patel , my nick name is vraj',
    groups: undefined
  ] [
    'vraj',
    index: 29,
    input: 'vraj patel , my nick name is vraj',
    groups: undefined
  ]*/ 


// -------------includes() - return true if availble else false

/*
let text = "vraj patel , my nick name is vraj"

let result = text.includes("vraj")
console.log(result); //true

let result2 = text.includes("vr")
console.log(result2); //true

let result3 = text.includes("vrj")
console.log(result3);//false
*/



//--------startsWith()----- chech word is tarting point or not

/*
let text = "vraj patel , my nick name is vraj"

let result = text.startsWith("vrja");
console.log(result); //false

let result2 = text.startsWith("Vraj");
console.log(result2); //false

let result3 = text.startsWith("vraj");
console.log(result3); //true

let result4 = text.startsWith("vraj" ,29 )
console.log(result4); //true
*/



//----------------endsWith()----------------

/*
let text = "vraj patel , my nick name is vraj"

let result = text.endsWith("vra")
console.log(result);//false

let result2 = text.endsWith("raj")
console.log(result2);//true

let result3 = text.endsWith("Vraj")
console.log(result3);//false
*/

// ------------------End of Search methods -------------


//-------------slice()- return the extracted part of string

/*
let text = "vraj patel"

let result = text.slice(0,4) // starting with idx 0 & ends with idx 3( idx 4 is excluded)
console.log(result);//vraj

let result2 = text.slice(5)
console.log(result2);//patel
*/


//---------substring()- same as slice() method . difference is that lessthan 0 value treated as 0 value.

/*
let text = "vraj patel"

let result = text.substring(5)
console.log(result); //patel

//differnce between slice and substring method.

let result2 = text.substring(-5)
console.log(result2); //vraj patel


let result3 = text.slice(-5)
console.log(result3); //patel  (starting -1 from last index & goinf left side)
*/

// -------------------- charAt() ---------------------
//charAt doesn't ssupport (-).

/*
let text = "vraj patel"

let result = text.charAt(3);
console.log(result);//j

let result2 = text.charAt(-3);
console.log(result2); //no output
*/


//-----------------At----------------
// it support (-)
/*
let text = "vraj patel"

let result = text.at(-3);
console.log(result); //t
*/


//--------------replcae----------

/*
let text = "vraj patel"
 
let result = text.replace("patel","bhai")
console.log(result); //vraj bhai


let text2 = "hello vraj , how are you vraj !"

let result2 = text2.replace("vraj","maurya");
console.log(result2); //hello maurya , how are you vraj !

let result3 = text2.replace(/vraj/g,"maurya");
console.log(result3);//hello maurya , how are you maurya !
*/



//---------------trim - removes whitespace from both ends of string

/*
let text = "  hello , vraj   ";

console.log(text.length); //17

let result = text.trim();
console.log(result);//hello , vraj
console.log(result.length);//12
*/



//-------------split()-convert into array


let text = "apple , orange , graps";

let result = text.split(",");
console.log(result); //[ 'apple ', ' orange ', ' graps' ]

let result2 = text.split(",").reverse();
console.log(result2); //[ ' graps', ' orange ', 'apple ' ]

let result3 = text.split();
console.log(result3);//[ 'apple , orange , graps' ]

let result4 = text.split(",").reverse().join(); //join used for covert into string
console.log(result4);// graps, orange ,apple


