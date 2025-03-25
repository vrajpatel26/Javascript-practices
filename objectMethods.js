const dept ={
    id: 1001,
    name:"Vraj",
    area:"D-block",
    field:"CS",
    salary:"40000"
}

//----------------Object.keys():- returns keys of object

let keys = Object.keys(dept)

console.log(keys); //[ 'id', 'name', 'area', 'field', 'salary' ]


//-----------------Object.values() :- return values of object

let values = Object.values(dept)

console.log(values);//[ 1001, 'Vraj', 'D-block', 'CS', '40000' ]


//------------------Object.enries():-return an array contains key-values pair of object

let entries = Object.entries(dept)

console.log(entries);

/*[
    [ 'id', 1001 ],
    [ 'name', 'Vraj' ],
    [ 'area', 'D-block' ],
    [ 'field', 'CS' ],
    [ 'salary', '40000' ]
 ] */
  

//-----------------Object.hasOwnProperty() :- return true if specified property availble else false.

console.log(Object.hasOwnProperty("name"));//true

console.log(Object.hasOwnProperty("deptId")); //false

console.log(Object.hasOwnProperty("CS")); //false



//------------------Object.assign() :- assign new date into existing data

const box1 = {a:1 , b:2}
const box2 = {b:3 , c:4}

const mergedBox = Object.assign(box1,box2)

console.log(mergedBox); //{ a: 1, b: 3, c: 4 } 
// here b is 2 times so , new b override exsting b.

//----------

const box3= {a:1 , b:2}
const box4 = {c:3 , d:4}

const mergedBox1 = Object.assign(box3,box4)

console.log(mergedBox1); //{ a: 1, b: 2, c: 3, d: 4 }



//-----------------Object.freeze():- used for not change or delete exsting data of object

Object.freeze(dept)
dept.id="2345"
console.log(dept); //id is not changed bcz we are used freeze.
