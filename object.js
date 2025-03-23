
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

// -------------------------------------------------------------

idType = "studentId"
const student = {
    idType : "22BECE354",
    age : 20,
    sem : 6,
    course : "CE",
    greet: function(){
        console.log(`Hey , My ${idType} is ${student.idType} and my course is ${student.course} `);
       
    }
}
student.greet() //Hey , My studentId is 22BECE354 and my course is CE

student.Favsubject = "Maths";
console.log(student);
/*{
    idType: '22BECE354',
    age: 20,
    sem: 6,
    course: 'CE',
    greet: [Function: greet],
    Favsubject: 'Maths'
}*/


