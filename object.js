
const person = {
    name : "vraj",
    surname : "patel",
    height : 5.3,
    weight : 70,
    "is'student" : true,
    greet: function() {
        console.log("i am function"); 
    }
}

console.log(person.height);//5.3
console.log(person["height"]);//5.3

console.log(person.weight);//70
person.greet() //i am function

// console.log(person."is'student"); // X-wrong

console.log(person["is'student"]);
