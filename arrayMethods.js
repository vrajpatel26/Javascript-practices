const person = ["vraj","viraj","radhe","hardik"]

/*
//---------------push() - add element in last-------------
person.push("manav")

// console.log(person.push("manav")); //5

console.log(person);
//[ 'vraj', 'viraj', 'radhe', 'hardik', 'manav' ]

*/



/*
//--------------pop() - remove last element ------------------

person.pop();

// console.log(person.pop()); //hardik
console.log(person);

//[ 'vraj', 'viraj', 'radhe' ]

*/


/*

// ----------unshift() - add element at starting ----------------

person.unshift("maitra")
//console.log(person.unshift("maitra")); //5

console.log(person);
//[ 'maitra', 'vraj', 'viraj', 'radhe', 'hardik' ]

*/


/*

//-------------shift()-remove element form starting--------------

person.shift()
//console.log(person.shift()); //vraj

console.log(person);
//[ 'viraj', 'radhe', 'hardik' ]

*/




//-------splice(start,deleteCount,add-item) - used for add/remove in array-------------

/*
person.splice(1,1); // remove index-1 element
console.log(person); 
//[ 'vraj', 'radhe', 'hardik' ]
*/

/*
person.splice(1,1,"maurya"); // remove index-1 element & add maurya at index-1
console.log(person);  
//[ 'vraj', 'maurya', 'radhe', 'hardik' ]
*/

/*
person.splice(person.length,0,"jatan") // go to last element & nothing dekete & add jatan
console.log(person);
// [ 'vraj', 'viraj', 'radhe', 'hardik', 'jatan' ]
*/

person.splice(1,0,"kuldip") // go to 1st index & nothing delete & add kuldip 
console.log(person);
//[ 'vraj', 'kuldip', 'viraj', 'radhe', 'hardik' ]

