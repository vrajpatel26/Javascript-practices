//High-order function :- this is function that take another function in arguments or return a function as result


//callback function :- it is function that placed into another function's arguments and execute after the completion of task.

function Details(name ,callback){
    console.log("Received input : "+name);
    callback(name)
    
}

function castDetails(name){
    console.log("hello ,"+name);
    
}

Details("Vraj",castDetails)



//WAP to perform mathemetical operation using callback functions and two variable in js.

function basicOperations(a,b,operation){
    return operation(a,b)
}

function sum(a,b){
    console.log(a+b);   
}

function multiply(a,b){
    console.log(a*b);
    
}

// console.log(basicOperations(2,2,sum));
basicOperations(2,5,sum)
basicOperations(2,5,multiply)
