const friends = ["vraj","viraj","radhe","hardik","parv"]

// --------indexOf - give the index number of element ---------

/*
console.log(friends.indexOf("hardik")); //3

console.log(friends.indexOf("hardik",6)); // -1 bcz it check idx value 6 and go next but the hardik is placed befor idx 6.
*/



//--lastIndexOf()-return last index in case of same value


const fruits = ["graps","banana","apple","graps","orange","chiku","dragon"]
//here graps are two times

console.log(fruits.indexOf("graps")); //0

console.log(fruits.lastIndexOf("graps"));//3 - return last index of graps

console.log(fruits.lastIndexOf("graps",5));





//---------include method - return true/false - element available or not

/*
console.log(friends.includes("hardik")); //true

console.log(friends.includes("henil")); //false
*/




